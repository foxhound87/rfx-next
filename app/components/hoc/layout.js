/* eslint import/prefer-default-export: 0 */
/* eslint react/no-children-prop: 0 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { MatchMediaProvider } from 'mobx-react-matchmedia';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import Devtools from 'mobx-react-form-devtools';
import Snackbar from '@material-ui/core/Snackbar';

import Head from '@/app/components/Head';
import Header from '@/app/components/Header';
import Splash from '@/shared/components/Splash';
import Dialog from '@/shared/components/Dialog';
import AuthModal from '@/shared/components/AuthModal';
import nprogress from '@/shared/nprogress';
import material from '@/app/material';
import env from '#/env';

nprogress();

const notProduction = env('ENV') !== 'production';

export const layout = Page =>
  observer(class Layout extends Component {

    static async getInitialProps(ctx) {
      return Page.getInitialProps ?
        Page.getInitialProps(ctx) :
        {};
    }

    // componentWillMount() {
    //   const { store, router } = this.props;
    // }

    componentDidMount() {
      const { store } = this.props;
      store.ui.ready();

      // MaterialUI
      // Remove the server-side injected CSS.
      // eslint-disable-next-line
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { store } = this.props;

      return (
        <JssProvider
          registry={material.sheetsRegistry}
          generateClassName={material.generateClassName}
        >
          <MuiThemeProvider
            theme={material.theme}
            sheetsManager={material.sheetsManager}
          >
            <MatchMediaProvider breakpoints={store.ui.breakpoints}>
              <CssBaseline />

              {(store.ui.showSplashScreen) &&
                <Splash styles="z-999 bg-near-white" />}

              {notProduction &&
                <Devtools.UI />}

              <Head />
              <Header />

              <div className="bg-white contain bg-center helvetica">
                <Page {...this.props} />
              </div>

              <Dialog
                open={store.ui.dialog.isOpen}
                title={store.ui.dialog.title}
                message={store.ui.dialog.message}
                handlers={store.ui.dialog.handlers}
                labels={store.ui.dialog.labels}
                children={store.ui.dialog.children}
              />

              <Snackbar
                open={store.ui.snackBar.isOpen}
                message={store.ui.snackBar.message}
                autoHideDuration={store.ui.snackBar.duration}
                onClose={() => store.ui.snackBar.close()}
              />

              <AuthModal
                open={store.ui.auth.$modalIsOpen}
                breakpoints={store.ui.breakpoints}
                showSection={store.ui.auth.$showSection}
                showSwitchButtons={store.ui.auth.$showSwitchButtons}
                showSupportButtons={store.ui.auth.$showSupportButtons}
              />

            </MatchMediaProvider>
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  });
