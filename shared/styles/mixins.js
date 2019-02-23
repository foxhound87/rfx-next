import cx from 'classnames';

const header = ({ bg }, classes) => bg
  ? cx('br0 br2-ns pv3 pv4-ns ph3 mb3-ns f4 f3-ns dark-gray bg-white-80 bb bn-m b--moon-gray', classes)
  : cx('ph3 pv3 pv4-ns bg-washed-blue bb btn brn bln b--light-gray f4 f3-ns', classes);

const layout = ({ bg }, classes) => bg
  ? cx('center mw6 mw8-ns ph3 pb3 pb4-ns', classes)
  : cx('center mw6 mw8-ns ph3 pv3 pv4-ns', classes);

const link = cx('link', 'underline', 'pointer', 'blue', 'hover-navy');
const errorMessage = cx('red', 'm2', 'pt4');

const buttonBase = cx('link', 'ba', 'dib', 'pointer', 'bg-animate', 'bg-transparent');
const buttonBaseBlue = cx('b--blue', 'blue', 'hover-bg-blue', 'hover-white');
const buttonBaseGreen = cx('bn', 'white', 'bg-green', 'hover-bg-dark-green');
const buttonBaseBGBlue = cx('bn', 'white', 'bg-blue', 'hover-bg-dark-blue');
const buttonBaseLightBlue = cx('bn', 'white', 'bg-light-blue', 'hover-bg-blue');
const buttonBaseLightRed = cx('bn', 'white', 'bg-light-red', 'hover-bg-red');
const buttonNormal = cx('f5', 'ph3', 'pv2');
const buttonNormalResp = cx('f5', 'ph2', 'ph3-ns', 'pv1', 'pv2-ns');
const buttonSmall = cx('f6', 'ph3', 'pv2');
const buttonIcon = cx('f5', 'ph2', 'pv1');
const buttonBig = cx('f4', 'ph4', 'pv3');
const buttonDisabled = cx('b--grey', 'grey', 'hover-bg-grey');
const buttonGeneric = cx('br2');
const buttonPill = cx('br-pill');
const buttonRounded = cx('br2');

const buttonPillSearch = cx(buttonBase, buttonBaseBlue,
  'fl', 'f6', 'f5-l', 'button-reset', 'pv2', 'tc', 'bn',
  'pointer', 'w-25', 'w-20-l', 'br2', 'br--right',
  'br--right-ns',
);

const inputSearch = cx(
  'fl', 'f6', 'f5-l', 'input-reset', 'bn', 'black-80', 'bg-white',
  'fl', 'pa2', 'lh-solid', 'w-75', 'w-80-l', 'br2', 'br--left',
);

const buttonGroupBase = ({ resp = false, active = false }) => cx(
  buttonBase, 'b--blue',
  active ? 'white bg-blue' : 'blue bg-white hover-bg-lightest-blue',
  resp ? buttonNormalResp : buttonNormal,
);

const buttonGroupCenter = ({ resp = false, active = false }) =>
  cx(buttonGroupBase({ resp, active }));

const buttonGroupLeft = ({ resp = false, active = false }) =>
  cx(buttonGroupBase({ resp, active }), 'br2', 'br--left');

const buttonGroupRight = ({ resp = false, active = false }) =>
  cx(buttonGroupBase({ resp, active }), 'br2', 'br--right');

const button = ({
    icon = null,
    big = null,
    small = null,
    pill = null,
    rounded = null,
    disabled = null,
    bold = false,
    color = 'blue',
  }, classes) =>
    cx(buttonBase,
      bold && 'b',
      icon && buttonIcon,
      big && buttonBig,
      small && buttonSmall,
      (!big && !small && !icon) && buttonNormal,
      pill && buttonPill,
      rounded && buttonRounded,
      disabled && buttonDisabled,
      color === 'green' && buttonBaseGreen,
      color === 'blue' && buttonBaseBlue,
      color === 'bg-blue' && buttonBaseBGBlue,
      color === 'light-blue' && buttonBaseLightBlue,
      color === 'light-red' && buttonBaseLightRed,
      classes);

export default {
  cx,
  layout,
  link,
  header,
  button,
  buttonBase,
  buttonGeneric,
  buttonPill,
  buttonPillSearch,
  buttonGroupCenter,
  buttonGroupLeft,
  buttonGroupRight,
  inputSearch,
  errorMessage,
};
