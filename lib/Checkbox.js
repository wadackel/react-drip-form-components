'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDripForm = require('react-drip-form');

var _ErrorLabel = require('./internal/ErrorLabel');

var _ErrorLabel2 = _interopRequireDefault(_ErrorLabel);

var _Spinner = require('./internal/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _SwitchField = require('./internal/SwitchField');

var _SwitchField2 = _interopRequireDefault(_SwitchField);

var _SwitchControl = require('./internal/SwitchControl');

var _SwitchControl2 = _interopRequireDefault(_SwitchControl);

var _Label = require('./internal/Label');

var _Label2 = _interopRequireDefault(_Label);

var _getPropId = require('./internal/getPropId');

var _getPropId2 = _interopRequireDefault(_getPropId);

var _defaultFieldProps = require('./internal/defaultFieldProps');

var _defaultFieldProps2 = _interopRequireDefault(_defaultFieldProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Checkbox = function Checkbox(props) {
  var input = props.input,
      meta = props.meta,
      shouldDisplayError = props.shouldDisplayError,
      shouldDisplaySpinner = props.shouldDisplaySpinner,
      children = props.children,
      rest = _objectWithoutProperties(props, ['input', 'meta', 'shouldDisplayError', 'shouldDisplaySpinner', 'children']);

  var id = (0, _getPropId2.default)(props);
  var displayError = shouldDisplayError(props);
  var displaySpinner = shouldDisplaySpinner(props);

  return _react2.default.createElement(
    _SwitchField2.default,
    { disabled: rest.disabled },
    _react2.default.createElement(
      _Label2.default,
      { htmlFor: id },
      _react2.default.createElement(_SwitchControl2.default, _extends({}, rest, input, {
        type: 'checkbox'
      })),
      _react2.default.createElement(
        'span',
        null,
        children
      ),
      displaySpinner && _react2.default.createElement(_Spinner2.default, null)
    ),
    displayError && _react2.default.createElement(
      _ErrorLabel2.default,
      null,
      meta.error
    )
  );
};

exports.Checkbox = Checkbox;
Checkbox.propTypes = _reactDripForm.FieldPropTypes;

var _default = (0, _reactDripForm.dripFormField)('checkbox', {
  defaultProps: _defaultFieldProps2.default
})(Checkbox);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', 'src/Checkbox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Checkbox.js');
}();

;