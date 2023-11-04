import portadaUno from "../../public/images/postadaUno.jpeg";
import portadaDos from "../../public/images/PortadaDos.jpeg";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";

const carouselImages: CarouselItemProps[] = [
  {
    image: portadaUno,
    title: "Apple Watch Ultra 2.",
    subtitle:
      "Análisis: el Apple Watch que me compraría no es el Apple Watch que necesito.",
    active: true,
  },
  {
    image: portadaDos,
    title: "Apple Watch Ultra 2.",
    subtitle:
      "Análisis: el Apple Watch que me compraría no es el Apple Watch que necesito.",
  },
];

export default function Carousel() {
  return (
    <div className="container mt-4">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ overflow: "hidden", borderRadius: "20px" }}
      >
        <div className="carousel-inner">
          {carouselImages.map((item: CarouselItemProps, index) => (
            <CarouselItem
              image={item.image}
              active={item.active}
              title={item.title}
              subtitle={item.subtitle}
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
