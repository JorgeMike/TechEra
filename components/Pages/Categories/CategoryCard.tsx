import Link from "next/link";
import { Category } from "./CategoriesContent";
import styles from "./categoriesContent.module.css";
export default function CategoryCard({ item }: { item: Category }) {
  return (
    <Link href={`/categorias/${item.route}`} style={{ textDecoration: "none" }}>
      <div className={styles.category}>
        <div className={styles.icon}>{item.icon}</div>
        <div className={styles.content}>
          <h3>{item.name}</h3>
          {/* <p>{item.description}</p> */}
        </div>
      </div>
    </Link>
  );
}
