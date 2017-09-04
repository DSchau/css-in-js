import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EEE;
  transition: 250ms ease-in-out;
  &:hover {
    background-color: #CCC;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
