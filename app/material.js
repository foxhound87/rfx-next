import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import { SheetsRegistry } from 'jss';

export default {
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new SheetsRegistry(),
  // The standard class name generator.
  generateClassName: createGenerateClassName(),
  // MuiTheme Styles
  theme: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  }),
};
