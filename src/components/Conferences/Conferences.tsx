import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./Conferences.scss";

const FILMS_QUERY = gql`
  {
    conferences {
      id
      name
      startDate
      slogan
    }
  }
`;

interface Conference {
  id: string;
  name: string;
  startDate: string;
  slogan: string;
}

const Conferences = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="conferences">
      <h2 className="conferences__title">Conferences</h2>
      <div className="conferences__container">
        <ul className="tl conferences__list">
          {data &&
            data.conferences.map((conference: Conference, i: number) =>
              i % 2 === 0 ? (
                <>
                  <li
                    key={conference.id}
                    className={`conferences__item ${
                      i == 0 && "conferences__item--active"
                    }`}>
                    <Link to={`/conference/${conference.id}`}>
                      <div className="timestamp timestamp--even">
                        {conference.startDate}
                      </div>
                      <div className="card card--even">
                        <h4 className="card__title">{conference.name}</h4>
                        <p className="card__text">{conference.slogan}</p>
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="conferences__item " key={conference.id}>
                    <Link to={`/conference/${conference.id}`}>
                      <div className="timestamp timestamp--odd">
                        {conference.startDate}
                      </div>
                      <div className="card card--odd">
                        <h4 className="card__title">{conference.name}</h4>
                        <p className="card__text">{conference.slogan}</p>
                      </div>
                    </Link>
                  </li>
                </>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default Conferences;
