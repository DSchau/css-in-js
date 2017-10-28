import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
`;

export default function Message() {
  return <Title>CSS in JS is... great!</Title>;
}
