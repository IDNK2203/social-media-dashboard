import iconFacebook from "./images/iconFacebook.svg";
import downIcon from "./images/icon-down.svg";

const PrimaryMetricCard = () => {
  return (
    <section className="pm-section">
      <ul className="pm-section__cards">
        <li className="pm-section__card">
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className="pm-section__user">@nathanf</p>
          </div>
          <p className="pm-section__metric-value">1987</p>
          <p className="pm-section__metric-type">Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
        <li className="pm-section__card">
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className="pm-section__user">@nathanf</p>
          </div>
          <p className="pm-section__metric-value">1987</p>
          <p className="pm-section__metric-type">Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
        <li className="pm-section__card">
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className="pm-section__user">@nathanf</p>
          </div>
          <p className="pm-section__metric-value">1987</p>
          <p className="pm-section__metric-type">Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
        <li className="pm-section__card">
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className="pm-section__user">@nathanf</p>
          </div>
          <p className="pm-section__metric-value">1987</p>
          <p className="pm-section__metric-type">Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PrimaryMetricCard;
