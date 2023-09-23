import "./ListCard.scss";
import CardImg from "../../assets/CardImg.png";
function ListCard() {
  return (
    <div className="listCard">
      <img src={CardImg} alt="" className="listCard__img" />
      <div className="listCard__content">
        <h3 className="listCard__title">Siddhartha</h3>
        <h5 className="listCard__text">
          Lorem ipsum dolor sit amet, con sec tetur ad.
        </h5>
      </div>
    </div>
  );
}

export default ListCard;
