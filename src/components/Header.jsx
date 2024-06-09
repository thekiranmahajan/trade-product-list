import { useState } from "react";
import cartLogo from "../assets/shopping-cart.png";
import NavLinks from "./NavLinks";
import "../styles/header.css";
import hamburgerImg from "../assets/hamburger.svg";

const Header = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  console.log(isHamburger);

  return (
    <nav className="nav-container">
      <img src={cartLogo} alt="cart-logo" />
      <img
        id="hamburger-img"
        onClick={() => {
          setIsHamburger((prev) => !prev);
        }}
        src={hamburgerImg}
        alt="hamburger img"
      />
      {isHamburger && <NavLinks style="hamburger" />}

      <NavLinks style="not-hamburger" />
    </nav>
  );
};

export default Header;
