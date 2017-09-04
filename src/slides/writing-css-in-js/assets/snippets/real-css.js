import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  transition: 250ms ease-in-out;
  &:hover {
    background-color: #ccc;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
