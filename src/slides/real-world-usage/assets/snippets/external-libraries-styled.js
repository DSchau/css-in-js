import React from 'react';
import styled from 'styled-components';

const Alert = styled.div.attrs({
  className: props => `alert alert-${props.type || 'info'}`
})`
  font-family: Roboto, sans-serif;
`;
