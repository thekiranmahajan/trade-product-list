import { NavLink } from "react-router-dom";

const NavLinks = ({ style }) => {
  return (
    <ul className={style}>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="#">
        Contact
      </NavLink>
      <NavLink className="nav-link" to="#">
        About
      </NavLink>
      <NavLink className="nav-link" to="/users-info">
        Users Page
      </NavLink>
    </ul>
  );
};

export default NavLinks;
