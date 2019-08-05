import styled from 'styled-components';

import Field from './Field';
import { get } from '../theme';

const SwitchField = styled(Field)`
  margin: 0.4em 0;
  color: ${props => props.disabled
    ? get(props, 'disabled')
    : get(props, 'color')};
`;

export default SwitchField;
