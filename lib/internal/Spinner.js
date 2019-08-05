'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n'], ['\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  top: 0.8em;\n  right: 0.8em;\n  margin: 0;\n  width: 1em;\n  height: 1em;\n  border: 1px solid ', ';\n  border-top-width: 0;\n  border-radius: 50%;\n  animation: ', ' ', ' infinite linear;\n  transform-origin: 50% 49%;\n'], ['\n  display: block;\n  position: absolute;\n  top: 0.8em;\n  right: 0.8em;\n  margin: 0;\n  width: 1em;\n  height: 1em;\n  border: 1px solid ', ';\n  border-top-width: 0;\n  border-radius: 50%;\n  animation: ', ' ', ' infinite linear;\n  transform-origin: 50% 49%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var spin = (0, _styledComponents.keyframes)(_templateObject);

var Spinner = _styledComponents2.default.div(_templateObject2, (0, _theme.bind)('spinnerColor'), spin, (0, _theme.bind)('spinnerDuration'));

Spinner.defaultProps = _theme.themeProps;

var _default = Spinner;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(spin, 'spin', 'src/internal/Spinner.js');

  __REACT_HOT_LOADER__.register(Spinner, 'Spinner', 'src/internal/Spinner.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/Spinner.js');
}();

;