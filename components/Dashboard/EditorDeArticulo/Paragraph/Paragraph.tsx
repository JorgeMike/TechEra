import ImageUploadPreview from "../ImageUploadPreview/ImageUploadPreview";
import styles from "../editorStyles.module.css";
import { KeyboardEvent } from "react";

interface ParagraphProps {
  type: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onImageChange: (file: File | null) => void;
}

export default function Paragraph({
  type,
  onChange,
  onImageChange,
}: ParagraphProps) {
  let content;
  const manejarKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  switch (type) {
    case 1:
      content = (
        <>
          <h3>Parrafo</h3>
          <textarea
            name="parrafo"
            id="textarea"
            placeholder="Escribe un parrafo de minimo 100 caracteres y maximo 200"
            onKeyDown={manejarKeyDown}
            onChange={(e) => onChange(e)}
          />
        </>
      );
      break;
    case 2:
      content = (
        <>
          <h3>Parrafo e Imagen</h3>
          <textarea
            name="parrafo"
            id="textarea"
            placeholder="Escribe un parrafo de minimo 100 caracteres y maximo 200"
            onChange={(e) => onChange(e)}
          />
          <ImageUploadPreview
            id={`image-upload-${type}`}
            onImageChange={onImageChange}
          />
        </>
      );
      break;
    case 3:
      content = (
        <>
          <h3>Imagen y Parrafo</h3>
          <ImageUploadPreview
            id={`image-upload-${type}`}
            onImageChange={onImageChange}
          />
          <textarea
            name="parrafo"
            id="textarea"
            placeholder="Escribe un parrafo de minimo 100 caracteres y maximo 200"
            onChange={(e) => onChange(e)}
          />
        </>
      );
      break;
    case 4:
      content = (
        <>
          <h3>solo Imagen</h3>
          <ImageUploadPreview
            id={`image-upload-${type}`}
            onImageChange={onImageChange}
          />
        </>
      );
      break;
    default:
      content = <div>Tipo no reconocido</div>;
  }

  return <div className={styles.content}>{content}</div>;
}
