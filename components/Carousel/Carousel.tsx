import portadaUno from "../../public/images/postadaUno.jpeg";
import portadaTres from "../../public/images/portadaTres.jpg";
import portadaCuatro from "../../public/images/portadaCuatro.jpg";
import portadaCinco from "../../public/images/portadaCinco.jpg";
import portadaSeis from "../../public/images/portadaSeis.jpg";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";

const carouselImages: CarouselItemProps[] = [
  {
    image: portadaUno,
    title: "Apple Watch Ultra 2.",
    subtitle:
      "Análisis: el Apple Watch que me compraría no es el Apple Watch que necesito.",
    active: true,
    id: "1",
  },
  {
    image: portadaTres,
    title: "Inteligencia Artificial Avanza",
    subtitle:
      "Nuevos algoritmos podrían permitir a las IA aprender idiomas con la fluidez de un humano.",
    id: "2",
  },
  {
    image: portadaCuatro,
    title: "Blockchain Más Allá de las Criptomonedas",
    subtitle:
      "Empresas exploran el uso de la tecnología blockchain para la seguridad en votaciones electrónicas.",
    id: "3",
  },
  {
    image: portadaSeis,
    title: "Realidad Virtual en Educación",
    subtitle:
      "Escuelas piloto incorporan la realidad virtual para mejorar la experiencia de aprendizaje en aulas.",
    id: "4",
  },
];

export default function Carousel() {
  return (
    <div className="container mt-3">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ overflow: "hidden", borderRadius: "20px" }}
      >
        <div className="carousel-inner">
          {carouselImages.map((item: CarouselItemProps, index) => (
            <CarouselItem
              key={index}
              image={item.image}
              active={item.active}
              title={item.title}
              subtitle={item.subtitle}
              id={item.id}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
