const Header = ({ userName, userEmail, logOut }) =>
  <header className="header">
    <div className="header--brand">
      <div className="logo">
        <img
          width={45}
          height={45}
          src="logo"
          className="logo-image"
          alt="Brand Name"
        />
      </div>
      <h1>Brand name</h1>
    </div>
    <div className="header--user">
      <span className="header--user--name">
        {userName || userEmail}
      </span>
      <span className="header--user--logout" onClick={logOut}>
        ( log out )
      </span>
    </div>
  </header>;
