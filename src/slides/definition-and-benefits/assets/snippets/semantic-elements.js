const Header = ({ userName, userEmail, logOut }) =>
  <StyledHeader>
    <Brand>
      <Logo src={logo} alt="Company X Logo" />
    </Brand>
    <UserContainer>
      <UserName>
        {userName || userEmail}
      </UserName>
    </UserContainer>
  </StyledHeader>;
