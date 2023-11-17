"use client";
import React, { useState } from "react";
import styles from "./imageUploader.module.css";

interface ImageUploadPreviewProps {
  id: string;
  onImageChange: (file: File | null) => void;
}

const ImageUploadPreview = ({ id, onImageChange }: ImageUploadPreviewProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);

  const validateAndSetImage = (file: File) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      if (img.width > img.height) {
        setImageSrc(url);
        setError("");
      } else {
        setError("La imagen debe ser más ancha que alta.");
        setImageSrc(null);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      validateAndSetImage(file);
      onImageChange(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetImage(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  return (
    <div
      className={styles.container}
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
    >
      <input
        type="file"
        accept=".jpg, .png"
        onChange={handleImageChange}
        className={styles.input}
        id={id}
      />
      {error && <p className={styles.error}>{error}</p>}
      {imageSrc && (
        <div className={styles.previewContainer}>
          <img src={imageSrc} alt="Vista previa" className={styles.preview} />
          {/* <input
            type="text"
            id={`fuente-${id}`}
            className={styles.input}
            placeholder="Fuente"
          /> */}
        </div>
      )}
    </div>
  );
};

export default ImageUploadPreview;
