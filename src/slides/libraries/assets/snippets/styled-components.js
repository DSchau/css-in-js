const primaryStyle = css`
  background-color: white;
  color: palevioletred;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.primary && primaryStyle};
`;
