// Registro.js
import React from "react";
import styles from "./registroStyles.module.css";
import Link from "next/link";

export default function Registro() {
  return (
    <div className={styles.registroContainer}>
      <h2>Registro</h2>
      <form
        className={styles.form}
        action="/tuEndpointDeRegistro"
        method="post"
      >
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre de usuario:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" required />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>
            Registrarse
          </button>
        </div>
      </form>
      <p className={styles.publisherText}>
        ¿Eres publicador?
        <Link href={"/registro/publicador"}>Regístrate aquí</Link>
      </p>
    </div>
  );
}
