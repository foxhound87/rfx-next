import React from 'react';
import { observer } from 'mobx-react';

const Spinner = () => <div
  className="spinner"
  style={{ margin: '0 auto', fontSize: '6px' }}
/>;

export default observer(({ loading, component }) =>
  loading ? <Spinner /> : component);

export { Spinner };
