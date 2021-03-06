import Devtools from 'mobx-react-form-devtools';
import MobxReactForm from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import { dispatch } from 'rfx-core';
import bindings from './_.bindings';

/**
  What can I do with mobx-react-form ?

  API: https://foxhound87.github.io/mobx-react-form/docs/api-reference/
  FIELDS: https://foxhound87.github.io/mobx-react-form/docs/defining-fields.html
  ACTIONS: https://foxhound87.github.io/mobx-react-form/docs/actions/
  EVENTS: https://foxhound87.github.io/mobx-react-form/docs/events/
  VALIDATION: https://foxhound87.github.io/mobx-react-form/docs/validation/
  BINDINGS: https://foxhound87.github.io/mobx-react-form/docs/bindings/
*/

export default class Form extends MobxReactForm {

  plugins() {
    return {
      dvr: dvr(validatorjs),
    };
  }

  bindings() {
    return bindings;
  }

  hooks() {
    return {
      onInit() {
        this.each(field =>
          field.set('bindings', 'MaterialTextField'));

        if (!this.name) return;
        Devtools.register({ [this.name]: this });
      },
      onError() {
        // eslint-disable-next-line
        console.log('onError', {
          errors: this.errors(),
          values: this.values(),
        });

        dispatch('ui.snackBar.open', 'Incomplete Data');
      },
    };
  }
}
