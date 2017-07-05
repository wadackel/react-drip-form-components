import styled from 'styled-components';
import { themeProps, get, bind } from '../theme';

const TextControl = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${bind('controlHeight')};
  appearance: none;
  margin: 0;
  padding: 0.3em 0.7em;
  background: ${bind('background')};
  border-style: solid;
  border-width: ${bind('borderWidth')};
  border-color: ${props => props.error
    ? get(props, 'error')
    : get(props, 'borderColor')};
  border-radius: ${bind('borderRadius')};
  box-shadow: ${bind('boxShadow')};
  color: ${bind('color')};
  vertical-align: top;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.4;
  transition-property: ${bind('transitionProperty')};
  transition-duration: ${bind('transitionDuration')};
  transition-timing-function: ${bind('transitionTimingFunction')};

  &:not(:disabled):hover {
    background: ${props => props.error
      ? get(props, 'backgroundError')
      : get(props, 'backgroundEnter')};
    border-color: ${props => props.error
      ? get(props, 'borderColorError')
      : get(props, 'borderColorEnter')};
    };
  }

  &:not(:disabled):focus {
    outline: none;
    background: ${props => props.error
      ? get(props, 'backgroundError')
      : get(props, 'backgroundFocus')};
    border-color: ${props => props.error
      ? get(props, 'borderColorError')
      : get(props, 'borderColorFocus')};
    box-shadow: ${bind('boxShadowEnter')};
  }

  &:disabled {
    color: ${bind('disabled')};
    background: ${bind('backgroundDisabled')};
    border-color: ${bind('borderColorDisabled')};
    cursor: not-allowed;
  }
`;

TextControl.defaultProps = themeProps;

export default TextControl;
