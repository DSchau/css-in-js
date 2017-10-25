import { complement, darken, lighten, mix } from 'polished';

const THEME = {
  primary: '#FF6138',
  secondary: '#002635'
};

export const PRIMARY = lighten(0.05, THEME.primary);
// export const SECONDARY = '#002635';
export const SECONDARY = mix(
  0.05,
  THEME.primary,
  darken(0.55, complement(THEME.primary))
);
export const CODE_BACKGROUND = lighten(0.05, 'black');
