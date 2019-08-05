import styled from 'styled-components';

import Field from './Field';
import { bind } from '../theme';

const SelectField = styled(Field)`
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
    content: ${props => props.showSpinner ? 'none' : '""'};
  }
`;

export default SelectField;
