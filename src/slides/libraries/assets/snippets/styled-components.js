const primaryStyle = css`
  background-color: #7795f8;
  color: white;
`;

const Button = styled.button`
  background-color: white;
  color: #7795f8;
  border: none;

  ${props => props.primary && primaryStyle};
`;
