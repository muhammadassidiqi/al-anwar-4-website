import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <img src={logo} className="logo" alt="logo al anwar 4" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2  ">
            <li className="nav-item">
              <NavLink
                className="text-white nav-link text-decoration-none "
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="text-white nav-link text-decoration-none "
                to="/Profil"
              >
                PROFIL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="text-white nav-link text-decoration-none "
                to="/Pendaftaran"
              >
                PENDAFTARAN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
