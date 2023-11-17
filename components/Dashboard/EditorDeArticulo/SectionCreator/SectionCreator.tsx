import styles from "../editorStyles.module.css";
import { BsTextParagraph } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";

interface SectionCreatorProps {
  onAddParagraph: (type: number) => void;
}

export default function SectionCreator({
  onAddParagraph,
}: SectionCreatorProps) {
  return (
    <div className={styles.sectionCreator}>
      <div onClick={() => onAddParagraph(1)}>
        <span>Parrafo</span> <BsTextParagraph />
      </div>
      <div onClick={() => onAddParagraph(2)}>
        <span>Parrafo Imagen</span> <BsTextParagraph /> <AiOutlinePicture />
      </div>
      <div onClick={() => onAddParagraph(3)}>
        <span>Imagen Parrafo</span> <AiOutlinePicture /> <BsTextParagraph />
      </div>
      <div onClick={() => onAddParagraph(4)}>
        <span>Imagen</span> <AiOutlinePicture />
      </div>
    </div>
  );
}
