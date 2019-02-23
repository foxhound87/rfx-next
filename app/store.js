import { store } from 'rfx-core';
import { configure } from 'mobx';

import ui from '@/app/stores/UI';
import auth from '@/app/stores/Auth';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
configure({
  enforceActions: 'always',
});

/**
  Stores
*/
export default store
  .setup({
    ui,
    auth,
  });
