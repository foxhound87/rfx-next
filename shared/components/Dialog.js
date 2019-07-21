import React from 'react';
import { observer } from 'mobx-react';

import Dialog from '@material-ui/core/Dialog';
import $ from '@/shared/styles/mixins';

const actions = ({
  labels = {},
  handlers = {},
}) => ([

  handlers.onCancel &&
    <button type="button" className={$('button')({}, 'mr2')} onClick={handlers.onCancel}>
      {labels.cancel || 'Cancel'}
    </button>,

  handlers.onConfirm &&
    <button type="button" className={$('button')({})} onClick={handlers.onConfirm}>
      {labels.confirm || 'Confirm'}
    </button>,

]);

export default observer(({
  children = null,
  message = null,
  title = '',
  open = false,
  modal = true,
  labels = {},
  handlers = {},
}) => (
  <Dialog
    autoDetectWindowHeight
    autoScrollBodyContent
    modal={modal}
    title={title}
    open={open}
    actions={actions({ labels, handlers })}
  >
    <div>{message}</div>
    <div>{children}</div>
  </Dialog>
));
