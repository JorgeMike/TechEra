"use client";
import { useEffect, useState } from "react";
import styles from "./categoryStyles.module.css";
import { Category, categoriesIcons } from "../CategoriesContent";
import { recenteNews } from "@/src/Arrays";
import ArticleCard from "./ArticleCard";

export default function CategoryContent({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const [categoryInfo, setCategoryInfo] = useState<Category>();

  useEffect(() => {
    setCategoryInfo(
      categoriesIcons.find((item) => item.route === currentCategory)
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{categoryInfo?.name}</h2>
        <p>{categoryInfo?.description}</p>
      </div>
      <div className={styles.articleContainer}>
        {recenteNews.map((item, index) => (
          <ArticleCard information={item} key={index} />
        ))}
      </div>
    </div>
  );
}
