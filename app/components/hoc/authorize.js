/* eslint import/prefer-default-export: 0 */
import React from 'react';
import { observer } from 'mobx-react';
import cookies from 'next-cookies';
import AuthComponent from '@/shared/components/Auth';

export const authorize = Component =>
  observer(class Auth extends React.Component {

    static async getInitialProps(ctx) {
      const { store, query } = ctx;

      return store.auth.authenticate(cookies(ctx))
        .then(() => query.section && store.ui.auth.toggleSection(query.section))
        .then(() => (store.auth.check && Component.getInitialProps)
          ? Component.getInitialProps(ctx)
          : {});
    }

    render() {
      const { store } = this.props;

      return (
        <div>
          {store.auth.check
            ? <Component {...this.props} />
            : <AuthComponent
              showSection={store.ui.auth.$showSection}
              breakpoints={store.ui.breakpoints}
              termsModalIsOpen={store.ui.termsModalIsOpen}
            />}
        </div>
      );
    }
  });
