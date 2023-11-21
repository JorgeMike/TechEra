import Image from "next/image";
import styles from "./articleStyles.module.css";
import portada from "@/public/images/postadaUno.jpeg";

export default function ArticleCover() {
  return (
    <div className={styles.imageContainer}>
      <Image src={portada} alt="portada de noticia" />
      <div className={styles.gradientOverlay}></div>
      <div className={styles.carouselCaption}>
        <h3>Nombre del articulo</h3>
        <p>Subtitulo del articulo</p>
      </div>
    </div>
  );
}
