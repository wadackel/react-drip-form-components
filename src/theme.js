export const colors = {
  white: 'rgb(255, 255, 255)',
  grayDark: 'rgb(54, 54, 54)',
  gray: 'rgb(204, 204, 204)',
  grayLight: 'rgb(187, 187, 187)',
  grayLightest: 'rgb(219, 219, 219)',
  primary: 'rgb(0, 188, 212)',
  error: 'rgb(245, 0, 87)',
  disabled: 'rgb(245, 245, 245)',
  shadow: 'rgba(0, 0, 0, 0.04)',
};

export const theme = {
  // typography
  fontSize: '1rem',
  color: colors.grayDark,
  error: colors.error,
  disabled: colors.gray,

  // background
  background: colors.white,
  backgroundEnter: colors.white,
  backgroundFocus: colors.white,
  backgroundDisabled: colors.disabled,
  backgroundError: colors.white,

  // border
  borderWidth: '1px',
  borderRadius: '3px',
  borderColor: colors.grayLightest,
  borderColorEnter: colors.gray,
  borderColorFocus: colors.primary,
  borderColorDisabled: colors.disabled,
  borderColorError: colors.error,

  // box-shadow
  boxShadow: '0 0 0 transparent',
  boxShadowEnter: `0 2px 2px ${colors.shadow} inset`,
  boxShadowDisabled: `0 2px 2px ${colors.shadow} inset`,

  // transition
  transitionProperty: 'color, box-shadow, border',
  transitionDuration: '110ms',
  transitionTimingFunction: 'cubic-bezier(.25, .46, .45, .94)', // ease-out-quad

  // control
  controlHeight: '2.7em',

  // select
  selectArrowColor: colors.primary,

  // spinner
  spinnerColor: colors.primary,
  spinnerDuration: '500ms',
};

export const extendTheme = (extendsTheme = {}) => ({
  ...theme,
  ...extendsTheme,
});

export const themeProps = {
  theme: {
    rdf: theme,
  },
};

export const get = (props, key) => props.theme.rdf[key];

export const bind = key => props => get(props, key);
