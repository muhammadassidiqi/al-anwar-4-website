import youtube from "../assets/youtube.png";
import upacar from "../assets/upacra.png";

export default function Footer() {
  return (
    <>
      <section
        className="section-hero d-flex align-items-center "
        style={{
          marginTop: "5em",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="text-white fw-bold">
                Mewujudkan santri yang berakhlakul karimah, berbudi,religius dan
                berwawasan intelektual.
              </h1>
              {/* bacground overlay */}
              <div className="bg overlay-bg"></div>
              <img className="bg img-bg" src={upacar} alt="img" />
            </div>
            <div className="col-4">
              <div className="icon-container">
                <div className="icon-container2">
                  <img src={youtube} alt="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="card text-center bg-primary">
        <div className="card-body">
          <p className="card-text text-white">Copyrigh © 2024 Al-Anwar Media</p>
        </div>
      </div>
    </>
  );
}
