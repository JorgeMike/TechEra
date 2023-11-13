import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./categoryStyles.module.css";
import { RecentNew } from "@/src/Arrays";
import usuario from "../../../../public/images/usuario.png";
import Link from "next/link";

export default function ArticleCard({
  information,
}: {
  information: RecentNew;
}) {
  return (
    <article className={styles.article}>
      <div className={styles.imageContainer}>
        <Image src={information.image} alt="imagen" />
        <div className={styles.likeCounter}>
          <AiOutlineStar />
          <span>30</span>
        </div>
      </div>
      <div className={styles.articleContent}>
        <Link
          href={`/articulo/${information.id}`}
        >
          <h3>{information.title}</h3>
          <p>{information.subtitle}</p>
        </Link>
      </div>
      <div className={styles.categories}>
        {information.categories.map((item, index) => (
          <span className={styles.categoryPill} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.articleFooter}>
        <div className={styles.authorInfo}>
          <Image src={usuario} alt="usuario" />
          <p>Jorge Alvarado</p>
        </div>
        <p>10/10/2023</p>
      </div>
    </article>
  );
}
