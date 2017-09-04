const Header = ({ userName, userEmail, logOut }) =>
  <StyledHeader>
    <Brand>
      <Logo src={logo} alt="Brand Image" />
    </Brand>
    <UserWelcome>
      <UserName>
        {userName || userEmail}
      </UserName>
      <LogoutLink onClick={logOut}>( log out )</LogoutLink>
    </UserWelcome>
  </StyledHeader>;
