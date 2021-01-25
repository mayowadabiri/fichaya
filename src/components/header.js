// @ts-nocheck
import Logo from "../assets/path0.png";
import Navigation from "./Navigation/navigation";
import Frame from "../assets/Frame.svg";
import Vector from "../assets/user.svg";
import caret from "../assets/caret.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="heasder__brand">
            <img src={Logo} alt="Logo" />
          </div>
          <Navigation />
          <div className="header__icons">
            <div className="header__icons-1">
              <img src={Frame} alt="notification" />
            </div>
            <div className="header__icons-2">
              <img src={Vector} alt="user" />
              <img src={caret} alt="caret" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
