'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n'], ['\n  display: block;\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Field = _styledComponents2.default.div(_templateObject, (0, _theme.bind)('fontSize'));

Field.defaultProps = _theme.themeProps;

var _default = Field;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Field, 'Field', 'src/internal/Field.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/Field.js');
}();

;