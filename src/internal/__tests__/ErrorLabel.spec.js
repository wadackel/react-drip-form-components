import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { theme } from '../../theme';
import ErrorLabel from '../ErrorLabel';
import { mountWithTheme } from '../../__tests__/utils';


describe('Internal#<ErrorLabel />', () => {
  test('Should be render children', () => {
    const element = <div id="foo">foo bar baz</div>;
    const wrapper = shallow(
      <ErrorLabel>
        {element}
      </ErrorLabel>
    );

    expect(wrapper.contains(element)).toBe(true);
  });


  test('Should be styled component', () => {
    const wrapper = shallow(<ErrorLabel />);
    expect(wrapper).toHaveStyleRule('font-size', '0.85rem');
    expect(wrapper).toHaveStyleRule('color', theme.error.replace(/\s/g, ''));
  });


  test('Should be changed styled by theme', () => {
    const wrapper = mountWithTheme(<ErrorLabel />, { error: 'hotpink' });
    expect(wrapper).toHaveStyleRule('color', 'hotpink');
  });
});
