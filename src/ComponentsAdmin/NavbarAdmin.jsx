import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo ponpes.png";
export default function NavbarAdmin() {
  const navigate = useNavigate();
  function handleLogout() {
    const konfirmasi = confirm("apakah kamu yakin untuk logout?");
    if (konfirmasi) {
      localStorage.removeItem("token");
      navigate("/admin/login");
    }
  }
  return (
    <nav className="navbar bg-primary ">
      <div className="container">
        <a className="navbar-brand">
          <img src={Logo} alt="" />
        </a>

        <button
          onClick={handleLogout}
          className="btn btn-danger btn-sm"
          type="submit"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
