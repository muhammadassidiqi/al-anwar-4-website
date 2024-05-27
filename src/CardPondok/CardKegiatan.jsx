export default function CardKegiatan({ image, judul, deskription, date }) {
  return (
    <div className="card w-100" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{judul}</h5>
        <p className="card-text">{deskription}</p>

        <a href="#" className="btn btn-primary">
          baca selanjutnya
        </a>
      </div>
      <div class="card-footer text-body-secondary">{date}</div>
    </div>
  );
}
