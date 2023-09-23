import React from "react";
import ListCard from "../../components/ListCard/ListCard";

interface Organizer {
  name: string;
  about: string;
  image: {
    url: string;
  };
}

interface Props {
  organizers: Organizer[];
}
const Organizer: React.FC<Props> = ({ organizers }) => {
  console.log(organizers);
  return (
    <>{organizers && organizers.map((item) => <ListCard item={item} />)}</>
  );
};

export default Organizer;
