'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDripForm = require('react-drip-form');

var _ErrorLabel = require('./internal/ErrorLabel');

var _ErrorLabel2 = _interopRequireDefault(_ErrorLabel);

var _Field = require('./internal/Field');

var _Field2 = _interopRequireDefault(_Field);

var _defaultGroupProps = require('./internal/defaultGroupProps');

var _defaultGroupProps2 = _interopRequireDefault(_defaultGroupProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FieldGroup = function FieldGroup(props) {
  var children = props.children,
      shouldDisplayError = props.shouldDisplayError,
      meta = props.meta,
      rest = _objectWithoutProperties(props, ['children', 'shouldDisplayError', 'meta']);

  var displayError = shouldDisplayError(props);

  return _react2.default.createElement(
    _Field2.default,
    rest,
    children,
    displayError && _react2.default.createElement(
      _ErrorLabel2.default,
      null,
      meta.error
    )
  );
};

exports.FieldGroup = FieldGroup;
FieldGroup.propTypes = _extends({}, _reactDripForm.GroupPropTypes, {
  children: _propTypes2.default.node.isRequired,
  shouldDisplayError: _propTypes2.default.func.isRequired
});

var _default = (0, _reactDripForm.dripFormGroup)({
  defaultProps: _defaultGroupProps2.default
})(FieldGroup);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FieldGroup, 'FieldGroup', 'src/FieldGroup.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/FieldGroup.js');
}();

;