import FooterAdmin from "../../ComponentsAdmin/FooterAdmin";
import NavbarAdmin from "../../ComponentsAdmin/NavbarAdmin";
export default function Admin() {
  return (
    <>
      <NavbarAdmin />

      <section
        className=" container d-flex justify-content-center align-items-center  "
        style={{
          height: "100vh",
          width: "50vw",
        }}
      >
        <form className="border w-100 border-dark py-5 px-5">
          <div className="form-group ">
            <div className="justify-content-center">
              <h2>Membuat postingan Blog</h2>
            </div>
            <div className="py-1">
              featured media
              <input type="file" className="form-control" />
            </div>

            <label htmlFor="exampleInputEmail1">judul</label>

            <input
              type="text"
              className="form-control"
              id="exampleInputjudul"
              placeholder="judul Blog.."
            />
          </div>
          <div className="form-group py-1">
            <label htmlFor="exampleInputPassword1">Content</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputcontent"
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
