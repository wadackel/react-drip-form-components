import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { extendTheme } from '../theme';


export const shallowWithTheme = (element, extend) => (
  shallow(
    <ThemeProvider theme={{ rdf: extendTheme(extend) }}>
      {element}
    </ThemeProvider>
  )
);

export const mountWithTheme = (element, extend) => (
  mount(
    <ThemeProvider theme={{ rdf: extendTheme(extend) }}>
      {element}
    </ThemeProvider>
  )
);

export const mockFieldProps = (input = {}, meta = {}, props = {}) => ({
  input: {
    value: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    ...input,
  },
  meta: {
    error: undefined,
    errors: undefined,
    valid: false,
    invalid: false,
    touched: false,
    untouched: false,
    dirty: false,
    pristine: false,
    validating: false,
    ...meta,
  },
  props: {
    shouldDisplayError: () => false,
    shouldDisplaySpinner: () => false,
    ...props,
  },
});

export const mockGroupProps = (meta = {}, props = {}) => ({
  shouldDisplayError: () => false,
  ...props,
  meta: {
    name: '',
    label: null,
    error: undefined,
    errors: undefined,
    valid: false,
    invalid: false,
    touched: false,
    untouched: false,
    dirty: false,
    pristine: false,
    validating: false,
    ...meta,
  },
});
