import styled, { keyframes } from 'styled-components';
import { themeProps, bind } from '../theme';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: block;
  position: absolute;
  top: 0.8em;
  right: 0.8em;
  margin: 0;
  width: 1em;
  height: 1em;
  border: 1px solid ${bind('spinnerColor')};
  border-top-width: 0;
  border-radius: 50%;
  animation: ${spin} ${bind('spinnerDuration')} infinite linear;
  transform-origin: 50% 49%;
`;

Spinner.defaultProps = themeProps;

export default Spinner;
