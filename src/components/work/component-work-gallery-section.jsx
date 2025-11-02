import { useParams } from "react-router-dom";
import { plays } from "../../data/plays";
import { CustomLink } from "../custom-link/component-custom-link";
import cloudImages from "../../data/cloudinary_images.json";

import "./styles-work-gallery-section.css";

export function WorkGallerySection() {
  const { id } = useParams();
  const obra = plays.find((o) => o.id.toString() === id);

  if (!obra) {
    return (
      <section className="work-gallery-section">
        <h1>Obra no encontrada</h1>
        <CustomLink type="Volver" route="/mis-trabajos" variant="secondary" />
      </section>
    );
  }

  return (
    <section className="work-gallery-section fade-in">
      <h1 className="gallery-title"> {obra.title} </h1>

      <div className="gallery-grid">
        {obra.imgs?.length > 0 ? (
          obra.imgs.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={cloudImages[img.replace(/^\//, "")] || img}
                alt={`${obra.title} ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <p>No hay imágenes disponibles.</p>
        )}
      </div>

      <div className="gallery-links">
        <CustomLink type="Volver" route="/mis-trabajos" variant="secondary" />
      </div>
    </section>
  );
}
