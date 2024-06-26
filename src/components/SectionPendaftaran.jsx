import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    window.open(
      "https://wa.me/62882003724935?text=" +
        encodeURIComponent(
          `
    
hallo saya ingin mendaftar ke xxx pondok

nama : ${name}
email : ${email}
password : ${password}
  

> blockquote


    `.trim()
        )
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-2">
        Nama lengkap
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="username"
          className="form-control"
        />
      </div>
      <div className="mt-2">
        password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="password"
        />
      </div>
      {/* <div className="col-md-6 col-12 py-2">
        Alamat Lengkap
        <input
          type="number "
          placeholder="jln, nomor rumah, RT dan RW, nama kelurahan atau dusun, kecamatan, kabupaten,"
          className="form-control"
        />
      </div> */}
      {/* <div className="col-md-6 col-12 py-2">
        Nomor telepon
        <input
          type="number"
          placeholder="08XX-XXXX-XXXX-"
          className="form-control"
        />
      </div> */}
      {/* <div className="col-md-12 col-12 py-2">
        Email Aktif
        <input
          type="text"
          placeholder="Pastikan Email Anda Sudah benar"
          className="form-control"
        />
      </div> */}

      {/* <div className="col-md-6 col-12 py-2">
        Nama Orang Tua/Wali
        <input type="text" placeholder="Nama wali" className="form-control" />
      </div> */}

      <div className="mt-2">
        email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          placeholder="email"
        />
      </div>
      {/* <div className="col-md-6 col-12 py-2 ">
        Jenis Kelamin
        <div className="input-group">
          <div className="form-control gap-3 d-flex">
            <input
              type="radio"
              id="laki-laki"
              name="kelamin"
              value="laki-laki"
              className="form-check-input"
            />
            <label htmlFor="laki-laki" className="text-secondary">
              laki-laki
            </label>
          </div>
          <div className="form-control gap-3 d-flex">
            <input
              type="radio"
              id="perempuan"
              name="kelamin"
              value="perempuan"
              className="form-check-input"
            />
            <label htmlFor="perempuan" className="text-secondary">
              perempuan
            </label>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-12 py-2">
        Pekerjaan
        <input
          type="text"
          placeholder="Programmer, Dokter dll"
          className="form-control"
        />
      </div>
      <div className="col-md-12 col-12 py-2">
        Alamat Lengkap
        <input
          type="text"
          placeholder="Nama Jalan, Gang, No. Rumah, RT dan RW"
          className="form-control"
        />
      </div>

      <div className="col-md-6 col-12 py-2">
        Provinsi
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Pilih Provinsi
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Kabupaten/Kota
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Pilih Kota/Kabupaten
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Kecamatan
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Pilih Kecamatan
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Kelurahan/Desa
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Pilih Kelurahan/Desa
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Pendidikan Terakhir
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Pendidikan Terakhir
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Status Pernikahan
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Pilih Status
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Kepengurusan di NU?
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Banom, Lenbaga, dll
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-6 col-12 py-2">
        Jabatan Kepengursan
        <select
          class="form-select text-secondary"
          aria-label="Default select example"
        >
          <option selected disabled>
            Ketua, Sekertaris, dll
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-md-12 col-12 py-2">
        Apakah pernah belajar dan mengaji di Pondok Pesantren?*
        <div className=" form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            iya pernah
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            iya tidak
          </label>
        </div>
      </div> */}
      <button className="btn btn-primary mt-2">submit</button>
    </form>
  );
}
