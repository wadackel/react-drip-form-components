import styled from 'styled-components';
import { themeProps } from '../theme';

const Label = styled.label`
  display: inline-block;
  position: relative;
  min-height: 20px;
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: normal;
  line-height: 1.4;
  position: relative;
  cursor: pointer;
`;

Label.defaultProps = themeProps;

export default Label;
