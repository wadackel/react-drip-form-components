'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPropId = function getPropId(props) {
  return Object.prototype.hasOwnProperty.call(props, 'id') ? props.id : null;
};

var _default = getPropId;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getPropId, 'getPropId', 'src/internal/getPropId.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/internal/getPropId.js');
}();

;