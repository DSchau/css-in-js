import React from 'react';
import glamorous from 'glamorous';

// bootstrap

const Alert = glamorous.div(`alert`, props => `alert-${props.type}`);

export default () =>
  <Alert type="success">
    <strong>Success!</strong> Tada! 🎉
  </Alert>;
