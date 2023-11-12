import styles from "./categoriesSectionStyles.module.css";
import { popularCategories } from "../../../src/Arrays";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  return (
    <div>
      <h2 className="text-center mt-3">Categorias populares</h2>
      <section className={styles.categoriesSection}>
        {popularCategories.map((item, index) => (
          <CategoryCard
            key={index}
            image={item.imageUrl}
            text={item.text}
            ruta={item.link}
          />
        ))}
      </section>
    </div>
  );
}
