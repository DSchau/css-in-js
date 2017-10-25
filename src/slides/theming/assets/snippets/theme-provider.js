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

const Title = glamorous.h1(({ theme }) => ({
  color: theme[theme.current].text,
  margin: 0,
  padding: 0
}));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Hello World</Title>
      </Container>
    </ThemeProvider>
  );
}
