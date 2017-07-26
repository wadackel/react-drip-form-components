import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
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
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });


  test('Should be changed styled by theme', () => {
    const testTheme = {
      color: 'hotpink',
      disabled: 'green',
    };

    let wrapper;

    wrapper = mountWithTheme(<SwitchField />, testTheme);
    expect(wrapper).toMatchSnapshot();

    wrapper = mountWithTheme(<SwitchField disabled />, testTheme);
    expect(wrapper).toMatchSnapshot();
  });
});
