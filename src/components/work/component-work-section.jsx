import { PlayItem } from "./component-play-item";

import "./styles-work-section.css";

export function WorkSection() {
  return (
    <section className="section-my-work">
      <h1>Mis trabajos</h1>
      <PlayItem
        ciclo="Latente - Poiesis"
        title="La casa de Bernarda Alba"
        writer="Federico García Lorca"
        director="Lola López"
        rol="Adela"
        year="2022"
        imgs={[
          "/assets/imgs/bernarda-alba-foto3.jpeg",
          "/assets/imgs/bernarda-alba-foto4.jpeg",
          "/assets/imgs/bernarda-alba-foto8.jpeg",
          "/assets/imgs/bernarda-alba-foto6.jpeg",
          "/assets/imgs/bernarda-alba-foto10.jpeg",
        ]}
      />
      <PlayItem
        ciclo="Expresionista - Poiesis"
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
        ciclo="Farsa - Poiesis"
        title="Se embarazan, plan, falopa"
        writer="Obra creada por alumnos"
        director="Macarena Argarañaz"
        rol="Aleatorio"
        year="2023"
        imgs={[
          "/assets/imgs/e-b-p-foto6.jpeg",
          "/assets/imgs/e-b-p-foto1.jpeg",
          "/assets/imgs/e-b-p-foto2.jpeg",
          "/assets/imgs/e-b-p-foto3.jpeg",
          "/assets/imgs/e-b-p-foto4.jpeg",
          "/assets/imgs/e-b-p-foto5.jpeg",
        ]}
      />
      <PlayItem
        ciclo="Absurdo - Poiesis"
        title="Todos en algun momento seremos desconocidos"
        writer="Tato Pavlovsky"
        director="Macarena Argarañaz"
        rol="Ella"
        year="2024"
        imgs={[
          "/assets/imgs/todos-desconocidos-foto1.jpeg",
          "/assets/imgs/todos-desconocidos-foto2.jpeg",
          "/assets/imgs/todos-desconocidos-foto3.jpeg",
          "/assets/imgs/todos-desconocidos-foto4.jpeg",
          "/assets/imgs/todos-desconocidos-foto5.jpeg",
        ]}
      />
      <PlayItem
        ciclo="Melodrama - Poiesis"
        title="Pueblo chico infierno grande"
        writer="Obra creada por alumnos"
        director="Lola López"
        rol="Aleatorio"
        year="2024"
        imgs={[
          "/assets/imgs/p-c-i-g-foto1.jpeg",
          "/assets/imgs/p-c-i-g-foto2.jpeg",
          "/assets/imgs/p-c-i-g-foto3.jpeg",
          "/assets/imgs/p-c-i-g-foto4.jpeg",
          "/assets/imgs/p-c-i-g-foto5.jpeg",
        ]}
      />
      {/* Podés repetir con más obras */}
    </section>
  );
}
