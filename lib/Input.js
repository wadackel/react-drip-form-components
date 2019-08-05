'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDripForm = require('react-drip-form');

var _ErrorLabel = require('./internal/ErrorLabel');

var _ErrorLabel2 = _interopRequireDefault(_ErrorLabel);

var _Spinner = require('./internal/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Field = require('./internal/Field');

var _Field2 = _interopRequireDefault(_Field);

var _TextControl = require('./internal/TextControl');

var _TextControl2 = _interopRequireDefault(_TextControl);

var _defaultFieldProps = require('./internal/defaultFieldProps');

var _defaultFieldProps2 = _interopRequireDefault(_defaultFieldProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(props) {
  var input = props.input,
      meta = props.meta,
      shouldDisplayError = props.shouldDisplayError,
      shouldDisplaySpinner = props.shouldDisplaySpinner,
      rest = _objectWithoutProperties(props, ['input', 'meta', 'shouldDisplayError', 'shouldDisplaySpinner']);

  var displayError = shouldDisplayError(props);
  var displaySpinner = shouldDisplaySpinner(props);

  return _react2.default.createElement(
    _Field2.default,
    null,
    _react2.default.createElement(_TextControl2.default, _extends({}, rest, input, {
      error: displayError
    })),
    displayError && _react2.default.createElement(
      _ErrorLabel2.default,
      null,
      meta.error
    ),
    displaySpinner && _react2.default.createElement(_Spinner2.default, null)
  );
};

exports.Input = Input;
Input.propTypes = _reactDripForm.FieldPropTypes;

var _default = (0, _reactDripForm.dripFormField)('text', {
  defaultProps: _defaultFieldProps2.default
})(Input);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Input, 'Input', 'src/Input.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Input.js');
}();

;