import { Link } from "react-router-dom";
import "./styles-play-item.css";

export function PlayItem({
  id,
  cicle,
  title,
  writer,
  director,
  rol,
  year,
  imgs,
  modo = "preview",
}) {
  const imgsToShow =
    modo === "preview"
      ? imgs.slice(0, 1)
      : imgs.length > 1
      ? imgs.slice(1)
      : imgs;

  return (
    <div className={`play-item-container ${modo}`}>
      <div className="play-item-info">
        <h2 className="play-item-title">{title}</h2>
        {writer && (
          <p>
            <strong>Autor/a:</strong> {writer}
          </p>
        )}
        <p>
          <strong>Dirección:</strong> {director}
        </p>
        <p>
          <strong>Personaje:</strong> {rol}
        </p>
        <p>
          <strong>Ciclo:</strong> {cicle}
        </p>
        <p>
          <strong>Año:</strong> {year}
        </p>
      </div>

      {modo === "preview" ? (
        <img src={imgsToShow[0]} alt={title} className="play-item-image" />
      ) : (
        <div className="play-item-gallery">
          {imgsToShow.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img} alt={`${title} ${i + 1}`} />
            </div>
          ))}
        </div>
      )}

      {modo === "preview" && (
        <Link to={`/obra/${id}`} className="play-item-link">
          Ver todas las fotos
        </Link>
      )}
    </div>
  );
}
