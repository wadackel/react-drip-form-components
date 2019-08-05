'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0.4em 0;\n  color: ', ';\n'], ['\n  margin: 0.4em 0;\n  color: ', ';\n']);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchField = _Field2.default.extend(_templateObject, function (props) {
  return props.disabled ? (0, _theme.get)(props, 'disabled') : (0, _theme.get)(props, 'color');
});

var _default = SwitchField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SwitchField, 'SwitchField', 'src/internal/SwitchField.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/SwitchField.js');
}();

;