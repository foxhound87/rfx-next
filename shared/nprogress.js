import NProgress from 'nprogress';
import Router from 'next/router';
import { dispatch } from 'rfx-core';

// eslint-disable-next-line
export default () => ([
  NProgress.configure({ showSpinner: false }),
  Router.onRouteChangeError = () => NProgress.done(),
  Router.onRouteChangeStart = () => NProgress.start(),
  Router.onRouteChangeComplete = () => [
    dispatch('ui.ready', true),
    NProgress.done(),
  ],
]);
