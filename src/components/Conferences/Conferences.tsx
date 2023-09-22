import { Link } from "react-router-dom";
import "./Conferences.scss";

const Conferences = () => {
  return (
    <div className="conferences">
      <h2 className="conferences__title">Conferences</h2>
      <div className="conferences__container">
        <ul className="tl conferences__list">
          <li className="conferences__item conferences__item--active">
            <Link to={`/conference/${1}`}>
              <div className="timestamp timestamp--even">
                02 September, 2023
              </div>
              <div className="card card--even">
                <h4 className="card__title">Freezing Edge 2023</h4>
                <p className="card__text">
                  The edge isn't bleeding, it's freezing!
                </p>
              </div>
            </Link>
          </li>
          <li className="conferences__item">
            <Link to={`/conference/${2}`}>
              <div className="timestamp timestamp--odd">02 September, 2023</div>
              <div className="card card--odd">
                <h4 className="card__title">Design systems for beginners</h4>
                <p className="card__text">
                  The workshop will provide you with all the basics
                </p>
              </div>
            </Link>
          </li>
          <li className="conferences__item ">
            <Link to={`/conference/${3}`}>
              <div className="timestamp timestamp--even">
                02 September, 2023
              </div>
              <div className="card card--even">
                <h4 className="card__title">
                  Web Components - Write once & run{" "}
                </h4>
                <p className="card__text">
                  The edge isn't bleeding, it's freezing!
                </p>
              </div>
            </Link>
          </li>
          <li className="conferences__item">
            <Link to={`/conference/${4}`}>
              <div className="timestamp timestamp--odd">03 September, 2023</div>
              <div className="card card--odd">
                <h4 className="card__title">
                  Accessibility testing for developers
                </h4>
                <p className="card__text">
                  The workshop is split into several modules.
                </p>
              </div>
            </Link>
          </li>
          <li className="conferences__item ">
            <Link to={`/conference/${5}`}>
              <div className="timestamp timestamp--even">
                03 September, 2023
              </div>
              <div className="card card--even">
                <h4 className="card__title">The weird things about React</h4>
                <p className="card__text">
                  Conditional rendering issues in JSX, forwardRef
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Conferences;
