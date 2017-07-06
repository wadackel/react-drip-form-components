import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { theme } from '../../theme';
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
    expect(wrapper).toHaveStyleRule('height', theme.controlHeight);
    expect(wrapper).toHaveStyleRule('background', theme.background);
    expect(wrapper).toHaveStyleRule('border-width', theme.borderWidth);
    expect(wrapper).toHaveStyleRule('border-color', theme.borderColor);
    expect(wrapper).toHaveStyleRule('border-radius', theme.borderRadius);
    expect(wrapper).toHaveStyleRule('box-shadow', theme.boxShadow);
    expect(wrapper).toHaveStyleRule('color', theme.color);
    expect(wrapper).toHaveStyleRule('transition-property', theme.transitionProperty);
    expect(wrapper).toHaveStyleRule('transition-duration', theme.transitionDuration);
    expect(wrapper).toHaveStyleRule('transition-timing-function', theme.transitionTimingFunction);

    wrapper.setProps({ error: 'has error' });
    expect(wrapper).toHaveStyleRule('border-color', theme.borderColorError);
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
    expect(wrapper).toHaveStyleRule('height', testTheme.controlHeight);
    expect(wrapper).toHaveStyleRule('background', testTheme.background);
    expect(wrapper).toHaveStyleRule('border-width', testTheme.borderWidth);
    expect(wrapper).toHaveStyleRule('border-color', testTheme.borderColor);
    expect(wrapper).toHaveStyleRule('border-radius', testTheme.borderRadius);
    expect(wrapper).toHaveStyleRule('box-shadow', testTheme.boxShadow);
    expect(wrapper).toHaveStyleRule('color', testTheme.color);
    expect(wrapper).toHaveStyleRule('transition-property', testTheme.transitionProperty);
    expect(wrapper).toHaveStyleRule('transition-duration', testTheme.transitionDuration);
    expect(wrapper).toHaveStyleRule('transition-timing-function', testTheme.transitionTimingFunction);

    wrapper = mountWithTheme(<TextControl error="has error" />, testTheme);
    expect(wrapper).toHaveStyleRule('border-color', testTheme.borderColorError);
  });
});
