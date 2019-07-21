import React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'rfx-core';
import Router from 'next/router';

import $ from '@/shared/styles/mixins';
import { authorize } from '@/app/components/hoc/authorize';
import { layout } from '@/app/components/hoc/layout';

@layout @authorize @observer
export default class Index extends React.Component {

  render() {
    const { store } = this.props;

    return (
      <div className="pv5 ph4">
        <h1>Welcome,</h1>
        <h2>{store.auth.user.email}</h2>
        <button
          className={$('button')({ small: true }, 'mr2')}
          onClick={() => dispatch('auth.logout')}
        >
          Logout
        </button>
        <button
          className={$('button')({ small: true })}
          onClick={() => Router.push('/test')}
        >
          Go To Test Page
        </button>
      </div>
    );
  }
}
