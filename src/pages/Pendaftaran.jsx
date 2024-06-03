import MainLayout from "../layout/MainLayout";
import anak from "../assets/anak.png";
import Input from "../components/SectionPendaftaran";
export default function Pendaftaran() {
  return (
    <MainLayout>
      <section className="section-img">
        <div className="container py-5 ">
          {/* bacground overlay */}
          <div className="bg overlay-bg"></div>
          <img className="bg img-bg" src={anak} alt="anak" />

          <h3 className="fw-bold text-white p-5">PENDAFTARAN</h3>
        </div>
      </section>
      {/* row wrapper  */}
      <section className="">
        <div className="container py-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 col-12 justify-content-center">
              {/* row content */}

              <Input />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
