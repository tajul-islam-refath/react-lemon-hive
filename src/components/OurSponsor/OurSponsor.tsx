import "./OurSponsor.scss";
import LogoOne from "../../assets/sponsor-logo-1.png";
import LogoTwo from "../../assets/sponsor-logo-2.png";
import LogoThree from "../../assets/sponsor-logo-3.png";

const OurSponsor = () => {
  return (
    <div className="sponsor">
      <h2 className="sponsor__title">Our Sponsor</h2>
      <div className="sponsor__group">
        <p className="sponsor__subtitle">🥇 Gold Sponsor</p>
        <img src={LogoOne} alt="" className="sponsor__logo" />
      </div>
      <div className="sponsor__group">
        <p className="sponsor__subtitle">🥈Silver Sponsors</p>
        <img src={LogoTwo} alt="" className="sponsor__logo" />
      </div>
      <div className="sponsor__group">
        <p className="sponsor__subtitle">🥉Bronze Sponsors</p>
        <img src={LogoThree} alt="" className="sponsor__logo" />
      </div>
    </div>
  );
};

export default OurSponsor;
