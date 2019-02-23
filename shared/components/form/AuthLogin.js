import React from 'react';
import { observer } from 'mobx-react';

import TextField from '@/shared/components/form/inputs/MaterialTextField';
import FormControls from '@/shared/components/form/controls/FormControls';

export default observer(({ form, children = null }) => (
  <form>
    <TextField fullwidth field={form.$('email')} />
    <TextField fullwidth field={form.$('password')} />
    {children}
    <FormControls
      form={form}
      controls={{ onSubmit: true }}
      labels={{ submit: 'Login' }}
    />
    <p className="red">{form.error}</p>
  </form>
));
