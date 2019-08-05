import styled from 'styled-components';

import TextControl from './TextControl';
import { get } from '../theme';

const Control = TextControl.withComponent('select');

const SelectControl = styled(Control)`
  height: ${props => props.multiple
    ? 'auto'
    : get(props, 'controlHeight')};
`;

export default SelectControl;
