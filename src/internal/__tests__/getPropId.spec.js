import getPropId from '../getPropId';


describe('Internal#getPropId()', () => {
  test('Should be get id in props', () => {
    expect(getPropId({ props: { id: 'foo' } })).toBe('foo');
    expect(getPropId({ props: { id: 'bar', key: 'foo' } })).toBe('bar');
  });


  test('Should be return null if prop id does not exists', () => {
    expect(getPropId({ props: {} })).toBe(null);
    expect(getPropId({ props: { key: 'foo' } })).toBe(null);
  });
});
