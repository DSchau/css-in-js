import React from 'react';
import glamorous from 'glamorous';
import { darken } from 'polished';

const Alert = glamorous.div({
  backgroundColor: '#EEE',
  color: '#888'
});

const AlertDanger = glamorous(Alert)({
  backgroundColor: 'red',
  color: darken(0.4, 'red')
});
