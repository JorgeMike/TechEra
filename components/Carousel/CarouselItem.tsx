import Image, { StaticImageData } from "next/image";
import styles from "./carouselStyles.module.css";

export interface CarouselItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  active?: boolean; // Esta prop es opcional
}

export default function CarouselItem({
  image,
  title,
  subtitle,
  active,
}: CarouselItemProps) {
  return (
    <div
      className={`carousel-item ${styles.imageContainer} ${
        active ? "active" : ""
      }`}
    >
      <Image src={image} className="d-block w-100" alt={title} />
      <div className={styles.gradientOverlay}></div>
      <div className={styles.carouselCaption}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
