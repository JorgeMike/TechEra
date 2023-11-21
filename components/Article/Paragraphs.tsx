import Image from "next/image";
import styles from "./articleStyles.module.css";
import imagen from "@/public/images/postadaUno.jpeg";

export default function Paragraphs() {
  return (
    <div className={styles.paragraphs}>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. consectetur
          adipisc. Sed do eiusmod tempor incididunt ut labore Sed do eiusmod
          tempor incididunt ut labore Sed do eiusm
        </p>
      </div>
      <div className={styles.paragraphImage}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. consectetur
          adipisc. Sed do eiusmod tempor incididunt ut labore Sed do eiusmod
          tempor incididunt ut labore Sed do eiusm
        </p>
        <Image src={imagen} alt="imagen test" />
      </div>
      <div className={styles.imageParagraph}>
        <Image src={imagen} alt="imagen test" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. consectetur
          adipisc. Sed do eiusmod tempor incididunt ut labore Sed do eiusmod
          tempor incididunt ut labore Sed do eiusm
        </p>
      </div>
      <div className={styles.image}>
        <Image src={imagen} alt="imagen test" />
      </div>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. consectetur
          adipisc. Sed do eiusmod tempor incididunt ut labore Sed do eiusmod
          tempor incididunt ut labore Sed do eiusm
        </p>
      </div>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. consectetur
          adipisc. Sed do eiusmod tempor incididunt ut labore Sed do eiusmod
          tempor incididunt ut labore Sed do eiusm
        </p>
      </div>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. consectetur
          adipisc. Sed do eiusmod tempor incididunt ut labore Sed do eiusmod
          tempor incididunt ut labore Sed do eiusm
        </p>
      </div>
      <div className={styles.image}>
        <Image src={imagen} alt="imagen test" />
      </div>
    </div>
  );
}
