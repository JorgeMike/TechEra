import Image, { StaticImageData } from "next/image";
import styles from "./RecentNewsSection.module.css";

export interface CardProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  id: string;
  categories: string[];
}

export default function RecentCard(information: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={information.image} alt="imagen" />
      </div>
      <div className={styles.cardContent}>
        <h3>{information.title}</h3>
        <p>{information.subtitle}</p>
      </div>
      <div className={styles.cardCategories}>
        {information.categories.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className={styles.cardFooter}>
        <a href="">Seguir leyendo</a>
        <a href="">Más parecidos</a>
      </div>
    </div>
  );
}
