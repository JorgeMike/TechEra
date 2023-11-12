import styles from "./PageCategoriesStyles.module.css";
import { categories } from "../../../src/Arrays";

export default function PageCategories() {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((item, index) => (
        <div className={styles.category} key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
