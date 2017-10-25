import { complement, lighen, invert } from 'polished';

const primary = {
  base: '#EEE',
  accent: 'blue',
  text: '#666'
};

const secondary = {
  base: invert(primary.base),
  accent: complement(primary.accent),
  text: lighten(0.5, primary.base)
};

// use these themes!
