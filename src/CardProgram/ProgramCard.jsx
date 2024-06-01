export default function Card({ judul, deskripsi }) {
  return (
    <div className="bg-white p-3 mb-2 rounded-3 mb-4 h-100">
      <h5>{judul}</h5>
      <p>{deskripsi}</p>
    </div>
  );
}
