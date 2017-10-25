import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.main`
  background-color: #eee;
  padding: ${props => props.padding || 0};
`;

const Button = styled.button`
  background-color: blue;
  color: white;

  ${props =>
    props.inverted &&
    css`
    background-color: white;
    color: blue;
  `};
`;
