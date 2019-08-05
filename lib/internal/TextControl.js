'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: ', ';\n  appearance: none;\n  margin: 0;\n  padding: 0.3em 0.7em;\n  background: ', ';\n  border-style: solid;\n  border-width: ', ';\n  border-color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  color: ', ';\n  vertical-align: top;\n  font-size: 1rem;\n  font-family: inherit;\n  line-height: 1.4;\n  transition-property: ', ';\n  transition-duration: ', ';\n  transition-timing-function: ', ';\n\n  &:not(:disabled):hover {\n    background: ', ';\n    border-color: ', ';\n  }\n\n  &:not(:disabled):focus {\n    outline: none;\n    background: ', ';\n    border-color: ', ';\n    box-shadow: ', ';\n  }\n\n  &:disabled {\n    color: ', ';\n    background: ', ';\n    border-color: ', ';\n    cursor: not-allowed;\n  }\n'], ['\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: ', ';\n  appearance: none;\n  margin: 0;\n  padding: 0.3em 0.7em;\n  background: ', ';\n  border-style: solid;\n  border-width: ', ';\n  border-color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  color: ', ';\n  vertical-align: top;\n  font-size: 1rem;\n  font-family: inherit;\n  line-height: 1.4;\n  transition-property: ', ';\n  transition-duration: ', ';\n  transition-timing-function: ', ';\n\n  &:not(:disabled):hover {\n    background: ', ';\n    border-color: ', ';\n  }\n\n  &:not(:disabled):focus {\n    outline: none;\n    background: ', ';\n    border-color: ', ';\n    box-shadow: ', ';\n  }\n\n  &:disabled {\n    color: ', ';\n    background: ', ';\n    border-color: ', ';\n    cursor: not-allowed;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextControl = _styledComponents2.default.input(_templateObject, (0, _theme.bind)('controlHeight'), (0, _theme.bind)('background'), (0, _theme.bind)('borderWidth'), function (props) {
  return props.error ? (0, _theme.get)(props, 'borderColorError') : (0, _theme.get)(props, 'borderColor');
}, (0, _theme.bind)('borderRadius'), (0, _theme.bind)('boxShadow'), (0, _theme.bind)('color'), (0, _theme.bind)('transitionProperty'), (0, _theme.bind)('transitionDuration'), (0, _theme.bind)('transitionTimingFunction'), function (props) {
  return props.error ? (0, _theme.get)(props, 'backgroundError') : (0, _theme.get)(props, 'backgroundEnter');
}, function (props) {
  return props.error ? (0, _theme.get)(props, 'borderColorError') : (0, _theme.get)(props, 'borderColorEnter');
}, function (props) {
  return props.error ? (0, _theme.get)(props, 'backgroundError') : (0, _theme.get)(props, 'backgroundFocus');
}, function (props) {
  return props.error ? (0, _theme.get)(props, 'borderColorError') : (0, _theme.get)(props, 'borderColorFocus');
}, (0, _theme.bind)('boxShadowEnter'), (0, _theme.bind)('disabled'), (0, _theme.bind)('backgroundDisabled'), (0, _theme.bind)('borderColorDisabled'));

TextControl.defaultProps = _theme.themeProps;

var _default = TextControl;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TextControl, 'TextControl', 'src/internal/TextControl.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/TextControl.js');
}();

;