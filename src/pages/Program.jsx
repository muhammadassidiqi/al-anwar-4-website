import MainLayout from "../layout/MainLayout";
import { NavLink } from "react-router-dom";
import comingsun from "../assets/comingsun.png";
export default function Program() {
  return (
    <MainLayout>
      <section className="container py-2 ">
        <div className="row">
          <div className="col-md-6 col-12  order-md-1 order-2  align-content-center justify-content-center ">
            <h1>PROGRAM</h1>
            <h1 className="fw-bold">Website ini sedang dalam pembangunan</h1>
            <p>
              Mohon ditunggu ya, website saya masih dalam proses pembangunan.
              Kamu juga pengen buat website seperti ini?
            </p>
            <NavLink to="/" className="btn btn-danger">
              back home
            </NavLink>
          </div>

          <div className=" col-md-6 col-12 order-md-2 order-1">
            <img src={comingsun} className="w-100" alt="comingsun " />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
