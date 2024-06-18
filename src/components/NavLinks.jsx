import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = forwardRef((props, ref) => {
  const { setIsHamburger, style } = props;
  return (
    <ul ref={ref} className={style}>
      <NavLink
        onClick={() => setIsHamburger(false)}
        className="nav-link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setIsHamburger(false)}
        className="nav-link"
        to="#"
      >
        Contact
      </NavLink>
      <NavLink
        onClick={() => setIsHamburger(false)}
        className="nav-link"
        to="#"
      >
        About
      </NavLink>
      <NavLink
        onClick={() => setIsHamburger(false)}
        className="nav-link"
        to="/users-info"
      >
        Users Page
      </NavLink>
    </ul>
  );
});

export default NavLinks;
