import { darken, lighten } from 'polished';
import glamorous from 'glamorous';

const theme = {
  base: '#EEE',
  text: '#666',
  dark: false
};

const Container = glamorous.main(
  {
    fontFamily: 'sans-serif'
  },
  ({ theme }) => ({
    backgroundColor: theme.dark ? darken(0.4, theme.base) : theme.base,
    color: theme.dark ? lighten(0.4, theme.base) : theme.base
  })
);
