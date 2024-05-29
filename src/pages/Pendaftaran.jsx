import MainLayout from "../layout/MainLayout";
import anak from "../assets/anak.png";
export default function Pendaftaran() {
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
      {/* row wrapper  */}
      <section className="bg-secondary-subtle">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-6">
              {/* row content */}
              <div className="row ">
                <div className="col-6">
                  Nama lengkap dan gelar
                  <input
                    type="text"
                    placeholder="username"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  Nama panggilan
                  <input
                    type="text"
                    placeholder="Nama panggilan"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  NIK/Nomor KTP
                  <input
                    type="number "
                    placeholder="Nomor Induk Penduduk"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  Nomor telepon
                  <input
                    type="number "
                    placeholder="08XX-XXXX-XXXX-"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  Email Aktif
                  <input
                    type="text"
                    placeholder="Pastikan Email Anda Sudah benar"
                    className="form-control"
                  />
                </div>

                <div className="col-6">
                  Tempat Lahir
                  <input
                    type="text"
                    placeholder="Kota/Kabupaten"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  Tanggal Lahir
                  <input type="date" className="form-control" />
                </div>
                <div className="col-6 ">
                  Jenis Kelamin
                  <div className="input-group">
                    <div className="form-control gap-3 d-flex">
                      <input
                        type="radio"
                        id="laki-laki"
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
                        value="perempuan"
                        className="form-check-input"
                      />
                      <label htmlFor="perempuan" className="text-secondary">
                        perempuan
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  Pekerjaan
                  <input
                    type="text"
                    placeholder="Programmer, Dokter dll"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  Alamat Lengkap
                  <input
                    type="text"
                    placeholder="Nama Jalan, Gang, No. Rumah, RT dan RW"
                    className="form-control"
                  />
                </div>

                <div className="col-6">
                  Provinsi
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Pilih Provinsi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Kabupaten/Kota
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Pilih Kota/Kabupaten</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Kecamatan
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Pilih Kecamatan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Kelurahan/Desa
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Pilih Kelurahan/Desa</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Pendidikan Terakhir
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Pendidikan Terakhir</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Status Pernikahan
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Pilih Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Kepengurusan di NU?
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Banom, Lenbaga, dll</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  Jabatan Kepengursan
                  <select
                    class="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Ketua, Sekertaris, dll</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-12">
                  Apakah pernah belajar dan mengaji di Pondok Pesantren?*
                  <div className=" form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
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
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      iya tidak
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
