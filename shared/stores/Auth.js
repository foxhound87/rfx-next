/* eslint no-console: 0 */
import { observable, computed, action } from 'mobx';
import { extend } from 'rfx-core';
import { app, service } from '@/shared/feathers';
import cookie from 'js-cookie';
import _ from 'lodash';

import manager from './AuthManager.js';

const isClient = (typeof window !== 'undefined');

@extend({
  manager,
})
export default class AuthStore {

  manager = null;
  idField = '_id';
  cookieName = 'ssrToken';
  @observable jwt = null;
  @observable payload = {};
  @observable user = {};

  init() {
    // user model rehydration
    this.updateUser(this.user);
  }

  authenticate($cookies = null) {
    return isClient
      ? this.authOnClient()
      : this.authOnServer($cookies);
  }

  /**
    Authorize on Server Side
  */
  @action
  authOnServer($cookies = null) {
    // get cookie from request or jwt if already exist
    const token = this.jwt || _.get($cookies, this.cookieName);
    // force logout if token not present
    if (!token) return this.logout();
    // authorize apis on server side
    return this.jwtAuth({ token })
      .catch(err => console.error('Auth', err));
  }

  /**
    Authorize on Client Side
  */
  @action
  authOnClient() {
    // get cookie from browser or jwt if already exist
    const token = this.jwt || cookie.get(this.cookieName);
    // force logout if token not present
    if (!token) return this.logout();
    // authorize apis on client side
    return this.jwtAuth({ token })
      .catch(err => console.error('Auth', err));
  }

  /**
    Check Auth (if user is logged)
  */
  @computed get check() {
    return (this.jwt && !_.isEmpty(this.user)) ? true : false;
  }

  @computed get id() {
    return this.user[this.idField] || null;
  }

  @computed get isAdmin() {
    return (_.intersection(this.user.roles, ['admin']).length !== 0);
  }

  isAuthenticated() {
    return new Promise((resolve, reject) =>
      this.check
        ? resolve(true)
        : reject(false));
  }

  @action
  updateUser(data = null) {
    const check = (!_.isEmpty(data) && data !== null);
    this.user = check ? { ...data, $service: 'users' } : {};
    this.manager.setup(this, this.user);
    app().set('user', data);
  }

  jwtAuth({ token }) {
    if (!isClient) {
      app().set('accessToken', token);
      return this.verifyToken(token)
        .then(payload => this.loadUser(payload.userId));
        // .catch(err => console.error('Auth', err));
    }

    return app()
      .authenticate({ strategy: 'jwt', accessToken: token })
      .then(response => this.verifyToken(response.accessToken))
      .then(payload => this.loadUser(payload.userId));
      // .catch(err => console.error('Auth', err));
  }

  @action
  login({ email, password }) {
    return app()
      .authenticate({ strategy: 'local', email, password })
      .then(response => this.verifyToken(response.accessToken))
      .then(payload => this.loadUser(payload.userId));
      // .catch(err => console.error('Auth', err));
  }

  @action
  register({ email, password, username }) {
    return service('users')
      .create({ email, password, username })
      .then(() => this.login({ email, password }));
      // .catch(err => console.error('Auth', err));
  }

  loadUser(id = null) {
    return service('users').get(id || this.id)
      .then(user => this.updateUser(user));
      // .catch(err => console.error('Auth', err));
  }

  verifyToken(token) {
    return app().passport.verifyJWT(token)
      // eslint-disable-next-line
      .then(payload => action(() => (this.payload = payload))())
      .then(() => this.setCookie(token));
      // .catch(err => console.error('Auth', err));
  }

  getCookie() {
    return {
      [this.cookieName]: this.jwt,
    };
  }

  @action
  setCookie(token = null) {
    this.jwt = _.isString(token) ? token : token[this.cookieName];
    cookie.set(this.cookieName, this.jwt || null);
    return this.payload;
  }

  @action
  unsetCookie() {
    this.jwt = null;
    this.payload = {};
    cookie.remove(this.cookieName);
  }

  @action
  logout() {
    return new Promise((resolve) => {
      app().set('accessToken', null);
      app().set('user', null);
      app().logout();
      this.unsetCookie();
      this.updateUser({});
      resolve();
    });
  }
}
