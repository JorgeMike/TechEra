import styles from "./sectionsStyles.module.css";
import imagen1 from "../../public/images/articulos/articuloUno.jpg";
import imagen2 from "../../public/images/articulos/articuloDos.jpg";
import imagen3 from "../../public/images/articulos/articuloTres.jpg";
import Card, { CardProps } from "../Cards/Card";
const noticiasTecnologicas: CardProps[] = [
  {
    image: imagen1,
    title: "Computación Cuántica: El Futuro es Ahora",
    subtitle:
      "Las empresas líderes anuncian avances significativos en qubits estables.",
    id: "4",
  },
  {
    image: imagen2,
    title: "La Nueva Generación de Smartphones Plegables",
    subtitle: "Fabricantes revelan diseños más duraderos y flexibles.",
    id: "5",
  },
  {
    image: imagen3,
    title: "Revolución en el Espacio: Internet por Satélite",
    subtitle:
      "La conexión global se aproxima con la próxima generación de satélites de internet.",
    id: "6",
  },
];

export default function Sections() {
  return (
    <section className="container mt-4">
      <h3 className={styles.sectionName}>Últimas noticias</h3>
      <div className="row">
        {noticiasTecnologicas.map((item, index) => (
          <Card
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            id={item.id}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
