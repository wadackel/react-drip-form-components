"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shouldDisplayError = function shouldDisplayError(_ref) {
  var meta = _ref.meta;
  return !!(meta.error && meta.dirty && meta.touched);
};

var _default = shouldDisplayError;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(shouldDisplayError, "shouldDisplayError", "src/internal/shouldDisplayError.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/internal/shouldDisplayError.js");
}();

;