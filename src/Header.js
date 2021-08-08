const Header = ({ setTheme, theme }) => {
  const handleChange = () => {
    setTheme(!theme);
  };
  const body = document.querySelector("body");

  body.style.background = theme ? "white" : "hsl(230, 17%, 14%)";
  let lt_text_1 = theme ? "header__headline--light" : "";
  let lt_text_2 = theme ? "header__snippet--light" : "";
  let lt_text_3 = theme ? "toggle-btn__label--ligt" : "";

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__heading">
          <h1 className={`header__headline ${lt_text_1}`}>
            Social Media Dashboard
          </h1>
          <p className={`header__snippet ${lt_text_2}`}>
            Total Followers: 23,004
          </p>
        </div>
        <hr />
        <div className="toggle-btn-container">
          <label
            className={`toggle-btn__label ${lt_text_3}`}
            htmlFor="toggle-btn"
          >
            Dark Mode
          </label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="toggle-btn"
            id="toggle-btn"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
