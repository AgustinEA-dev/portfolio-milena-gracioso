import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles-play-item.css";

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
    <div className="play-item-container">
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

      <div className="play-item-slider">
        <Slider {...settings}>
          {imgs.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`${title} ${i + 1}`}
                className="play-item-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
