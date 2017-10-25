const Button = glamorous.button(
  {
    backgroundColor: 'white',
    color: '#7795f8',
    border: 'none'
  },
  ({ primary }) => ({
    ...(primary
      ? {
          backgroundColor: '#7795f8',
          color: 'white'
        }
      : {})
  })
);
