import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo ponpes.png";
import Swal from "sweetalert2";
export default function NavbarAdmin() {
  const navigate = useNavigate();
  function handleLogout() {
    Swal.fire({
      title: "apakah kamu yakin untuk logout",
      icon: "question",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "ya",
      cancelButtonText: "batal",
    }).then((reuslt) => {
      if (reuslt.isConfirmed) {
        localStorage.removeItem("token");
        Swal.fire({
          title: "logout berhasil",
          text: "anda telah berhasil logout",
          icon: "success",
        });
        navigate("/admin/login");
      }
    });
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
