/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { observer } from 'mobx-react';
// import { dispatch } from 'rfx-core';

import MaterialToggle from '@/shared/components/form/inputs/MaterialToggle';

const handleOpenTerms = () => alert('terms');

export default observer(({ field }) => (
  <div className="mb2">
    <div className="cf br2 ba b--light-gray bg-near-white mt4 pt1 ph3 pb3">
      <div className="fl-ns">
        <MaterialToggle field={field} showError={false} label=" " />
      </div>
      <div className="di db-ns tl ma0 mt4 mb3">
        I have read and accepted the
        <a
          className="link underline pointer blue hover-navy ml2"
          onClick={handleOpenTerms}
        >
          Terms of Service
        </a>
      </div>
    </div>
    <div>
      <small
        id="name-desc"
        className="f7 black-60 db mt1 mb3 red"
      >
        {field.error}
      </small>
    </div>
  </div>
));
