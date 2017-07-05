import {
  colors,
  theme,
  extendTheme,
  themeProps,
  get,
  bind,
} from '../theme';


const mockTheme = () => ({
  theme: {
    rdf: { ...theme },
  },
});


describe('Theme', () => {
  test('Should be extend theme', () => {
    expect(extendTheme()).toEqual(theme);

    expect(extendTheme({
      fontSize: '2rem',
    })).toEqual({
      ...theme,
      fontSize: '2rem',
    });

    expect(extendTheme({
      background: 'white',
    })).toEqual({
      ...theme,
      background: 'white',
    });
  });


  test('Should be get theme props', () => {
    expect(themeProps.theme.rdf).toEqual(theme);
  });


  test('Should be get theme style', () => {
    expect(get(mockTheme(), 'fontSize')).toBe('1rem');
    expect(get(mockTheme(), 'background')).toBe(colors.white);
  });


  test('Should be bind theme style', () => {
    expect(bind('borderColorError')(mockTheme())).toBe(colors.error);
    expect(bind('spinnerColor')(mockTheme())).toBe(colors.primary);
  });
});
