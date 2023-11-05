"use client";
import Link from "next/link";
import styles from "./navbarStyles.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { GoSun } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { Righteous } from "next/font/google";
import { useState } from "react";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href={"/"} className={righteous.className}>
          TechEra
        </Link>
      </div>
      <div
        className={`${styles.navbarItems} ${
          isMenuOpen ? styles.navbarItemsActive : ""
        }`}
      >
        <SearchBar />
        <Link href={"/"}>Categorias</Link>
        <Link href={"/"}>Acerca de</Link>
        <Link href={"/"}>Log in</Link>
        <GoSun />
      </div>
      <button className={styles.navbarToggle} onClick={toggleMenu}>
        <AiOutlineMenu />
      </button>
    </nav>
  );
}
