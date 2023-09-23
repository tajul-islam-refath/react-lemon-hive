import "./ListCard.scss";
import CardImg from "../../assets/CardImg.png";
interface Item {
  name: string;
  about: string;
  image: {
    url: string;
  };
  social?: {
    twitter: string | null;
    linkedin: string | null;
    github: string | null;
    dribble: string | null;
  };
}

interface Props {
  item: Item;
}

const ListCard: React.FC<Props> = ({ item }) => {
  console.log(item);
  return (
    <div className="listCard">
      <img src={item.image?.url} alt="" className="listCard__img" />
      <div className="listCard__content">
        <h3 className="listCard__title">{item.name}</h3>
        <h5 className="listCard__text">{item.about}</h5>
      </div>
    </div>
  );
};

export default ListCard;
