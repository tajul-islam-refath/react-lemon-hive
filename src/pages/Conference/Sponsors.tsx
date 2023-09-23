import React from "react";
import ListCard from "../../components/ListCard/ListCard";
interface Sponsor {
  name: string;
  about: string;
  image: {
    url: string;
  };
}

interface Props {
  sponsors: Sponsor[];
}
const Sponsors: React.FC<Props> = ({ sponsors }) => {
  return <>{sponsors && sponsors.map((item) => <ListCard item={item} />)}</>;
};

export default Sponsors;
