import { json, useNavigate } from "react-router-dom";
import FooterAdmin from "../../ComponentsAdmin/FooterAdmin";
import NavbarAdmin from "../../ComponentsAdmin/NavbarAdmin";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Admin() {
  const [Judul, setJudul] = useState("");
  const [Konten, setKonten] = useState("");
  const navigate = useNavigate();
  function createPost() {
    fetch("https://web.abdulhaxor.my.id/wp-json/wp/v2/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: Judul,
        content: Konten,
        status: "publish",
      }),
    }).then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        Swal.fire({
          title: "berhasil",
          text: "postingan berhasil dibuat",
          icon: "success",
        });

        // set token ke localstorage
      } else {
        Swal.fire({
          title: "Error!",
          text: "gagal",
          icon: "error",
        });
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    createPost();
  }

  function checkAouth() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    }
  }

  // check authentikasi ketika pertama kali halaman di load
  // useeffeck mounting
  useEffect(() => {
    checkAouth();
  }, []);

  return (
    <>
      <NavbarAdmin />

      <section className="container d-flex justify-content-center align-items-center section-admin py-5 ">
        <form
          onSubmit={handleSubmit}
          className="border w-100 border-dark py-5 px-5 col-12"
        >
          <div className="form-group ">
            <div className="justify-content-center">
              <h2>Membuat postingan Blog</h2>
            </div>
            <div className="py-1 col-12">
              featured media
              <input type="file" className="form-control" />
            </div>

            <label htmlFor="exampleInputEmail1">judul</label>

            <input
              value={Judul}
              onInput={(event) => setJudul(event.target.value)}
              type="text"
              className="form-control"
              id="exampleInputjudul"
              placeholder="judul Blog.."
            />
          </div>
          <div className="form-group py-1 col-12">
            <label htmlFor="exampleInputPassword1">Content</label>
            <textarea
              value={Konten}
              onInput={(event) => setKonten(event.target.value)}
              type="text"
              className="form-control"
              id="exampleInputcontent"
              rows={5}
              placeholder="Content Blog.."
            />
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </section>
      <FooterAdmin />
    </>
  );
}
