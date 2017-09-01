import glamorous, { ThemeProvider } from 'glamorous';

const theme = {
  light: {
    background: '#EEE',
    text: '#666'
  },
  dark: {
    background: '#999',
    text: '#EEE'
  },
  current: 'light'
};

const Container = glamorous.main(
  {
    display: 'flex'
  },
  ({ theme }) => ({
    backgroundColor: theme[theme.current].background
  })
);
