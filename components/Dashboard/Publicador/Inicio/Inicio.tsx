"use client";
import Image from "next/image";
import imagen from "@/public/images/articulos/articuloUno.jpg";

export default function Inicio({ user }: { user: string }) {
  return (
    <>
      <section className="service-section">
        <h2>Inicio</h2>
        <h2>
          {user == "administrador"
            ? "Articulos pendientes de revision"
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
      {user == "administrador" ? (
        <></>
      ) : (
        <section className="service-section">
          <h2>Mi borrador mas reciente</h2>
          <div className="tile-container">
            <article className="large-tile">
              <Image src={imagen} alt="imagen" className="tile-image" />
              <div className="tile-header">
                <i className="ph-lightning-light"></i>
                <h3>
                  <span>Electricity</span>
                  <span>UrkEnergo LTD.</span>
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
          <div className="service-section-footer">
            <p>Este es el borrador mas reciente que has editado</p>
          </div>
        </section>
      )}
    </>
  );
}
