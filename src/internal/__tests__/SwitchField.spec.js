import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { theme } from '../../theme';
import SwitchField from '../SwitchField';
import { mountWithTheme } from '../../__tests__/utils';


describe('Internal#<SwitchField />', () => {
  test('Should be render children', () => {
    const element = <div id="foo">foo bar baz</div>;
    const wrapper = shallow(
      <SwitchField>
        {element}
      </SwitchField>
    );

    expect(wrapper.contains(element)).toBe(true);
  });


  test('Should be styled component', () => {
    const wrapper = shallow(<SwitchField />);
    expect(wrapper).toHaveStyleRule('color', theme.color);

    wrapper.setProps({ disabled: true });
    expect(wrapper).toHaveStyleRule('color', theme.disabled);
  });


  test('Should be changed styled by theme', () => {
    const testTheme = {
      color: 'hotpink',
      disabled: 'green',
    };

    let wrapper;

    wrapper = mountWithTheme(<SwitchField />, testTheme);
    expect(wrapper).toHaveStyleRule('color', 'hotpink');

    wrapper = mountWithTheme(<SwitchField disabled />, testTheme);
    expect(wrapper).toHaveStyleRule('color', 'green');
  });
});
