import Image, { StaticImageData } from "next/image";
import styles from "./cardsStyles.module.css";
import Link from "next/link";

export interface CardProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  id: string;
}

export default function Card({ image, title, subtitle, id }: CardProps) {
  return (
    <div className={`col-12 col-md-4 ${styles.card}`}>
      <Link href={`articulo/${id}`}>
        <div className={styles.cardBody}>
          <div className={styles.cardImage}>
            <Image src={image} alt="Imagen" />
          </div>
          <div className={styles.cardCaption}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
