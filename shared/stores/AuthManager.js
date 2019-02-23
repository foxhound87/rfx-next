import { service } from '@/shared/feathers';

/**
  package: feathers-authentication-management
  docs: https://docs.feathersjs.com/api/authentication/local-management.html
*/
export default class AuthManager {

  manager = null;
  auth = null;
  user = null;

  setup(auth, user) {
    this.auth = auth;
    this.user = user;
  }

  resendVerifySignup(user = {}) {
    return service('authManagement').create({
      action: 'resendVerifySignup',
      value: { email: user.email || this.user.email },
    });
  }

  sendResetPwd({ email }) {
    return service('authManagement').create({
      action: 'sendResetPwd',
      value: { email },
    });
  }

  verifySignupLong(verifyToken) {
    return service('authManagement').create({
      action: 'verifySignupLong',
      value: verifyToken,
    });
  }

  resetPwdLong(token, password) {
    return service('authManagement').create({
      action: 'resetPwdLong',
      value: { token, password },
    });
  }

  passwordChange($old, $new, user = {}) {
    return this.auth.authenticate()
      .then(() => service('authManagement').create({
        action: 'passwordChange',
        value: {
          user: { email: user.email || this.user.email },
          oldPassword: $old,
          password: $new,
        },
      }));
  }

  identityChange(password, changes = {}, user = {}) {
    return this.auth.authenticate()
      .then(() => service('authManagement').create({
        action: 'identityChange',
        value: {
          user: { email: user.email || this.user.email },
          password,
          changes,
        },
      }));
  }
}
