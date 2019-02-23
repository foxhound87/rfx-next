import React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'rfx-core';

import Modal from '@/shared/components/Modal';
import Auth from '@/shared/components/Auth';

const handleCloseModal = () =>
  dispatch('ui.auth.toggleModal', 'close');

export default observer(({
  open,
  breakpoints,
  showSection,
  termsModalIsOpen,
  showSwitchButtons,
  showSupportButtons,
}) => (
  <Modal
    className="z-max"
    label="Authorize"
    isOpen={open}
    breakpoints={breakpoints}
    onClose={handleCloseModal}
  >
    <Auth
      breakpoints={breakpoints}
      showSection={showSection}
      termsModalIsOpen={termsModalIsOpen}
      showSwitchButtons={showSwitchButtons}
      showSupportButtons={showSupportButtons}
    />
  </Modal>
));
