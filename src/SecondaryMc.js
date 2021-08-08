import iconFacebook from "./images/iconFacebook.svg";
import downIcon from "./images/icon-down.svg";

const SecondaryMetricCard = ({ theme }) => {
  let lt_card = theme ? "sm-card--light" : "";
  let ltText_1 = theme ? "sm-card__metric-value--light" : "";
  let ltText_2 = theme ? "sm-card__metric-type--light" : "";
  let ltText_3 = theme ? "sm-section__headline--light" : "";

  return (
    <section className="sm-section">
      <div className="sm-section__heading">
        <h2 className={`sm-section__headline ${ltText_3}`}>
          {" "}
          Overview - Today
        </h2>
      </div>
      <ul className="sm__cards">
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
          </div>
          <div className="sm-card__column">
            <img src={iconFacebook} alt="facbook" />
            <div>
              <img src={downIcon} alt="down-arrow" />
              <p className="sm-card__metric-percent">3%</p>
            </div>
          </div>
        </li>
        <li className={`sm-card ${lt_card}`}>
          <div className="sm-card__column">
            <p className={`sm-card__metric-type ${ltText_2}`}>Page Views</p>
            <p className={`sm-card__metric-value ${ltText_1}`}>87</p>
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
