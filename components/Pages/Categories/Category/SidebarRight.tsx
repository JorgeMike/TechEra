import Link from "next/link";
import { categoriesIcons } from "../CategoriesContent";
import styles from "./categoryStyles.module.css";
export default function SidebarRight({
  currentCategory,
}: {
  currentCategory: string;
}) {
  return (
    <aside className={styles.sidebarRight}>
      <h3>Categorias</h3>
      <nav>
        {categoriesIcons.map((item, index) => (
          <ul
            className={currentCategory === item.route ? styles.active : ""}
            key={index}
          >
            <Link href={item.route}>
              <span className={styles.icon}>{item.icon}</span>{" "}
              <span className={styles.name}>{item.name}</span>
            </Link>
          </ul>
        ))}
      </nav>
    </aside>
  );
}
