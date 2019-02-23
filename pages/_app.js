import React from 'react';
import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import { dehydrate } from 'rfx-core';
import $cookies from 'next-cookies';
import $store from '@/app/store';

export default withRouter(class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { req } = ctx;
    const cookies = $cookies(ctx);
    const isServer = !!req;
    const userAgent = req
      ? req.headers['user-agent']
      : navigator.userAgent; // eslint-disable-line

    const store = $store.init();
    if (store.auth) store.auth.setCookie(cookies);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        store,
        cookies,
        isServer,
        userAgent,
      });
    }

    return {
      cookies,
      isServer,
      pageProps: { ...pageProps, userAgent },
      state: dehydrate(),
    };
  }

  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.store = $store.inject(props.state);
    if (this.store.auth) this.store.auth.setCookie(cookies);
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Component
          {...pageProps}
          router={router}
          store={this.store}
        />
      </Container>
    );
  }
});
