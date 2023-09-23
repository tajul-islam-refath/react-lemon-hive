import React, { useState } from "react";
import "./conference.scss";
import vectorImg from "../../assets/Vector.png";

import Organizer from "./Organizer";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";

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
                <Organizer />
              </>
            )}
            {type === "speakers" && (
              <>
                <Speakers />
              </>
            )}
            {type === "schedule" && (
              <>
                <Schedule />
              </>
            )}
            {type === "sponsors" && (
              <>
                <Sponsors />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
