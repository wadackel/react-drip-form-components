'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shouldDisplayError = require('./shouldDisplayError');

var _shouldDisplayError2 = _interopRequireDefault(_shouldDisplayError);

var _shouldDisplaySpinner = require('./shouldDisplaySpinner');

var _shouldDisplaySpinner2 = _interopRequireDefault(_shouldDisplaySpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultFieldProps = {
  shouldDisplayError: _shouldDisplayError2.default,
  shouldDisplaySpinner: _shouldDisplaySpinner2.default
};

var _default = defaultFieldProps;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultFieldProps, 'defaultFieldProps', 'src/internal/defaultFieldProps.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/defaultFieldProps.js');
}();

;