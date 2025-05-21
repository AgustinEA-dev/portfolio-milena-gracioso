import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PlayItem({ cicle, title, writer, director, rol, year, imgs }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: (arrows) => (
      <div className="custom-arrows-wrapper">{arrows}</div>
    ),
  };

  return (
    <div style={styles.container}>
      {/* Columna izquierda: texto */}
      <div style={styles.info}>
        <h2 style={styles.title}>{title}</h2>
        {writer && (
          <p>
            <strong>Autor/a:</strong> {writer}
          </p>
        )}
        <p>
          <strong>Dirección:</strong> {director}
        </p>
        <p>
          <strong>Papel:</strong> {rol}
        </p>
        <p>
          <strong>Ciclo:</strong> {cicle}
        </p>
        <p>
          <strong>Año:</strong> {year}
        </p>
      </div>

      {/* Columna derecha: slider */}
      <div style={styles.slider}>
        <Slider {...settings}>
          {imgs.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`${title} ${i + 1}`} style={styles.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// Estilos en línea para simplicidad (puedes pasarlos a CSS luego)
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    padding: "40px 20px",
    backgroundColor: "#111",
    color: "white",
    borderBottom: "1px solid #2bffb8",
    justifyContent: "center",
  },
  info: {
    flex: "1",
    minWidth: "250px",
    maxWidth: "400px",
    fontFamily: "'Playfair Display', serif",
  },
  title: {
    fontSize: "28px",
    color: "#2bffb8",
    marginBottom: "10px",
  },
  slider: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "500px",
    heigth: "500px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
    maxHeight: "400px",
  },
};
