import CarouselItem, { CarouselItemProps } from "./CarouselItem";
import { carouselImages } from "../../src/Arrays";

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
