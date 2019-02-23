import { dispatch } from 'rfx-core';
import Form from '@/shared/forms/_.extend';

export default new Form({
  fields: {
    email: {
      label: 'Email',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:5,50',
      output: value => value.toLowerCase(),
    },
  },
}, {
  hooks: {
    name: 'AuthVerify',
    onSuccess(form) {
      return dispatch('auth.manager.resendVerifySignup', form.values())
        .then(() => dispatch('ui.auth.toggleModal', 'close'))
        .then(() => dispatch('ui.auth.toggleSection', 'signin'))
        .then(() => dispatch('ui.dialog.open', {
          title: 'Account Verification Email Sent',
          message: 'Please, check your inbox and verify your account',
        }))
        .then(() => form.clear())
        .catch(err => [
          console.error(err),
          form.invalidate(err.message),
          dispatch('ui.dialog.open', {
            title: 'Error',
            message: err.message,
          }),
        ]);
    },
  },
});
