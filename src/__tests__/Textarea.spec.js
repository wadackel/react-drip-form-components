import React from 'react';
import { shallow } from 'enzyme';
import { mockFieldProps } from './utils';
import { Textarea } from '../Textarea';
import Field from '../internal/Field';
import TextareaControl from '../internal/TextareaControl';
import ErrorLabel from '../internal/ErrorLabel';
import Spinner from '../internal/Spinner';


describe('<Textarea />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const shouldDisplaySpinner = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
      shouldDisplaySpinner,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);
    expect(shouldDisplaySpinner.mock.calls.length).toBe(0);

    shallow(<Textarea {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
    expect(shouldDisplaySpinner.mock.calls.length).toBe(1);
    expect(shouldDisplaySpinner.mock.calls[0]).toEqual([props]);
  });


  test('Should be render control', () => {
    const props = mockFieldProps();
    const wrapper = shallow(<Textarea {...props} />);
    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <Field>
        <TextareaControl
          {...rest}
          {...input}
          error={false}
        />
      </Field>
    )).toBe(true);
  });


  test('Should be render disabled control', () => {
    const props = mockFieldProps({}, {}, { disabled: true });
    const wrapper = shallow(<Textarea {...props} />);
    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <Field>
        <TextareaControl
          {...rest}
          {...input}
          disabled
          error={false}
        />
      </Field>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps(
      {},
      { error: 'foo' },
      {
        shouldDisplayError: () => true,
      }
    );

    const wrapper = shallow(<Textarea {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <Field>
        <TextareaControl
          {...rest}
          {...input}
          error
        />

        <ErrorLabel>foo</ErrorLabel>
      </Field>
    )).toBe(true);
  });


  test('Should be render spinner', () => {
    const props = mockFieldProps(
      {},
      {},
      {
        shouldDisplaySpinner: () => true,
      }
    );

    const wrapper = shallow(<Textarea {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <Field>
        <TextareaControl
          {...rest}
          {...input}
          error={false}
        />

        <Spinner />
      </Field>
    )).toBe(true);
  });
});
