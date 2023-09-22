import "./Footer.scss";
import logo from "../../assets/footer.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" className="footer__logo" />
      <div className="footer__icons">
        <a href="">
          <i className="bi bi-text-right hamburger__icon"></i>
        </a>
        <a href="">
          <i className="bi bi-text-right hamburger__icon"></i>
        </a>
        <a href="">
          <i className="bi bi-text-right hamburger__icon"></i>
        </a>
      </div>
      <p className="footer__copyright">
        © 2023 Lemonhive. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
