import React from "react";
import styles from "./registroStyles.module.css";

export default function RegistroPublicador() {
  return (
    <div className={styles.registroContainer}>
      <h2>Registro de publicador</h2>
      <form
        className={styles.form}
        action="/tuEndpointDeRegistro"
        method="post"
      >
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre(s):</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            required
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="numeroCuenta">Numero de cuenta:</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            placeholder="Cuenta a 9 digitos"
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Institucionale de preferencia"
            required
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="claveGrupo">Clave de grupo:</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            required
            autoComplete="false"
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
