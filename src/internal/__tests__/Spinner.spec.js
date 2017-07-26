import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Spinner from '../Spinner';
import { mountWithTheme } from '../../__tests__/utils';


describe('Internal#<Spinner />', () => {
  test('Should be styled component', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });


  test('Should be changed styled by theme', () => {
    const wrapper = mountWithTheme(<Spinner />, { spinnerColor: 'red' });
    expect(wrapper).toHaveStyleRule('border', '1px solid red');
  });
});
