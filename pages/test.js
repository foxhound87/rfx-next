import React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'rfx-core';
import Router from 'next/router'

import $ from '@/shared/styles/mixins'
import { authorize } from '@/app/components/hoc/authorize';
import { layout } from '@/app/components/hoc/layout';

@layout @authorize @observer
export default class Index extends React.Component {

  render() {
    const { store } = this.props;

    return (
      <div className="pv5 ph4">
        <br />
        <h1>Test Page</h1>
        <button
          className={$.button({})}
          onClick={() => Router.push('/')}
        >
          Go To Home Page
        </button>
      </div>
    );
  }
}
