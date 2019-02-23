import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';

export default observer(({
  field,
  placeholder = null,
  fullwidth = false,
}) => (
  <div>
    <TextField
      {...field.bind({ placeholder })}
      fullWidth={fullwidth}
      margin="normal"
    />
  </div>
));
