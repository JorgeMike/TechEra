"use client";
import Link from "next/link";
import styles from "./categoryStyles.module.css";
import { categoriesIcons } from "../CategoriesContent";
import { useState } from "react";
export default function SidebarLeft({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const [sortBy, setSortBy] = useState("fecha"); // Puedes tener 'fecha', 'likes', 'autor', 'titulo'

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <aside className={styles.sidebarLeft}>
      <h3>Filtros</h3>
      <div className={styles.dropdown}>
        <label htmlFor="sortFilter">Ordenar por:</label>
        <select id="sortFilter" value={sortBy} onChange={handleFilterChange}>
          <option value="fecha">Fecha</option>
          <option value="likes">Cantidad de Likes</option>
          <option value="autor">Autor</option>
          <option value="titulo">Título de la noticia</option>
        </select>
      </div>
      <div className={styles.dropdown}>
        <label htmlFor="orderFilter">Orden:</label>
        <select id="orderFilter" value={sortBy} onChange={handleFilterChange}>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>
      <fieldset className={styles.fieldset}>
        <legend>Categorías</legend>
        {[
          "Robotica",
          "Realida Virtual",
          "IA",
          "Computacion Cuantica",
          "Ciberseguridad",
          "Blockchain",
        ].map((categoria, index) => (
          <div key={index} className={styles.checkbox}>
            <input type="checkbox" id={`categoria${index}`} />
            <label htmlFor={`categoria${index}`}>{categoria}</label>
          </div>
        ))}
      </fieldset>
      <button className={styles.button}>Aplicar filtro</button>
    </aside>
  );
}
