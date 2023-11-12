import styles from "./footerStyles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} ${styles.about}`}>
          <h2>Techera</h2>
          <p>
            Somos una plataforma líder en información sobre tecnología y
            gadgets.
          </p>
        </div>
        <div className={`${styles.footerSection} ${styles.link}`}>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Últimas Innovaciones</a>
            </li>
            <li>
              <a href="#">Reseñas de Productos</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h2>Contactos</h2>
          <p>
            <i className="fas fa-phone"></i> +123 456 7890
          </p>
          <p>
            <i className="fas fa-envelope"></i> infoTechera@correo.com
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; techera.com | Diseñado por ARJM
      </div>
    </footer>
  );
}
