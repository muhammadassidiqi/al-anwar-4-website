import MainLayout from "../layout/MainLayout";
import anak from "../assets/anak.png";
export default function Profil() {
  return (
    <MainLayout>
      <section className="section-img">
        <div className="container">
          {/* bacground overlay */}
          <div className=" overlay-bg"></div>
          <img className="img-bg" src={anak} alt="anak" />
        </div>
      </section>
    </MainLayout>
  );
}
