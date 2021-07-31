import iconFacebook from "./images/iconFacebook.svg";
import downIcon from "./images/icon-down.svg";

const SecondaryMetricCard = () => {
  return (
    <section className="sm-section">
      <div className="sm-section__heading">
        <h2 className="sm-section__headline"> Overview - Today</h2>
      </div>
      <ul className="sm__cards">
        <li className="sm-card">
          <div className="sm-card__column">
            <p className="sm-card__metric-type">Page Views</p>
            <p className="sm-card__metric-value">87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className="sm-card">
          <div className="sm-card__column">
            <p className="sm-card__metric-type">Page Views</p>
            <p className="sm-card__metric-value">87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className="sm-card">
          <div className="sm-card__column">
            <p className="sm-card__metric-type">Page Views</p>
            <p className="sm-card__metric-value">87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className="sm-card">
          <div className="sm-card__column">
            <p className="sm-card__metric-type">Page Views</p>
            <p className="sm-card__metric-value">87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className="sm-card">
          <div className="sm-card__column">
            <p className="sm-card__metric-type">Page Views</p>
            <p className="sm-card__metric-value">87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className="sm-card">
          <div className="sm-card__column">
            <p className="sm-card__metric-type">Page Views</p>
            <p className="sm-card__metric-value">87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SecondaryMetricCard;
