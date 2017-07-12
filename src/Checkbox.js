import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import Spinner from './internal/Spinner';
import SwitchField from './internal/SwitchField';
import SwitchControl from './internal/SwitchControl';
import Label from './internal/Label';
import getPropId from './internal/getPropId';
import defaultProps from './internal/defaultFieldProps';


export const Checkbox = (props) => {
  const {
    input,
    meta,
    shouldDisplayError,
    shouldDisplaySpinner,
    children,
    ...rest
  } = props;

  const id = getPropId(props);
  const displayError = shouldDisplayError(props);
  const displaySpinner = shouldDisplaySpinner(props);

  return (
    <SwitchField disabled={rest.disabled}>
      <Label htmlFor={id}>
        <SwitchControl
          {...rest}
          {...input}
          type="checkbox"
        />

        <span>{children}</span>

        {displaySpinner &&
          <Spinner />
        }
      </Label>

      {displayError &&
        <ErrorLabel>{meta.error}</ErrorLabel>
      }
    </SwitchField>
  );
};

Checkbox.propTypes = FieldPropTypes;


export default dripFormField('checkbox', {
  defaultProps,
})(Checkbox);
