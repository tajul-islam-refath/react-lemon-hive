import "./Hero.scss";
import hero1 from "../../assets/hero_1.png";
import hero2 from "../../assets/hero_2.png";
import hero3 from "../../assets/hero_3.png";
import hero4 from "../../assets/hero_4.png";
import hero5 from "../../assets/hero_5.png";
import hero6 from "../../assets/hero_6.jpg";

function Hero() {
  return (
    <div className="hero">
      <img src={hero1} className="hero__img--one" alt="" />
      <img src={hero2} className="hero__img--two" alt="" />
      <img src={hero5} className="hero__img--five" alt="" />
      <img src={hero6} className="hero__img--six" alt="" />
      <div className="container">
        <div className="hero__content">
          <div className="row">
            <div className="col-md-7">
              <div className="hero__text">
                <h1>React</h1>
                <h1>Conference</h1>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <img src={hero4} alt="" className="hero4" />
                </div>
                <div className="col-md-7">
                  <p>
                    Lorem uis diam turpis quam id fermentum.In quis diam turpis
                    quam id fermentum..id fermentum.In quis diam turpis quam id
                    fermentum.
                  </p>
                  <button className="hero__buyticket">Buy Tickets</button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={hero3} alt="" className=" hero3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
