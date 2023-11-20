import Image from "next/image";
import imagen from "@/public/images/articulos/articuloUno.jpg";

export default function MisArticulos({ user }: { user: string }) {
  return (
    <section className="service-section">
      <h2>
        {user == "administrador"
          ? "Todos los articulos"
          : "Mi articulo mas recientes"}
      </h2>
      <div className="tile-container">
        <article className="large-tile">
          <Image src={imagen} alt="imagen" className="tile-image" />
          <div className="tile-header">
            <i className="ph-lightning-light"></i>
            <h3>
              <span>Nombre del articulo</span>
              <span>Descripcion del articulo</span>
              <span>Fecha de publicacion: 15/Noviembre/2023</span>
            </h3>
          </div>
          <a href="#">
            <span>Ver articulo</span>
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
              <span>Fecha de publicacion: 15/Noviembre/2023</span>
            </h3>
          </div>
          <a href="#">
            <span>Ver articulo</span>
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
              <span>Fecha de publicacion: 15/Noviembre/2023</span>
            </h3>
          </div>
          <a href="#">
            <span>Ver articulo</span>
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
              <span>Fecha de publicacion: 15/Noviembre/2023</span>
            </h3>
          </div>
          <a href="#">
            <span>Ver articulo</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
      </div>
    </section>
  );
}
