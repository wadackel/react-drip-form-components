"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shouldDisplaySpinner = function shouldDisplaySpinner(_ref) {
  var meta = _ref.meta;
  return meta.validating;
};

var _default = shouldDisplaySpinner;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(shouldDisplaySpinner, "shouldDisplaySpinner", "src/internal/shouldDisplaySpinner.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/internal/shouldDisplaySpinner.js");
}();

;