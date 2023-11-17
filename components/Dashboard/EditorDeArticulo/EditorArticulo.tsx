"use client";
import React, { useState } from "react";
import ImageUploadPreview from "./ImageUploadPreview/ImageUploadPreview";
import styles from "./editorStyles.module.css";
import SectionCreator from "./SectionCreator/SectionCreator";
import Paragraph from "./Paragraph/Paragraph";
import { MdDeleteOutline } from "react-icons/md";

interface IParagraph {
  id: number;
  type: number;
  content: string;
  image: File | null;
}

interface IArticle {
  title: string;
  coverImage: File | null;
  description: string;
  paragraphs: IParagraph[];
}

export default function EditorArticulo() {
  const [paragraphs, setParagraphs] = useState<IParagraph[]>([]);
  const [nextId, setNextId] = useState(0);
  const [articleData, setArticleData] = useState<IArticle>({
    title: "",
    coverImage: null,
    description: "",
    paragraphs: [],
  });

  const maxParagraphs = 10;

  const addParagraph = (type: number) => {
    if (paragraphs.length < maxParagraphs) {
      const newParagraph: IParagraph = {
        id: nextId,
        type,
        image: null,
        content: "",
      };
      setParagraphs([...paragraphs, newParagraph]);

      setArticleData((prevArticleData) => ({
        ...prevArticleData,
        paragraphs: [...prevArticleData.paragraphs, newParagraph],
      }));

      setNextId(nextId + 1);
    } else {
      alert("Se ha alcanzado el límite máximo de párrafos.");
    }
  };

  const deleteParagraph = (id: number) => {
    const updatedParagraphs = paragraphs.filter(
      (paragraph) => paragraph.id !== id
    );

    setParagraphs(updatedParagraphs);

    setArticleData((prevArticleData) => ({
      ...prevArticleData,
      paragraphs: updatedParagraphs,
    }));
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(articleData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "title") {
      setArticleData((prevArticleData) => ({
        ...prevArticleData,
        title: value,
      }));
    } else if (id === "description") {
      setArticleData((prevArticleData) => ({
        ...prevArticleData,
        description: value,
      }));
    }
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number
  ) => {
    const updatedParagraphs = paragraphs.map((paragraph) => {
      if (paragraph.id === id) {
        return {
          ...paragraph,
          content: e.target.value,
        };
      }
      return paragraph;
    });

    setParagraphs(updatedParagraphs);

    setArticleData((prevArticleData) => ({
      ...prevArticleData,
      paragraphs: updatedParagraphs,
    }));
  };

  const handleImageChange = (file: File | null, id: number) => {
    // Verifica si el ID es el de la imagen de portada
    if (id === -1 && file) {
      setArticleData((prevArticleData) => ({
        ...prevArticleData,
        coverImage: file,
      }));
      return;
    }

    const updatedParagraphs = paragraphs.map((paragraph) => {
      if (paragraph.id === id) {
        return {
          ...paragraph,
          image: file,
        };
      }
      return paragraph;
    });

    setParagraphs(updatedParagraphs);

    setArticleData((prevArticleData) => ({
      ...prevArticleData,
      paragraphs: updatedParagraphs,
    }));
  };

  return (
    <div>
      <h2>Editor de articulos</h2>
      <div className="mt-3">
        <form className={styles.form}>
          <div>
            <label htmlFor="portada" className="form-label">
              Elige una imagen para la portada de tu articulo
            </label>
            <ImageUploadPreview
              id="portada"
              onImageChange={(file) => handleImageChange(file, -1)}
            />
          </div>

          <div className={`mt-3 ${styles.formGroup}`}>
            <label htmlFor="title" className="form-label">
              Escribe el titulo de tu articulo
            </label>
            <input
              autoComplete="false"
              type="text"
              id="title"
              maxLength={45}
              placeholder="Maximo 45 caracteres"
              onChange={handleChange}
            />
          </div>
          <div className={`mt-3 ${styles.formGroup}`}>
            <label htmlFor="description" className="form-label">
              Escribe una descripcion de tu articulo
            </label>
            <input
              autoComplete="false"
              type="text"
              id="description"
              maxLength={100}
              placeholder="Maximo 100 caracteres"
              onChange={handleChange}
            />
          </div>
          {paragraphs.map((paragraph) => (
            <div key={paragraph.id} className={styles.paragraphContainer}>
              <Paragraph
                type={paragraph.type}
                onChange={(e) => handleTextAreaChange(e, paragraph.id)}
                onImageChange={(file) => handleImageChange(file, paragraph.id)}
              />
              <button
                onClick={() => deleteParagraph(paragraph.id)}
                className={styles.deleteButton}
              >
                <MdDeleteOutline />
              </button>
            </div>
          ))}
          <SectionCreator onAddParagraph={addParagraph} />
          <div className={styles.container}>
            <button type="submit" className="p-3" onClick={handleSumbit}>
              Guardar articulo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
/* 
{
"title": "Nombre del articulo",
"description": "Descripcion del articulo",
"coverImage": La imagen cargada en el primer ImageUploadPreview,
"paragraphs": [
  {"id":1, "type": 1,"content": "Lo que hayan colocado en el textarea"},
  {"id":2, "type": 2, "content": "Lo que hayan colocado en el textarea", image: La imagen que hayn colocado en este parrafo},
  {"id":3, "type": 3,"content": "Lo que hayan colocado en el textarea", image: La imagen que hayn colocado en este parrafo } ]
}
*/
