import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <NavLink to={"/"}>
          <img src={logo} className="logo" alt="logo al anwar 4" />
        </NavLink>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <>
            {/*?xml version="1.0" encoding="utf-8"?*/}
            {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </>
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
                to="/program"
              >
                PROGRAM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="text-white nav-link text-decoration-none "
                to="/galeri"
              >
                GALERI
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="text-white nav-link text-decoration-none "
                to="/kontak"
              >
                KONTAK
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
