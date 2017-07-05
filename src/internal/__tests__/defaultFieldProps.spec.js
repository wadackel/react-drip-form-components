import shouldDisplayError from '../shouldDisplayError';
import shouldDisplaySpinner from '../shouldDisplaySpinner';
import defaultFieldProps from '../defaultFieldProps';


describe('Internal#defaultFieldProps', () => {
  test('Should be return default field props', () => {
    expect(defaultFieldProps).toEqual({
      shouldDisplayError,
      shouldDisplaySpinner,
    });
  });
});
