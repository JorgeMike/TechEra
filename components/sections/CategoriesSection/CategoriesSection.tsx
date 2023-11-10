import imagen from "../../../public/images/portadaCinco.jpg";
import styles from "./categoriesSectionStyles.module.css";
import { categories } from "../../../src/Arrays";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  return (
    <div>
      <h2 className="text-center mt-3">Categorias populares</h2>
      <section className={styles.categoriesSection}>
        {categories.map((item, index) => (
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
