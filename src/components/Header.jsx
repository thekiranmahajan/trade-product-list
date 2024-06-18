import { useEffect, useRef, useState } from "react";
import cartLogo from "../assets/shopping-cart.png";
import NavLinks from "./NavLinks";
import "../styles/header.css";
import hamburgerImg from "../assets/hamburger.svg";

const Header = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const hamburgerRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (hamburgerRef.current && !hamburgerRef.current.contains(event.target))
      setIsHamburger(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
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
      {isHamburger && (
        <NavLinks
          ref={hamburgerRef}
          setIsHamburger={setIsHamburger}
          style="hamburger"
        />
      )}

      <NavLinks style="not-hamburger" />
    </nav>
  );
};

export default Header;
