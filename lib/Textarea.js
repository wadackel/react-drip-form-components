'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDripForm = require('react-drip-form');

var _ErrorLabel = require('./internal/ErrorLabel');

var _ErrorLabel2 = _interopRequireDefault(_ErrorLabel);

var _Spinner = require('./internal/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _TextareaControl = require('./internal/TextareaControl');

var _TextareaControl2 = _interopRequireDefault(_TextareaControl);

var _Field = require('./internal/Field');

var _Field2 = _interopRequireDefault(_Field);

var _defaultFieldProps = require('./internal/defaultFieldProps');

var _defaultFieldProps2 = _interopRequireDefault(_defaultFieldProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Textarea = function Textarea(props) {
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
    _react2.default.createElement(_TextareaControl2.default, _extends({}, rest, input, {
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

exports.Textarea = Textarea;
Textarea.propTypes = _reactDripForm.FieldPropTypes;

var _default = (0, _reactDripForm.dripFormField)('textarea', {
  defaultProps: _defaultFieldProps2.default
})(Textarea);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Textarea, 'Textarea', 'src/Textarea.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Textarea.js');
}();

;