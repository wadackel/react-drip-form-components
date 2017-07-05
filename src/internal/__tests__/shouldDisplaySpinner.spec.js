import shouldDisplaySpinner from '../shouldDisplaySpinner';


describe('Internal#shouldDisplaySpinner()', () => {
  test('Should be return true', () => {
    expect(shouldDisplaySpinner({
      meta: { validating: true },
    })).toBe(true);
  });


  test('Should be return false', () => {
    expect(shouldDisplaySpinner({
      meta: { validating: false },
    })).toBe(false);
  });
});
