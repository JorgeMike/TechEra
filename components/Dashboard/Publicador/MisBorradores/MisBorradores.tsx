import Image from "next/image";
import imagen from "@/public/images/articulos/articuloUno.jpg";

export default function MisBorradores() {
  return (
    <section className="service-section">
      <h2>Borradores</h2>
      <div className="tile-container">
        <article className="large-tile">
          <Image src={imagen} alt="imagen" className="tile-image" />
          <div className="tile-header">
            <i className="ph-lightning-light"></i>
            <h3>
              <span>Nombre del articulo</span>
              <span>Descripcion del articulo</span>
              <span>Estado: Borrador sin enviar</span>
            </h3>
          </div>
          <a href="#">
            <span>Seguir editando</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article className="large-tile">
          <Image src={imagen} alt="imagen" className="tile-image" />
          <div className="tile-header">
            <i className="ph-lightning-light"></i>
            <h3>
              <span>Nombre del articulo</span>
              <span>Descripcion del articulo</span>
              <span>Estado: Enviado a revision</span>
            </h3>
          </div>
          {/*           <a href="#">
            <span>Seguir editando</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a> */}
        </article>
        <article className="large-tile">
          <Image src={imagen} alt="imagen" className="tile-image" />
          <div className="tile-header">
            <i className="ph-lightning-light"></i>
            <h3>
              <span>Nombre del articulo</span>
              <span>Descripcion del articulo</span>
              <span>Estado: Con retroalimentacion</span>
            </h3>
          </div>
          <a href="#">
            <span>Seguir editando</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
      </div>
    </section>
  );
}
