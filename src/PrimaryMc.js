import iconFacebook from "./images/iconFacebook.svg";
import downIcon from "./images/icon-down.svg";

const PrimaryMetricCard = ({ theme }) => {
  let lt_card = theme ? "pm-section__card--light" : "";
  let lt_text_1 = theme ? "pm-section__metric-value--light" : "";
  let lt_text_2 = theme ? "pm-section__user--light" : "";
  let lt_text_3 = theme ? "pm-section__metric-type--light" : "";

  return (
    <section className="pm-section">
      <ul className="pm-section__cards">
        <li
          data-account-type="facebook"
          className={`pm-section__card ${lt_card}`}
        >
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className={`pm-section__user ${lt_text_2}`}>@nathanf</p>
          </div>
          <p className={`pm-section__metric-value ${lt_text_1}`}>1987</p>
          <p className={`pm-section__metric-type ${lt_text_3}`}>Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
        <li
          data-account-type="facebook"
          className={`pm-section__card ${lt_card}`}
        >
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className={`pm-section__user ${lt_text_2}`}>@nathanf</p>
          </div>
          <p className={`pm-section__metric-value ${lt_text_1}`}>1987</p>
          <p className={`pm-section__metric-type ${lt_text_3}`}>Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
        <li
          data-account-type="facebook"
          className={`pm-section__card ${lt_card}`}
        >
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className={`pm-section__user ${lt_text_2}`}>@nathanf</p>
          </div>
          <p className={`pm-section__metric-value ${lt_text_1}`}>1987</p>
          <p className={`pm-section__metric-type ${lt_text_3}`}>Followers</p>
          <div className="pm-section__metric-differnce">
            <img src={downIcon} alt="down-arrow" />
            <p>
              <span>12</span> <span> Today</span>
            </p>
          </div>
        </li>
        <li
          data-account-type="facebook"
          className={`pm-section__card ${lt_card}`}
        >
          <div className="pm-section__account-data">
            <img src={iconFacebook} alt="facebook" />
            <p className={`pm-section__user ${lt_text_2}`}>@nathanf</p>
          </div>
          <p className={`pm-section__metric-value ${lt_text_1}`}>1987</p>
          <p className={`pm-section__metric-type ${lt_text_3}`}>Followers</p>
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
