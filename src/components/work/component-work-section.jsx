import { PlayItem } from "./component-play-item";
import { CustomLink } from "../custom-link/component-custom-link";

import "./styles-work-section.css";

export function WorkSection() {
  return (
    <section className="section-my-work">
      <h1>Mis trabajos</h1>
      <PlayItem
        cicle="Latente - Poiesis"
        title="La casa de Bernarda Alba"
        writer="Federico García Lorca"
        director="Macarena Argarañas"
        rol="Adela"
        year="2022"
        imgs={[
          "/assets/imgs/bernarda-alba-foto8.jpeg",
          "/assets/imgs/bernarda-alba-foto3.jpeg",
          "/assets/imgs/bernarda-alba-foto5.jpeg",
          "/assets/imgs/bernarda-alba-foto4.jpeg",
          "/assets/imgs/bernarda-alba-foto1.jpeg",
          "/assets/imgs/bernarda-alba-foto2.jpeg",
          "/assets/imgs/bernarda-alba-foto9.jpeg",
          "/assets/imgs/bernarda-alba-foto10.jpeg",
        ]}
      />
      <PlayItem
        cicle="Expresionista - Poiesis"
        title="Die Machine"
        writer="Christian Ferrer"
        director="Macarena Argarañas"
        rol="Trabajador de fábrica"
        year="2023"
        imgs={[
          "/assets/imgs/die-machine-foto5.jpg",
          "/assets/imgs/die-machine-foto1.jpeg",
          "/assets/imgs/die-machine-foto2.jpeg",
          "/assets/imgs/die-machine-foto3.jpeg",
          "/assets/imgs/die-machine-foto4.jpeg",
        ]}
      />
      <PlayItem
        cicle="Farsa - Poiesis"
        title="Se embarazan, plan, falopa"
        writer="Creación grupal a partir de la improvisación."
        director="Macarena Argarañaz"
        rol="Religiosa"
        year="2023"
        imgs={[
          "/assets/imgs/e-b-p-foto1.jpg",
          "/assets/imgs/e-b-p-foto3.jpg",
          "/assets/imgs/e-b-p-foto5.jpg",
          "/assets/imgs/e-b-p-foto6.jpg",
        ]}
      />
      <PlayItem
        cicle="Absurdo - Poiesis"
        title="Todos en algun momento seremos desconocidos"
        writer="Tato Pavlovsky"
        director="Macarena Argarañaz"
        rol="Ella"
        year="2024"
        imgs={[
          "/assets/imgs/todos-desconocidos-foto5.jpg",
          "/assets/imgs/todos-desconocidos-foto2.jpg",
          "/assets/imgs/todos-desconocidos-foto3.jpg",
          "/assets/imgs/todos-desconocidos-foto4.jpg",
        ]}
      />
      <PlayItem
        cicle="Melodrama - Poiesis"
        title="Pueblo chico infierno grande"
        writer="Creación grupal a partir de la improvisación."
        director="Macarena Argarañaz"
        rol="Vecina"
        year="2024"
        imgs={[
          "/assets/imgs/p-c-i-g-foto1.jpeg",
          "/assets/imgs/p-c-i-g-foto2.jpeg",
          "/assets/imgs/p-c-i-g-foto3.jpeg",
          "/assets/imgs/p-c-i-g-foto4.jpeg",
          "/assets/imgs/p-c-i-g-foto5.jpeg",
        ]}
      />
      <PlayItem
        cicle="Distanciamiento - Absurdo - Poiesis"
        title="Algo pasa en el agua"
        writer="Adaptación de Atando cabos de Griselda Gambaro"
        director="Macarena Argarañaz"
        rol="Elisa"
        year="2025"
        imgs={[
          "/assets/imgs/algo-pasa-agua-foto1.jpg",
          "/assets/imgs/algo-pasa-agua-foto2.jpg",
          "/assets/imgs/algo-pasa-agua-foto3.jpg",
          "/assets/imgs/algo-pasa-agua-foto4.jpg",
          "/assets/imgs/algo-pasa-agua-foto5.jpg",
          "/assets/imgs/algo-pasa-agua-foto6.jpg",
        ]}
      />
      {/* Podés repetir con más obras */}
      <div className="work-links-container">
        <CustomLink type="Home" route="/" variant="secondary" />
        <CustomLink type="Contacto" route="/contacto" variant="primary" />
      </div>
    </section>
  );
}
