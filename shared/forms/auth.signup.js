import { dispatch } from 'rfx-core';
import Form from '@/shared/forms/_.extend';

export default new Form({
  fields: {
    terms: {
      label: 'Terms of Service',
      rules: 'boolean|accepted',
      type: 'checkbox',
    },
    email: {
      label: 'Email',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:5,50',
    },
    password: {
      label: 'Password',
      placeholder: 'Insert Password',
      type: 'password',
      rules: 'required|string|between:5,50',
      related: ['passwordConfirm'],
    },
    passwordConfirm: {
      label: 'Confirm Password',
      placeholder: 'Insert Confirmation Password',
      type: 'password',
      rules: 'required|string|between:5,50|same:password',
    },
  },
}, {
  name: 'AuthSignup',
  options: {
    validateOnInit: false,
    validateOnChange: true,
    showErrorsOnChange: true,
    showErrorsOnInit: false,
  },
  hooks: {
    onSuccess(form) {
      return dispatch('auth.register', form.values())
        .then(() => dispatch('ui.auth.toggleSection', 'signin'))
        .then(() => dispatch('ui.snackBar.open', 'Register Successful.'))
        .then(() => dispatch('ui.dialog.open', {
          title: 'Register Successful.',
          message: 'Account Verification Email Sent. Please, check your inbox and verify your account.',
        }))
        .then(() => { // eslint-disable-next-line
          window.location.href = '#top';
        })
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
