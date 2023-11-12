import { recenteNews } from "@/src/Arrays";
import styles from "./FeaturedArticlesSection.module.css";
export default function FeaturedArticlesSection() {
  return (
    <div className={styles.container}>
      <div className={styles.firstColumn}>
        {recenteNews.map((item, index) => (
          <div className={styles.article} key={index}>
            <div className={styles.articleImageContainer}>
              <img src={item.image.src} className={styles.articleImage} />
              <div className={styles.articleContent}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.secondColumn}>
        {recenteNews.map((item, index) => (
          <div className={styles.articleHorizontal} key={index}>
            <div className={styles.articleUpperSection}>
              <img
                src={item.image.src}
                alt="hola"
                className={styles.articleImageSmall}
              />
              <div className={styles.articleContentHorizontal}>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
            <div className={styles.cardCategories}>
              {item.categories.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
