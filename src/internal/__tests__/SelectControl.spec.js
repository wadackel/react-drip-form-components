import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import SelectControl from '../SelectControl';
import { mountWithTheme } from '../../__tests__/utils';


describe('Internal#<SelectControl />', () => {
  test('Should be styled component', () => {
    const wrapper = shallow(<SelectControl />);
    expect(wrapper).toMatchSnapshot();
  });


  test('Should be auto height if specified multiple prop', () => {
    const wrapper = mountWithTheme(<SelectControl />, { controlHeight: '5em' });
    expect(wrapper).toHaveStyleRule('height', '5em');
  });
});
