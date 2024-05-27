import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <img src={logo} className="logo" alt="logo al anwar 4" />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2  ">
            <li>
              <NavLink className="text-white text-decoration-none " to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white text-decoration-none " to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-decoration-none "
                to="/contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
