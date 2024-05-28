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

      <section className="container py-5">
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
              type="number"
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
          <div className="row">
            <div className="col-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="col-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                  </label>
                </div>
              </div>
            </div>
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
            Nama panggilan
            <input
              type="text"
              placeholder="Nama panggilan"
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
            Nama panggilan
            <input
              type="text"
              placeholder="Nama panggilan"
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
            Nama panggilan
            <input
              type="text"
              placeholder="Nama panggilan"
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
            Nama panggilan
            <input
              type="text"
              placeholder="Nama panggilan"
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
            Nama panggilan
            <input
              type="text"
              placeholder="Nama panggilan"
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
        </div>
      </section>
    </MainLayout>
  );
}
