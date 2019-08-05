import styled from 'styled-components';

import TextControl from './TextControl';

const Control = TextControl.withComponent('textarea');

const TextareaControl = styled(Control)`
  height: 6em;
  padding: 0.7em;
  resize: vertical;
`;

export default TextareaControl;
