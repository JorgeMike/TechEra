import styles from "./categoriesSectionStyles.module.css";

export interface CardProps {
  image: string;
  text: string;
  ruta: string;
}

export default function CategoryCard(information: CardProps) {
  return (
    <div className={styles.categoryBox}>
      <img src={information.image} alt={information.text} />
      <a href="/categoria">{information.text}</a>
    </div>
  );
}
