const Header = ({ userName, userEmail, logOut }) =>
  <header className="header">
    <div className="header--brand">
      <img className="logo--image" alt="Company X Logo" />
    </div>
    <div className="header--user">
      <span className="header--user--name">
        {userName || userEmail}
      </span>
    </div>
  </header>;
