import React from 'react';
import cx from 'classnames';

const $style = styles => cx('tc pt6 pt7-ns fixed top-0 left-0 right-0 bottom-0', styles);

export default ({ styles }) => (
  <div className={$style(styles)}>
    <div className="spinner" />
  </div>
);
