import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import Spinner from './internal/Spinner';
import SelectField from './internal/SelectField';
import SelectControl from './internal/SelectControl';
import defaultProps from './internal/defaultFieldProps';


export const Select = (props) => {
  const {
    input,
    props: {
      shouldDisplayError,
      shouldDisplaySpinner,
      children,
      ...rest
    },
    meta,
  } = props;

  const displayError = shouldDisplayError(props);
  const displaySpinner = shouldDisplaySpinner(props);

  return (
    <SelectField showSpinner={displaySpinner}>
      <SelectControl
        {...rest}
        {...input}
        error={displayError}
      >
        {children}
      </SelectControl>

      {displayError &&
        <ErrorLabel>{meta.error}</ErrorLabel>
      }

      {displaySpinner &&
        <Spinner />
      }
    </SelectField>
  );
};

Select.propTypes = FieldPropTypes;


export default dripFormField('select', {
  defaultProps,
})(Select);
