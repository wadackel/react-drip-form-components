'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n  min-height: 20px;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: normal;\n  line-height: 1.4;\n  position: relative;\n  cursor: pointer;\n'], ['\n  display: inline-block;\n  position: relative;\n  min-height: 20px;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: normal;\n  line-height: 1.4;\n  position: relative;\n  cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.label(_templateObject);

Label.defaultProps = _theme.themeProps;

var _default = Label;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Label, 'Label', 'src/internal/Label.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/Label.js');
}();

;