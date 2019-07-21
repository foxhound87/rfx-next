import React from 'react';
import { observer } from 'mobx-react';

import $ from '@/shared/styles/mixins';
import { Spinner } from '@/shared/components/LoadingSpinner';

export default observer(({
  form,
  disabled = {},
  labels = {},
  controls = null,
  medium = true,
  big = false,
  small = false,
  pill = true,
}) => (
  <div>
    <div className="pt3">

      {(!controls || controls.onSubmit) &&
        (form.submitting || form.validating) ?
          <Spinner /> :
          <button
            type="submit"
            onClick={form.onSubmit}
            disabled={disabled.submit || form.submitting}
            className={$('button')({ big, medium, small, pill, disabled: disabled.submit })}
          >
            <b><i className="fa fa-dot-circle-o" /> {labels.submit || 'Submit'} </b>
          </button>}

      {(!controls || controls.onClear) &&
        <button
          type="button"
          onClick={form.onClear}
          disabled={disabled.clear}
          className={$('button')({ big, medium, small, pill, disabled: disabled.clear }, 'ml2')}
        >
          <i className="fa fa-eraser" /> {labels.clear || 'Clear'}
        </button>}

      {(!controls || controls.onReset) &&
        <button
          type="button"
          onClick={form.onReset}
          disabled={disabled.reset}
          className={$('button')({ big, medium, small, pill, disabled: disabled.reset }, 'ml2')}
        >
          <i className="fa fa-refresh" /> {labels.reset || 'Reset'}
        </button>}

    </div>

    {((!controls || controls.error) && form.hasError) &&
      <div className={$('globals').errorMessage}><i>{form.error}</i></div>}

  </div>
));
