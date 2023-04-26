import { FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <img src="../../img/logo.png" alt="Petoia logo" />
        <div className="socialIcons">
          <FaYoutube />
          <FaTwitter />
          <FaGoogle />
        </div>
        <p>© 2023 Petopia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
