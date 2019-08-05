'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  margin: 0.2em 0 0;\n  color: ', ';\n  font-size: 0.85rem;\n  line-height: 1.4;\n'], ['\n  display: block;\n  margin: 0.2em 0 0;\n  color: ', ';\n  font-size: 0.85rem;\n  line-height: 1.4;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorLabel = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.rdf.error;
});

ErrorLabel.defaultProps = _theme.themeProps;

var _default = ErrorLabel;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorLabel, 'ErrorLabel', 'src/internal/ErrorLabel.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/ErrorLabel.js');
}();

;