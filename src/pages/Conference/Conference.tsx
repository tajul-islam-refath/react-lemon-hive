import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./conference.scss";
import vectorImg from "../../assets/Vector.png";

import Organizer from "./Organizer";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";
import Schedules from "./Schedule";

const GET_CONFERENCE = gql`
  query GetConference($conferenceId: ID!) {
    conference(id: $conferenceId) {
      id
      name
      slogan
      organizers {
        name
        about
        image {
          url
        }
      }
      speakers {
        name
        about
        image {
          url
        }
        social {
          twitter
          linkedin
          github
          dribble
        }
      }
      schedules {
        day
        intervals {
          sessions {
            type
            begin
            end
          }
        }
      }
      sponsors {
        name
        about
        image {
          url
        }
      }
    }
  }
`;

function Conference() {
  const [menuItems, setMenuItems] = useState([
    {
      type: "organizer",
      label: "Organizer",
    },
    {
      type: "speakers",
      label: "Speakers",
    },
    {
      type: "schedule",
      label: "Schedule",
    },
    {
      type: "sponsors",
      label: "Sponsors",
    },
  ]);
  const [type, setType] = useState("organizer");
  const [draggedIndex, setDraggedIndex] = useState(-1);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CONFERENCE, {
    variables: { conferenceId: id },
  });

  const conference = data.conference;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    index: number
  ): any => {
    setDraggedIndex(index);
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>): any => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (
    event: React.DragEvent<HTMLLIElement>,
    index: number
  ): any => {
    event.preventDefault();
    const sourceIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
    const updatedItems = [...menuItems];
    const temp = updatedItems[index];
    updatedItems[index] = updatedItems[sourceIndex];
    updatedItems[sourceIndex] = temp;
    setMenuItems(updatedItems);
  };

  return (
    <div className="conference">
      <div className="container">
        <div className="conference__header">
          <h1 className="conference__title">{conference?.name}</h1>
          <h1 className="conference__subtitle"> {conference.slogan}</h1>
        </div>
        <div className="conference__warper">
          <nav className="conference__navbar">
            <ul className="conference__list">
              {menuItems.map((item, i) => (
                <li
                  id={item.type}
                  key={item.type}
                  className={`conference__item  ${
                    type === item.type && "conference__item--active"
                  } ${i === draggedIndex && "dragging"}`}
                  onClick={() => setType(item.type)}
                  draggable
                  onDragStart={(e) => handleDragStart(e, i)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, i)}>
                  <div className="conference__item--icon">
                    <img src={vectorImg} alt="" />
                  </div>
                  <a className={`conference__link`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="conference__body">
            {type === "organizer" && (
              <>
                <Organizer organizers={conference.organizers} />
              </>
            )}
            {type === "speakers" && (
              <>
                <Speakers speakers={conference.speakers} />
              </>
            )}
            {type === "schedule" && (
              <>
                <Schedules schedules={conference.schedules} />
              </>
            )}
            {type === "sponsors" && (
              <>
                <Sponsors sponsors={conference.sponsors} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
