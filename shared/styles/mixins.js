import cx from 'classnames';
import _ from 'lodash';

import {
  globals,
  buttons,
} from './mixins.themes';

const buttonGroupBase = ({
  active = false,
  resp = null,
  theme = 'blue',
}, classes) => cx(classes, buttons.base,
  active && buttons.active,
  (theme && !active) && buttons.themes[theme],
  resp
    ? buttons.types.mediumResp
    : buttons.medium);

const buttonGroupCenter = ({ active = false, theme, resp = null }, classes) =>
  buttonGroupBase({ active, theme, resp }, classes);

const buttonGroupLeft = ({ active = false, theme, resp = null }, classes) =>
  buttonGroupBase({ active, theme, resp }, cx(classes, 'br2 br--left'));

const buttonGroupRight = ({ active = false, theme, resp = null }, classes) =>
  buttonGroupBase({ active, theme, resp }, cx(classes, 'br2 br--right'));

const button = ({
  icon = null,
  big = null,
  small = null,
  medium = null,
  pill = null,
  rounded = null,
  disabled = null,
  bold = false,
  theme = 'blue',
  type = null,
}, classes) =>
  cx(buttons.base,
    bold && 'b',
    icon && buttons.icon,
    big && buttons.types.big,
    small && buttons.types.small,
    medium && buttons.types.medium,
    // (!big && !medium && !small && !icon) && buttons.normal,
    pill && buttons.pill,
    rounded && buttons.rounded,
    disabled && buttons.disabled,
    theme && buttons.themes[theme],
    type && buttons.types[type],
    classes);

const mixins = (extend = {}) =>
  select => _.merge({

    globals,
    buttons,

  }, {

    button,
    buttonGroupCenter,
    buttonGroupLeft,
    buttonGroupRight,

  }, extend)[select];

export default mixins();
