import React from "react";
import styles from "../loginstyles.module.css";
import Link from "next/link";

export default function Registro() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h2>Registro de usuario</h2>
        <div className={styles.formContainer}>
          <form>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Nombre de usuario:
              </label>
              <input type="text" className="form-control" id="usuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo:
              </label>
              <input type="email" className="form-control" id="correo" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña:
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Estoy de acuerdo con los{" "}
                <Link href={"/about"}>términos y condiciones</Link>
              </label>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
      <p>
        Eres un publicador?{" "}
        <Link href={"/registro/publicador"}>Registrate aqui</Link>
      </p>
    </div>
  );
}
