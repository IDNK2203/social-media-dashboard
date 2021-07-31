const Header = () => {
  return (
    <header className="header">
      <div className="header__heading">
        <h1 className="header__headline">Social Media Dashboard</h1>
        <p className="header__snippet">Total Followers: 23,004</p>
      </div>
      <hr />
      <div className="toggle-btn-container">
        <label htmlFor="toogle-btn">Dark Mode</label>
        <input type="checkbox" name="toogle-btn" id="toogle-btn" />
      </div>
    </header>
  );
};

export default Header;
