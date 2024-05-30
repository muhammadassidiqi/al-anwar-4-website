import cewek from "../assets/cewek.png";
import guzyasin from "../assets/guzyasin.png";
import ngaji from "../assets/ngaji.png";
import ppp from "../assets/ppp.png";
import CardKegiatan from "../CardPondok/CardKegiatan";
import creative from "../assets/creative.png";
import belajar from "../assets/belajar.png";
import kecil from "../assets/kecil.png";
import { NavLink } from "react-router-dom";

import SMK from "../assets/smk.png";
import Card from "../CardProgram/ProgramCard";
import { useEffect, useState } from "react";

export default function SectionHero() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://diki.neuversity.site/wp-json/wp/v2/posts"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <section className="section-hero">
        <div className="container h-100">
          {/* bacground overlay */}
          <div className="bg overlay-bg"></div>
          <img className="bg img-bg" src={cewek} alt="" />

          <div className="row h-100">
            <div className="col-md-6 col-12 align-self-center ">
              <h4 className="text-warning">selamat datang </h4>
              <h1 className="fw-bold text-white ">
                Pondok Pesantren Al-Anwar IV Sarang
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, rem! Officia minus totam magni voluptate.
              </p>
              <div className="">
                <NavLink
                  className="text-white nav-link text-decoration-none d-inline-block "
                  to="/pendaftaran"
                >
                  <button className="btn btn-light text-primary fw-bold m-2">
                    PENDAFTARAN
                  </button>
                </NavLink>
                <button type="button" class="btn btn-outline-warning fw-bold">
                  PROFIL
                </button>
              </div>
            </div>
            <div className="col-md-6 align-self-end col-12 ">
              <img className="w-100 " src={SMK} alt="smk" />
            </div>
          </div>
        </div>
      </section>
      {/* sambutan */}
      <section class="section-img py-5">
        <div className="container h-100 ">
          <div class="row align-items-center ">
            <div class="col-md-6 col-12  order-1 ">
              <img class="w-100 " src={guzyasin} alt="ilustration" />
            </div>
            <div class="col-md-6 col-12  order-2 ">
              <h4>K.H.Taj Yasin Maimoen</h4>
              <h2 class="fw-bold">
                Sambutan Pengasuh Pondok Pesantren Al-Anwar IV Sarang, Rembang,
                Jawa Tengah.
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente veniam ut vero consectetur voluptatem quaerat sunt.
                Vero temporibus voluptas, numquam amet officia nulla aperiam,
                voluptatum et reiciendis voluptates quas sint.
              </p>
              <button class="btn btn-primary">BACA SELENGKPANYA</button>
            </div>
          </div>
        </div>
      </section>
      {/* sectio card */}
      <section className="bg-secondary-subtle">
        <div className="container py-5 ">
          <div className="row align-items-center ">
            <div className="col-md-4 col-12">
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

            <div className="col-md-4 col-12 mt-3 ">
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
            <div className="col-md-4 col-12">
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
      {/* background overlay */}
      <section className="section-hero d-flex align-items-center text-center">
        <div className="container">
          <p className="text-warning">K. H. Maimoen Zubair</p>
          <h1 className="text-white">
            “Ojo mikir engko dadi opo. Sing penting saiki sinau sing sergep.”
          </h1>
          <button className="btn btn-warning m-3">AYO MONDOK SEKARANG</button>

          <div className="bg overlay-bg"></div>
          <img className="bg img-bg" src={ppp} alt="img" />
        </div>
      </section>
      {/* card kegiatan */}
      <section>
        <div className="container m-6">
          <h2 className="text-center text-primary fw-bold m-5">
            Kegiatan pondok
          </h2>
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-4 col-12 mt-4">
                <CardKegiatan
                  image={creative}
                  judul={post.title.rendered}
                  date={post.date}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
