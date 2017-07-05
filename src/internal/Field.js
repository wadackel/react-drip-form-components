import styled from 'styled-components';
import { themeProps, bind } from '../theme';

const Field = styled.div`
  display: block;
  position: relative;
  margin: 0;
  font-size: ${bind('fontSize')};
`;

Field.defaultProps = themeProps;

export default Field;
