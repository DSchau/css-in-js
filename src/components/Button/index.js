import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.color || '#7795f8'};
  padding: 1rem;
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '2.5rem'};
  border: none;
  border-radius: 8px;
  box-shadow: 0 8px 14px rgba(0, 0, 0, .35), 0 1px 3px rgba(0, 0, 0, .08);
  text-transform: ${props => props.textTransform || 'uppercase'};
  transition: 175ms ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, .50), 0 1px 3px rgba(0, 0, 0, .08);
    background-color: ${props =>
      props.backgroundHoverColor || props.backgroundColor || 'white'};
    color: ${props => props.hoverColor || props.color || '#7795f8'};
  }
  &:active,
  &:focus {
    transform: translateY(0);
    box-shadow: 0 8px 14px rgba(0, 0, 0, .35), 0 1px 3px rgba(0, 0, 0, .08);
    outline: none;
  }
`;

export function Button(props) {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
}
