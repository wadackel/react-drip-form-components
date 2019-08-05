'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::after {\n    display: block;\n    position: absolute;\n    right: 1em;\n    top: 1.3em;\n    z-index: 5;\n    width: 0.5em;\n    height: 0.5em;\n    margin-top: -0.375em;\n    border: 1px solid ', ';\n    border-right: 0;\n    border-top: 0;\n    transform: rotate(-45deg);\n    pointer-events: none;\n    content: ', ';\n  }\n'], ['\n  &::after {\n    display: block;\n    position: absolute;\n    right: 1em;\n    top: 1.3em;\n    z-index: 5;\n    width: 0.5em;\n    height: 0.5em;\n    margin-top: -0.375em;\n    border: 1px solid ', ';\n    border-right: 0;\n    border-top: 0;\n    transform: rotate(-45deg);\n    pointer-events: none;\n    content: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectField = (0, _styledComponents2.default)(_Field2.default)(_templateObject, (0, _theme.bind)('selectArrowColor'), function (props) {
  return props.showSpinner ? 'none' : '""';
});

var _default = SelectField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SelectField, 'SelectField', 'src/internal/SelectField.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/SelectField.js');
}();

;