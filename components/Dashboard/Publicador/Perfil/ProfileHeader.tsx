import Image from "next/image";
import styles from "./profileStyles.module.css";
import usuario from "@/public/images/usuario.png";

export default function ProfileHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.photo}>
        <Image src={usuario} alt="photo user" />
      </div>
      <div className={styles.firstData}>
        <p>Nombre de autor:</p>
        <h3>Jorge Alvarado</h3>
      </div>
      <div className={styles.groupInfo}>
        <p>Grupo:</p>
        <h3>1503</h3>
      </div>
    </div>
  );
}
