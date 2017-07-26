import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import TextControl from '../TextControl';
import { mountWithTheme } from '../../__tests__/utils';


describe('Internal#<TextControl />', () => {
  test('Should be render children', () => {
    const element = <div id="foo">foo bar baz</div>;
    const wrapper = shallow(
      <TextControl>
        {element}
      </TextControl>
    );

    expect(wrapper.contains(element)).toBe(true);
  });


  test('Should be styled component', () => {
    const wrapper = shallow(<TextControl />);
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ error: 'has error' });
    expect(wrapper).toMatchSnapshot();
  });


  test('Should be changed styled component', () => {
    const testTheme = {
      controlHeight: '10rem',
      background: 'black',
      borderWidth: '1em',
      borderColor: 'pink',
      borderColorError: 'orangered',
      borderRadius: '20px',
      boxShadow: '10px 10px 100px black',
      color: 'ivory',
      transitionProperty: 'font-size, transform',
      transitionDuration: '100s',
      transitionTimingFunction: 'linear',
    };

    let wrapper;

    wrapper = mountWithTheme(<TextControl />, testTheme);
    expect(wrapper).toMatchSnapshot();

    wrapper = mountWithTheme(<TextControl error="has error" />, testTheme);
    expect(wrapper).toMatchSnapshot();
  });
});
