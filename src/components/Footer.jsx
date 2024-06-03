import youtube from "../assets/youtube.png";
import upacar from "../assets/upacra.png";

export default function Footer() {
  return (
    <>
      <section
        className="section-hero d-flex align-items-center "
        style={{
          marginTop: "2em",
          height: "75vh",
        }}
      >
        <div className="container py-3">
          <div className="row">
            <div className="col-md-8 col-12 py-2">
              <h1 className="text-white fw-bold text-center text-md-start">
                Mewujudkan santri yang berakhlakul karimah, berbudi,religius dan
                berwawasan intelektual.
              </h1>
              {/* bacground overlay */}
              <div className="bg overlay-bg"></div>

              <img className="bg img-bg" src={upacar} alt="img" />
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-center">
              <a
                href="https://www.youtube.com/@alanwar4media806"
                target="_blank"
                className="icon-container"
              >
                <div className="icon-container2">
                  <img src={youtube} alt="youtube" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" text-center bg-primary py-3">
        <p className="card-text text-white">Copyrigh © 2024 Al-Anwar Media</p>
      </div>
    </>
  );
}
