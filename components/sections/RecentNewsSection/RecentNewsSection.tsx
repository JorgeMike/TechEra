import RecentCard, { CardProps } from "./RecentCard";
import styles from "./RecentNewsSection.module.css";
import { recenteNews } from "../../../src/Arrays";

export default function RecentNewsSection() {
  return (
    <div className={styles.recentsNews}>
      <h2>Noticias recientes</h2>
      <div className={styles.cardContainer}>
        {recenteNews.map((item: CardProps, index) => (
          <RecentCard
            id={item.id}
            image={item.image}
            subtitle={item.subtitle}
            title={item.title}
            categories={item.categories}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
