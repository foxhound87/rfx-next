import { observable, action } from 'mobx';
import { extend } from 'rfx-core';

import SharedUI from '@/shared/stores/UI.js';

// ui classes
import auth from '@/shared/stores/ui/Auth.js';
import dialog from '@/shared/stores/ui/Dialog.js';
import snackBar from '@/shared/stores/ui/SnackBar.js';

@extend({
  auth,
  dialog,
  snackBar,
})
export default class UI extends SharedUI {}
