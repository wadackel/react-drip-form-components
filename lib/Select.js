'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDripForm = require('react-drip-form');

var _ErrorLabel = require('./internal/ErrorLabel');

var _ErrorLabel2 = _interopRequireDefault(_ErrorLabel);

var _Spinner = require('./internal/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _SelectField = require('./internal/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _SelectControl = require('./internal/SelectControl');

var _SelectControl2 = _interopRequireDefault(_SelectControl);

var _defaultFieldProps = require('./internal/defaultFieldProps');

var _defaultFieldProps2 = _interopRequireDefault(_defaultFieldProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Select = function Select(props) {
  var input = props.input,
      meta = props.meta,
      shouldDisplayError = props.shouldDisplayError,
      shouldDisplaySpinner = props.shouldDisplaySpinner,
      children = props.children,
      rest = _objectWithoutProperties(props, ['input', 'meta', 'shouldDisplayError', 'shouldDisplaySpinner', 'children']);

  var displayError = shouldDisplayError(props);
  var displaySpinner = shouldDisplaySpinner(props);

  return _react2.default.createElement(
    _SelectField2.default,
    { showSpinner: displaySpinner },
    _react2.default.createElement(
      _SelectControl2.default,
      _extends({}, rest, input, {
        error: displayError
      }),
      children
    ),
    displayError && _react2.default.createElement(
      _ErrorLabel2.default,
      null,
      meta.error
    ),
    displaySpinner && _react2.default.createElement(_Spinner2.default, null)
  );
};

exports.Select = Select;
Select.propTypes = _reactDripForm.FieldPropTypes;

var _default = (0, _reactDripForm.dripFormField)('select', {
  defaultProps: _defaultFieldProps2.default
})(Select);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Select, 'Select', 'src/Select.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Select.js');
}();

;