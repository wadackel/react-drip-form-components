import getPropId from '../getPropId';


describe('Internal#getPropId()', () => {
  test('Should be get id in props', () => {
    expect(getPropId({ id: 'foo' })).toBe('foo');
    expect(getPropId({ id: 'bar', key: 'foo' })).toBe('bar');
  });


  test('Should be return null if prop id does not exists', () => {
    expect(getPropId({})).toBe(null);
    expect(getPropId({ key: 'Foo' })).toBe(null);
  });
});
