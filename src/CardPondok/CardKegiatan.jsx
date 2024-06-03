import { Link } from "react-router-dom";

export default function CardKegiatan({
  image,
  judul,
  deskription,
  date,

  link,
}) {
  return (
    <div className="card w-100">
      <img src={image} className="card-img-top card-blog-img " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{judul}</h5>
        <p className="card-text">{deskription}</p>
        <Link to={link} className="btn btn-primary">
          lihat kegiatan
        </Link>
      </div>
      <div class="card-footer text-body-secondary">{date}</div>
    </div>
  );
}
