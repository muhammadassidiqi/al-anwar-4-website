import MainLayout from "../layout/MainLayout";
import cewek from "../assets/cewek.png";
import guzyasin from "../assets/guzyasin.png";
import ngaji from "../assets/ngaji.png";
import ppp from "../assets/ppp.png";
import CardKegiatan from "../CardPondok/CardKegiatan";
import creative from "../assets/creative.png";
import belajar from "../assets/belajar.png";
import kecil from "../assets/kecil.png";

import SMK from "../assets/smk.png";
import Card from "../CardProgram/ProgramCard";
export default function Home() {
  return (
    <MainLayout>
      <section className="section-hero">
        <div className="container">
          {/* bacground overlay */}
          <div className="bg overlay-bg"></div>
          <img className="bg img-bg" src={cewek} alt="" />

          <div className="row align-items-center ">
            <div className="col-6  ">
              <h4 className="text-warning">selamat datang </h4>
              <h1 className="fw-bold text-white ">
                Pondok Pesantren Al-Anwar IV Sarang
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, rem! Officia minus totam magni voluptate.
              </p>
              <button className="btn btn-light text-primary fw-bold m-2">
                PENDAFTARA
              </button>
              <button type="button" class="btn btn-outline-warning fw-bold">
                PROFIL
              </button>
            </div>
            <div className="col-6">
              <img className="w-100 " src={SMK} alt="smk" />
            </div>
          </div>
        </div>
      </section>

      <section class="container m-5">
        <div class="row align- align-items-center ">
          <div class="col-6">
            <img class="w-100" src={guzyasin} alt="ilustration" />
          </div>
          <div class="col-6">
            <h4>K.H.Taj Yasin Maimoen</h4>
            <h2 class="fw-bold">
              Sambutan Pengasuh Pondok Pesantren Al-Anwar IV Sarang, Rembang,
              Jawa Tengah.
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              veniam ut vero consectetur voluptatem quaerat sunt. Vero
              temporibus voluptas, numquam amet officia nulla aperiam,
              voluptatum et reiciendis voluptates quas sint.
            </p>
            <button class="btn btn-primary">BACA SELENGKPANYA</button>
          </div>
        </div>
      </section>

      {/* sectio card */}
      <section className="bg-secondary-subtle">
        <div className="container py-5 ">
          <div className="row align-items-center ">
            <div className="col-4">
              <h3>
                <span className="text-primary"> Program Unggulan</span> Pondok
                Pesantren Al-Anwar IV
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo inventore at omnis nostrum maiores voluptatem nesciunt
                ipsum praesentium cumque ad.
              </p>
              <img className="w-100" src={ngaji} alt="ngaji" />
            </div>

            <div className="col-4 ">
              <Card
                judul={
                  <>
                    <i class="bi bi-person"></i>
                    tahfidz alqur'ans
                  </>
                }
                deskripsi="Lorem ipsum dolor sit amet consectetur. 
                Habitant mi pellentesque mattis sollicitudin lectus 
                sit semper. Magna sagittis egestas proin accumsan
                 non malesuada. Curabitur sapien mi mattis nunc vitae proin semper."
              />
              <Card
                judul="tahfidz alqur'an"
                deskripsi="Lorem ipsum dolor sit amet consectetur. 
                Habitant mi pellentesque mattis sollicitudin lectus 
                sit semper. Magna sagittis egestas proin accumsan
                 non malesuada. Curabitur sapien mi mattis nunc vitae proin semper."
              />
              <Card
                judul="tahfidz alqur'an"
                deskripsi="Lorem ipsum dolor sit amet consectetur. 
                Habitant mi pellentesque mattis sollicitudin lectus 
                sit semper. Magna sagittis egestas proin accumsan
                 non malesuada. Curabitur sapien mi mattis nunc vitae proin semper."
              />
            </div>
            <div className="col-4">
              <Card
                judul="tahfidz alqur'an"
                deskripsi="Lorem ipsum dolor sit amet consectetur. 
                Habitant mi pellentesque mattis sollicitudin lectus 
                sit semper. Magna sagittis egestas proin accumsan
                 non malesuada. Curabitur sapien mi mattis nunc vitae proin semper."
              />
              <Card
                judul="tahfidz alqur'an"
                deskripsi="Lorem ipsum dolor sit amet consectetur. 
                Habitant mi pellentesque mattis sollicitudin lectus 
                sit semper. Magna sagittis egestas proin accumsan
                 non malesuada. Curabitur sapien mi mattis nunc vitae proin semper."
              />
              <Card
                judul="tahfidz alqur'an"
                deskripsi="Lorem ipsum dolor sit amet consectetur. 
              Habitant mi pellentesque mattis sollicitudin lectus 
              sit semper. Magna sagittis egestas proin accumsan
               non malesuada. Curabitur sapien mi mattis nunc vitae proin semper."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-hero d-flex align-items-center text-center">
        <div className="container">
          <p className="text-warning">K. H. Maimoen Zubair</p>
          <h1 className="text-white">
            “Ojo mikir engko dadi opo. Sing penting saiki sinau sing sergep.”
          </h1>
          <button className="btn btn-warning m-3">AYO MONDOK SEKARANG</button>
          {/* bacground overlay */}
          <div className="bg overlay-bg"></div>
          <img className="bg img-bg" src={ppp} alt="img" />
        </div>
      </section>

      <section>
        <div className="container m-6">
          <h2 className="text-center text-primary fw-bold m-5">
            Kegiatan pondok
          </h2>
          <div className="row">
            <div className="col-4">
              <CardKegiatan
                image={creative}
                judul="creative"
                deskription="Lorem ipsum dolor sit amet consectetur. 
                Non tristique eget mi sed massa praesent imperdiet morbi quis."
                date="10/20/2024"
              />
            </div>
            <div className="col-4">
              <CardKegiatan
                image={belajar}
                judul="belajar"
                deskription="Lorem ipsum dolor sit amet
                 consectetur. Non tristique eget mi sed massa praesent imperdiet morbi quis."
                date="10/20/2024"
              />
            </div>
            <div className="col-4">
              <CardKegiatan
                image={kecil}
                judul="kecil"
                deskription="Lorem ipsum dolor sit amet consectetur.
                 Non tristique eget mi sed massa praesent imperdiet morbi quis."
                date="10/20/2024"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
