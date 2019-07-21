import React from 'react';
import { observer } from 'mobx-react';
import Toggle from '@material-ui/core/Switch';

export default observer(({ field, label = null, showError = true }) => (
  <div>
    <br />
    <Toggle
      label={label || field.label}
      id={field.id}
      name={field.name}
      value={field.value}
      onChange={field.onToggle}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
      disabled={field.disabled}
    />
    {showError &&
      <small
        id="name-desc"
        className="f7 black-60 db mt1 mb3 red"
      >
        {field.error}
      </small>}
  </div>
));
