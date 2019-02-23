import { dispatch } from 'rfx-core';
import Form from '@/shared/forms/_.extend';

export default new Form({
  fields: {
    terms: {
      label: 'License Agreement',
      rules: 'boolean|accepted',
      type: 'checkbox',
      disabled: true,
    },
    email: {
      label: 'Email',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:5,50',
      output: value => value.toLowerCase(),
    },
    password: {
      label: 'Password',
      placeholder: 'Insert Password',
      type: 'password',
      rules: 'required|between:5,50',
    },
  },
}, {
  name: 'AuthSignin',
  options: {
    validateOnInit: false,
    validateOnChange: true,
    showErrorsOnChange: true,
    showErrorsOnInit: false,
  },
  hooks: {
    onSuccess(form) {
      return dispatch('auth.login', form.values())
        .then(() => dispatch('ui.auth.toggleModal', 'close'))
        .then(() => dispatch('ui.snackBar.open', 'Login Successful'))
        .then(() => { // eslint-disable-next-line
          window.location.href = '#top';
        })
        .then(() => form.clear())
        .catch(err => [
          console.error(err),
          form.invalidate(err.message),
          dispatch('ui.snackBar.open', err.message),
        ]);
    },
  },
});
