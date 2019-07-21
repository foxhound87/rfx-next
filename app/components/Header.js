import React from 'react';
import { dispatch } from 'rfx-core';
import $ from '@/shared/styles/mixins';

export default ({ check }) => (
  <div className="cf bg-navy washed-blue fixed w-100 ph2 pv2 pv3-ns ph3-m ph4-l z-999">
    <span className="fl mv1 f4">RFX NEXT</span>
    {check &&
      <button
        type="button"
        className={$('button')({ small: true, theme: 'yellow' }, 'fr mt1')}
        onClick={() => dispatch('auth.logout')}
      >
        Logout
      </button>}
  </div>
);
