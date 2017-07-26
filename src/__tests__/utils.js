import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  mockFieldProps as _mockFieldProps,
  mockGroupProps as _mockGroupProps,
} from 'react-drip-form-test-utils';
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

export const mockFieldProps = (props = {}) => _mockFieldProps({
  shouldDisplayError: () => false,
  shouldDisplaySpinner: () => false,
  ...props,
});

export const mockGroupProps = (props = {}) => _mockGroupProps({
  shouldDisplayError: () => false,
  ...props,
});
