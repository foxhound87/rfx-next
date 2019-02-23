import React from 'react';
import { observer } from 'mobx-react';

import TextField from '@/shared/components/form/inputs/MaterialTextField';
import FormControls from '@/shared/components/form/controls/FormControls';

export default observer(({ form }) => (
  <form>
    <TextField field={form.$('email')} />
    <FormControls
      form={form}
      controls={{ onSubmit: true }}
      labels={{ submit: 'Send Password Reset' }}
    />
    <p className="red">{form.error}</p>
  </form>
));
