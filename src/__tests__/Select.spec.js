import React from 'react';
import { shallow } from 'enzyme';
import { mockFieldProps } from './utils';
import { Select } from '../Select';
import SelectField from '../internal/SelectField';
import SelectControl from '../internal/SelectControl';
import ErrorLabel from '../internal/ErrorLabel';
import Spinner from '../internal/Spinner';


describe('<Select />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const shouldDisplaySpinner = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
      shouldDisplaySpinner,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);
    expect(shouldDisplaySpinner.mock.calls.length).toBe(0);

    shallow(<Select {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
    expect(shouldDisplaySpinner.mock.calls.length).toBe(1);
    expect(shouldDisplaySpinner.mock.calls[0]).toEqual([props]);
  });


  test('Should be render control', () => {
    const props = mockFieldProps({}, {}, {
      children: 'select field',
    });

    const wrapper = shallow(<Select {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        children,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <SelectField showSpinner={false}>
        <SelectControl
          {...rest}
          {...input}
          error={false}
        >
          select field
        </SelectControl>
      </SelectField>
    )).toBe(true);
  });


  test('Should be render disabled control', () => {
    const props = mockFieldProps({}, {}, {
      children: 'disabled select',
      disabled: true,
    });

    const wrapper = shallow(<Select {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <SelectField showSpinner={false}>
        <SelectControl
          {...rest}
          {...input}
          disabled
          error={false}
        />
      </SelectField>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps({}, {
      error: 'error!!',
    }, {
      shouldDisplayError: () => true,
    });

    const wrapper = shallow(<Select {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <SelectField showSpinner={false}>
        <SelectControl
          {...rest}
          {...input}
          error
        />
        <ErrorLabel>error!!</ErrorLabel>
      </SelectField>
    )).toBe(true);
  });


  test('Should be render spinner', () => {
    const props = mockFieldProps({}, {}, {
      shouldDisplaySpinner: () => true,
    });

    const wrapper = shallow(<Select {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <SelectField showSpinner>
        <SelectControl
          {...rest}
          {...input}
          error={false}
        />
        <Spinner />
      </SelectField>
    )).toBe(true);
  });
});
