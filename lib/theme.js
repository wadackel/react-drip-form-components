'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var colors = exports.colors = {
  white: 'rgb(255, 255, 255)',
  grayDark: 'rgb(54, 54, 54)',
  gray: 'rgb(204, 204, 204)',
  grayLight: 'rgb(187, 187, 187)',
  grayLightest: 'rgb(219, 219, 219)',
  primary: 'rgb(0, 188, 212)',
  error: 'rgb(245, 0, 87)',
  disabled: 'rgb(245, 245, 245)',
  shadow: 'rgba(0, 0, 0, 0.04)'
};

var theme = exports.theme = {
  // typography
  fontSize: '1rem',
  color: colors.grayDark,
  error: colors.error,
  disabled: colors.gray,

  // background
  background: colors.white,
  backgroundEnter: colors.white,
  backgroundFocus: colors.white,
  backgroundDisabled: colors.disabled,
  backgroundError: colors.white,

  // border
  borderWidth: '1px',
  borderRadius: '3px',
  borderColor: colors.grayLightest,
  borderColorEnter: colors.gray,
  borderColorFocus: colors.primary,
  borderColorDisabled: colors.disabled,
  borderColorError: colors.error,

  // box-shadow
  boxShadow: '0 0 0 transparent',
  boxShadowEnter: '0 2px 2px ' + colors.shadow + ' inset',
  boxShadowDisabled: '0 2px 2px ' + colors.shadow + ' inset',

  // transition
  transitionProperty: 'color, box-shadow, border',
  transitionDuration: '110ms',
  transitionTimingFunction: 'cubic-bezier(.25, .46, .45, .94)', // ease-out-quad

  // control
  controlHeight: '2.7em',

  // select
  selectArrowColor: colors.primary,

  // spinner
  spinnerColor: colors.primary,
  spinnerDuration: '500ms'
};

var extendTheme = exports.extendTheme = function extendTheme() {
  var extendsTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _extends({}, theme, extendsTheme);
};

var themeProps = exports.themeProps = {
  theme: {
    rdf: theme
  }
};

var get = exports.get = function get(props, key) {
  return props.theme.rdf[key];
};

var bind = exports.bind = function bind(key) {
  return function (props) {
    return get(props, key);
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(colors, 'colors', 'src/theme.js');

  __REACT_HOT_LOADER__.register(theme, 'theme', 'src/theme.js');

  __REACT_HOT_LOADER__.register(extendTheme, 'extendTheme', 'src/theme.js');

  __REACT_HOT_LOADER__.register(themeProps, 'themeProps', 'src/theme.js');

  __REACT_HOT_LOADER__.register(get, 'get', 'src/theme.js');

  __REACT_HOT_LOADER__.register(bind, 'bind', 'src/theme.js');
}();

;