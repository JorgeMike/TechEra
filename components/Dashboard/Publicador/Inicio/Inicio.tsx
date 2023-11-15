import Image from "next/image";
import imagen from "@/public/images/articulos/articuloUno.jpg";

export default function Inicio() {
  return (
    <>
      <section className="service-section">
        <h2>Inicio</h2>
        <h2>Mi articulo mas recientes</h2>
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
        <div className="service-section-footer">
          <p>Este es tu articulo mas reciente</p>
        </div>
      </section>
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
      <section className="service-section">
        <h2>Notificaciones importantes</h2>
        <div className="tiles">
          <article className="tile">
            <div className="tile-header">
              <i className="ph-lightning-light"></i>
              <h3>
                <span>Examen Unidad 2</span>
                <span>
                  Estimados alumnos les recurdo que el viernes 17 de noviembre
                  presentaran su examen de la segunda unidad{" "}
                </span>
              </h3>
            </div>
            {/*             <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a> */}
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-fire-simple-light"></i>
              <h3>
                <span>Aviso de clase</span>
                <span>El lunes 20 de noviembre se supende la clase</span>
              </h3>
            </div>
            {/*             <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a> */}
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-file-light"></i>
              <h3>
                <span>Evento</span>
                <span>
                  El dia 24 de noviembre haba un evento en la sala de
                  conferencias
                </span>
              </h3>
            </div>
            {/*             <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a> */}
          </article>
        </div>
        <div className="service-section-footer">
          <p>
            Mantente al pendiente de esta seccion pues te avisara de fechas
            imortantes
          </p>
        </div>
      </section>
    </>
  );
}
