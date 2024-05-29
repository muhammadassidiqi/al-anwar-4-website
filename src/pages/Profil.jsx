import MainLayout from "../layout/MainLayout";
import anak from "../assets/anak.png";
import pondok from "../assets/pondok.png";

export default function Profil() {
  return (
    <MainLayout>
      <section className="section-img">
        <div className="container py-5 ">
          {/* bacground overlay */}
          <div className="bg overlay-bg"></div>
          <img className="bg img-bg" src={anak} alt="anak" />

          <h3 className="fw-bold text-white p-5">PROFILE</h3>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-12 col-12">
            <img className="w-100" src={pondok} alt="pondok" />
          </div>
          <div className="col-md-8 col-12 py-5">
            <h4 className="fw-bold text-primary">
              Profil Pondok Pesantren Al-Anwar IV Sarang, Rembang, Jawa Tengah.
            </h4>
            <p>
              Object bullet pen comment line select effect content subtract.
              Bold italic hand ellipse scrolling reesizing vector horizontal
              duplicate. Slice scale boolean pixel bold hand reesizing outline.
              Union blur frame select link clip link vertical outline boolean.
              Clip library duplicate scale draft. Rectangle italic pencil text
              text. Edit duplicate group bold rotate
            </p>
            <p>
              xscale scale editor flows flatten. Polygon create variant library
              group polygon flows variant bold. Create pixel share ellipse frame
              pencil comment fill clip. Figma horizontal boolean rotate image
              figma comment. Vector boolean style scrolling horizontal union
              style figma plugin. Inspect
            </p>
            <p>
              font underline clip figjam vector union. Comment share subtract
              style list union figjam pencil reesizing. Distribute overflow
              subtract asset duplicate follower. Font content image inspect
              style. Clip project undo reesizing pencil. Thumbnail star opacity
              background align team library outline. Link rotate font move main
              layout component link. Rotate link export blur star. Align
              component align follower project export shadow mask scrolling
              text. Pencil auto slice inspect layer. Shadow comment horizontal
              ellipse stroke. Underline variant invite outline outline ipsum.
              Ipsum auto device bold share bold undo component object opacity.
            </p>
          </div>
          <div className=" col-md-4 col-12 py-5 ">
            <div className=" rounded-3 bg-secondary-subtle  px-3 py-4">
              <h6 className="text-primary fw-bold P ">visi</h6>
              <p>
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </p>

              <h6 className="text-primary fw-bold ">misi</h6>
              <p>
                Menyiapkan generasi bangsa yang terampil, produktif, siap
                bersaing di dunia usaha dan industri.
              </p>
              <hr />

              <p>Membentuk karakter yang santun dan bermanfaat.</p>
              <hr />
              <p>
                Menanamkan keilmuan yang berlandaskan Al-Quran dan kutubussalaf.
              </p>
            </div>

            <div class="d-grid py-2">
              <button class="btn btn-primary " type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
