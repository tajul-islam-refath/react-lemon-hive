import "./conference.scss";
import vectorImg from "../../assets/Vector.png";

function Conference() {
  return (
    <div className="conference">
      <div className="container">
        <div className="conference__header">
          <h1 className="conference__title">Freezing Edge 2023</h1>
          <h1 className="conference__subtitle">
            {" "}
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum.
          </h1>
        </div>
        <div className="conference__warper">
          <nav className="conference__navbar">
            <ul className="conference__list">
              <li className="conference__item conference__item--active">
                <div className="conference__item--icon">
                  <img src={vectorImg} alt="" />
                </div>
                <a
                  href=""
                  className="conference__link conference__link--active">
                  Organizer
                </a>
              </li>
              <li className="conference__item">
                <div className="conference__item--icon">
                  <img src={vectorImg} alt="" />
                </div>
                <a href="" className="conference__link">
                  Speakers
                </a>
              </li>
              <li className="conference__item">
                <div className="conference__item--icon">
                  <img src={vectorImg} alt="" />
                </div>
                <a href="" className="conference__link">
                  Schedule
                </a>
              </li>
              <li className="conference__item">
                <div className="conference__item--icon">
                  <img src={vectorImg} alt="" />
                </div>
                <a href="" className="conference__link">
                  Sponsors
                </a>
              </li>
            </ul>
          </nav>
          <div className="conference__body">
            <h1>Body</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
