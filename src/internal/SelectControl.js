import TextControl from './TextControl';
import { get } from '../theme';

const Control = TextControl.withComponent('select');

const SelectControl = Control.extend`
  height: ${props => props.multiple
    ? 'auto'
    : get(props, 'controlHeight')};
`;

export default SelectControl;
