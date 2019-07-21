import React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'rfx-core';

import $ from '@/shared/styles/mixins';

import AuthFormLogin from '@/shared/components/form/AuthLogin';
import AuthFormRegister from '@/shared/components/form/AuthRegister';
import AuthFormVerify from '@/shared/components/form/AuthVerify';
import AuthFormReset from '@/shared/components/form/AuthReset';
import TermsAgreement from '@/shared/components/TermsAgreement';

import signinForm from '@/shared/forms/auth.signin';
import signupForm from '@/shared/forms/auth.signup';
import verifyForm from '@/shared/forms/auth.verify';
import resetForm from '@/shared/forms/auth.reset';

const hasEnabledField = (form, field) =>
  (form.has(field) && !form.$(field).disabled);

const handleShowSigninSection = () =>
  dispatch('ui.auth.toggleSection', 'signin');

const handleShowSignupSection = () =>
  dispatch('ui.auth.toggleSection', 'signup');

const handleShowVerifySection = () =>
  dispatch('ui.auth.toggleSection', 'verify');

const handleShowResetSection = () =>
  dispatch('ui.auth.toggleSection', 'forgot');

const SectionSwitch = observer(({ showSection }) => (
  <div className="cf dib pv5">
    <button
      type="button"
      onClick={handleShowSigninSection}
      className={$('buttonGroupLeft')({
        resp: true,
        active: (showSection === 'signin'),
      })}
    >
      Login
    </button>
    <button
      type="button"
      onClick={handleShowSignupSection}
      className={$('buttonGroupRight')({
        resp: true,
        active: (showSection === 'signup'),
      })}
    >
      Register
    </button>
  </div>
));

export default observer(({
  showSection,
  breakpoints,
  showSwitchButtons = true,
  showSupportButtons = true,
}) => (
  <div className="pv5 ph4 ph5-ns tc measure center">
    {showSwitchButtons &&
      <SectionSwitch showSection={showSection} />}

    {showSection === 'signin' &&
      <div>
        <h3>Login</h3>
        <AuthFormLogin form={signinForm}>
          {hasEnabledField(signinForm, 'terms') &&
            <TermsAgreement
              field={signinForm.$('terms')}
              breakpoints={breakpoints}
            />}
        </AuthFormLogin>
      </div>}

    {showSection === 'signup' &&
      <div>
        <h3>Register</h3>
        <AuthFormRegister form={signupForm}>
          {hasEnabledField(signupForm, 'terms') &&
            <TermsAgreement
              field={signupForm.$('terms')}
              breakpoints={breakpoints}
            />}
        </AuthFormRegister>
      </div>}

    {showSection === 'verify' &&
      <div>
        <h3>Account Verification</h3>
        <AuthFormVerify form={verifyForm} />
      </div>}

    {showSection === 'forgot' &&
      <div>
        <h3>Password Recovery</h3>
        <AuthFormReset form={resetForm} />
      </div>}

    {(showSection !== 'verify' && (showSupportButtons && showSwitchButtons)) &&
      <a onClick={handleShowVerifySection} className="db link dim underline pointer pt3" >
        Resend Verification Email
      </a>}

    {(showSection !== 'forgot' && (showSupportButtons && showSwitchButtons)) &&
      <a onClick={handleShowResetSection} className="db link dim underline pointer pt3" >
        Reset Password
      </a>}

  </div>
));
