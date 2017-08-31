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
