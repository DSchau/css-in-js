import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.main(
  {
    backgroundColor: '#EEE'
  },
  props => ({
    padding: props.padding || 0
  })
);

const Button = glamorous.button(
  {
    backgroundColor: 'blue',
    color: 'white'
  },
  ({ inverted }) =>
    inverted
      ? {
          backgroundColor: 'white',
          color: 'blue'
        }
      : {}
);
