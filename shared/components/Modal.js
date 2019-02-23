import React from 'react';
import { observer } from 'mobx-react';
import ReactModal from 'react-modal';
import _ from 'lodash';

import {
  modalBaseStyle,
  modalMobileStyle,
  modalDesktopStyle } from '@/shared/styles/modal';

const applyCustomStyle = bp =>
  _.merge({}, modalBaseStyle, bp.su
    ? modalDesktopStyle
    : modalMobileStyle);

export default observer(({

  children, label, isOpen, onClose, breakpoints,

}) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel={label}
    onRequestClose={onClose}
    style={applyCustomStyle(breakpoints)}
  >
    {children}
  </ReactModal>
));
