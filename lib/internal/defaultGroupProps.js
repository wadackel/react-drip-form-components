'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shouldDisplayError = require('./shouldDisplayError');

var _shouldDisplayError2 = _interopRequireDefault(_shouldDisplayError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultGroupProps = {
  shouldDisplayError: _shouldDisplayError2.default
};

var _default = defaultGroupProps;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultGroupProps, 'defaultGroupProps', 'src/internal/defaultGroupProps.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/defaultGroupProps.js');
}();

;