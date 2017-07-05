import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import Spinner from './internal/Spinner';
import Field from './internal/Field';
import TextControl from './internal/TextControl';
import defaultProps from './internal/defaultFieldProps';
import { get, bind } from './theme';


const SelectField = Field.extend`
  &::after {
    display: block;
    position: absolute;
    right: 1em;
    top: 1.3em;
    z-index: 5;
    width: 0.5em;
    height: 0.5em;
    margin-top: -0.375em;
    border: 1px solid ${bind('selectArrowColor')};
    border-right: 0;
    border-top: 0;
    transform: rotate(-45deg);
    pointer-events: none;
    content: ${props => props.showSpinner
      ? 'none'
      : '""'};
  }
`;

const Control = TextControl.withComponent('select');

const SelectControl = Control.extend`
  height: ${props => props.multiple
    ? 'auto'
    : get(props, 'controlHeight')};
`;


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
