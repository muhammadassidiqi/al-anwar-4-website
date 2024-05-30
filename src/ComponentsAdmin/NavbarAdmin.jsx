import Logo from "../assets/logo ponpes.png";
export default function NavbarAdmin() {
  return (
    <nav className="navbar bg-primary ">
      <div className="container">
        <a className="navbar-brand">
          <img src={Logo} alt="" />
        </a>

        <button className="btn btn-danger" type="submit">
          Logout
        </button>
      </div>
    </nav>
  );
}
