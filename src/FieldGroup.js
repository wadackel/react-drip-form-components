import React from 'react';
import PropTypes from 'prop-types';
import { dripFormGroup, GroupPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import Field from './internal/Field';
import defaultProps from './internal/defaultGroupProps';


export const FieldGroup = (props) => {
  const {
    children,
    shouldDisplayError,
    meta,
    ...rest
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <Field {...rest}>
      {children}

      {displayError &&
        <ErrorLabel>{meta.error}</ErrorLabel>
      }
    </Field>
  );
};

FieldGroup.propTypes = {
  ...GroupPropTypes,
  children: PropTypes.node.isRequired,
  shouldDisplayError: PropTypes.func.isRequired,
};


export default dripFormGroup({
  defaultProps,
})(FieldGroup);
