'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 6em;\n  padding: 0.7em;\n  resize: vertical;\n'], ['\n  height: 6em;\n  padding: 0.7em;\n  resize: vertical;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TextControl = require('./TextControl');

var _TextControl2 = _interopRequireDefault(_TextControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Control = _TextControl2.default.withComponent('textarea');

var TextareaControl = (0, _styledComponents2.default)(Control)(_templateObject);

var _default = TextareaControl;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Control, 'Control', 'src/internal/TextareaControl.js');

  __REACT_HOT_LOADER__.register(TextareaControl, 'TextareaControl', 'src/internal/TextareaControl.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/TextareaControl.js');
}();

;