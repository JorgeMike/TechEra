import Link from "next/link";
import styles from "./navbarStyles.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { BsSun } from "react-icons/bs";
import { Righteous } from "next/font/google";

const righteous = Righteous({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href={"/"} className={righteous.className}>TechEra</Link>
      </div>
      <div className={styles.navbarItems}>
        <Link href={"/"}>Categorias</Link>
        <SearchBar />
        <BsSun />
        <Link href={"/"}>Acerca de</Link>
        <Link href={"/"}>Log in</Link>
      </div>
    </nav>
  );
}
