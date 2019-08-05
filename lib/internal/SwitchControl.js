'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  top: -1px;\n  margin: 0 0.75em 0 0;\n  padding: 0;\n  line-height: 1;\n  vertical-align: middle;\n'], ['\n  position: relative;\n  top: -1px;\n  margin: 0 0.75em 0 0;\n  padding: 0;\n  line-height: 1;\n  vertical-align: middle;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchControl = _styledComponents2.default.input(_templateObject);

SwitchControl.defaultProps = _theme.themeProps;

var _default = SwitchControl;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SwitchControl, 'SwitchControl', 'src/internal/SwitchControl.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/SwitchControl.js');
}();

;