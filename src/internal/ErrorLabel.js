import styled from 'styled-components';
import { themeProps } from '../theme';

const ErrorLabel = styled.div`
  display: block;
  margin: 0.2em 0 0;
  color: ${props => props.theme.rdf.error};
  font-size: 0.85rem;
  line-height: 1.4;
`;

ErrorLabel.defaultProps = themeProps;

export default ErrorLabel;
