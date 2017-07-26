import React from 'react';
import { shallow } from 'enzyme';
import { mockGroupProps } from './utils';
import { FieldGroup } from '../FieldGroup';


describe('<FieldGroup />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockGroupProps({
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<FieldGroup {...props}>group</FieldGroup>);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([{ ...props, children: 'group' }]);
  });


  test('Should be pass props and render children', () => {
    const props = mockGroupProps();
    const wrapper = shallow(
      <FieldGroup
        {...props}
        id="foo"
        data-foo="bar"
        role="group"
      >
        props
      </FieldGroup>
    );

    expect(wrapper).toMatchSnapshot();
  });


  test('Should be render error text', () => {
    const props = mockGroupProps({
      shouldDisplayError: () => true,
      meta: {
        error: 'error label',
      },
    });

    const wrapper = shallow(
      <FieldGroup {...props}>
        props
      </FieldGroup>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
