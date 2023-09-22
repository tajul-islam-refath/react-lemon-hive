import "./Footer.scss";
import logo from "../../assets/footer.png";
import iconTw from "../../assets/icon-tw.png";
import iconIn from "../../assets/icon-in.png";
import iconFb from "../../assets/icon-fb.png";
import iconG from "../../assets/icon-g.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" className="footer__logo" />
      <div className="footer__icons">
        <a href="">
          <img src={iconTw} alt="" className="footer__icon" />
        </a>
        <a href="">
          <img src={iconIn} alt="" className="footer__icon" />
        </a>
        <a href="">
          <img src={iconFb} alt="" className="footer__icon" />
        </a>
        <a href="">
          <img src={iconG} alt="" className="footer__icon" />
        </a>
      </div>
      <p className="footer__copyright">
        © 2023 Lemonhive. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
