import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Field from '../Field';
import { mountWithTheme } from '../../__tests__/utils';


describe('Internal#<Field />', () => {
  test('Should be render children', () => {
    const element = <div id="foo">foo bar baz</div>;
    const wrapper = shallow(
      <Field>
        {element}
      </Field>
    );

    expect(wrapper.contains(element)).toBe(true);
  });


  test('Should be styled component', () => {
    const wrapper = shallow(<Field />);
    expect(wrapper).toMatchSnapshot();
  });


  test('Should be changed styled by theme', () => {
    const wrapper = mountWithTheme(<Field />, { fontSize: '5em' });
    expect(wrapper).toHaveStyleRule('font-size', '5em');
  });
});
