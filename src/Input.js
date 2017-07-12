import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import Spinner from './internal/Spinner';
import Field from './internal/Field';
import TextControl from './internal/TextControl';
import defaultProps from './internal/defaultFieldProps';


export const Input = (props) => {
  const {
    input,
    meta,
    shouldDisplayError,
    shouldDisplaySpinner,
    ...rest
  } = props;

  const displayError = shouldDisplayError(props);
  const displaySpinner = shouldDisplaySpinner(props);

  return (
    <Field>
      <TextControl
        {...rest}
        {...input}
        error={displayError}
      />

      {displayError &&
        <ErrorLabel>{meta.error}</ErrorLabel>
      }

      {displaySpinner &&
        <Spinner />
      }
    </Field>
  );
};

Input.propTypes = FieldPropTypes;


export default dripFormField('text', {
  defaultProps,
})(Input);
