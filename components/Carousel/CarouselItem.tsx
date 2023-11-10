"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./carouselStyles.module.css";
import Link from "next/link";

export interface CarouselItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  id: string;
  active?: boolean; // Esta prop es opcional
}

export default function CarouselItem({
  image,
  title,
  subtitle,
  active,
  id,
}: CarouselItemProps) {
  return (
    <div
      className={`carousel-item ${styles.imageContainer} ${
        active ? "active" : ""
      }`}
    >
      <Link href={`/articulo/${id}`}>
        <Image src={image} className="d-block w-100" alt={title} />
        <div className={styles.gradientOverlay}></div>
        <div className={styles.carouselCaption}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
}
