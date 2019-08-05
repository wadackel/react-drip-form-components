'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n'], ['\n  height: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TextControl = require('./TextControl');

var _TextControl2 = _interopRequireDefault(_TextControl);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Control = _TextControl2.default.withComponent('select');

var SelectControl = (0, _styledComponents2.default)(Control)(_templateObject, function (props) {
  return props.multiple ? 'auto' : (0, _theme.get)(props, 'controlHeight');
});

var _default = SelectControl;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Control, 'Control', 'src/internal/SelectControl.js');

  __REACT_HOT_LOADER__.register(SelectControl, 'SelectControl', 'src/internal/SelectControl.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/SelectControl.js');
}();

;