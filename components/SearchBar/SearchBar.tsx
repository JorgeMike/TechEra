import { GoSearch } from "react-icons/go";
import styles from "../Navbar/navbarStyles.module.css";
export default function SearchBar() {
  return (
    <div className={styles.navbarSearchBar}>
      <GoSearch />
      <input placeholder="Buscar" />
    </div>
  );
}
