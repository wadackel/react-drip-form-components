import Field from './Field';
import { get } from '../theme';

const SwitchField = Field.extend`
  margin: 0.4em 0;
  color: ${props => props.disabled
    ? get(props, 'disabled')
    : get(props, 'color')};
`;

export default SwitchField;
