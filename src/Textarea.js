import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import Spinner from './internal/Spinner';
import TextareaControl from './internal/TextareaControl';
import Field from './internal/Field';
import defaultProps from './internal/defaultFieldProps';


export const Textarea = (props) => {
  const {
    input,
    props: {
      shouldDisplayError,
      shouldDisplaySpinner,
      ...rest
    },
    meta,
  } = props;

  const displayError = shouldDisplayError(props);
  const displaySpinner = shouldDisplaySpinner(props);

  return (
    <Field>
      <TextareaControl
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

Textarea.propTypes = FieldPropTypes;


export default dripFormField('textarea', {
  defaultProps,
})(Textarea);
