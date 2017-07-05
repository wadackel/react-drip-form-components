import styled from 'styled-components';
import { themeProps } from '../theme';

const SwitchControl = styled.input`
  position: relative;
  top: -1px;
  margin: 0 0.75em 0 0;
  padding: 0;
  line-height: 1;
  vertical-align: middle;
`;

SwitchControl.defaultProps = themeProps;

export default SwitchControl;
