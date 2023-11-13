import React from "react";
import styles from "../loginstyles.module.css";
import Link from "next/link";

export default function RegistroPublicador() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h2>Registro de publicador</h2>
        <div className={styles.formContainer}>
          <form>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Nombre(s):
              </label>
              <input type="text" className="form-control" id="usuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Apellido Paterno:
              </label>
              <input type="text" className="form-control" id="usuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Apellido Materno:
              </label>
              <input type="text" className="form-control" id="usuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Numero de cuenta a 9 digitos:
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
              <label htmlFor="usuario" className="form-label">
                Clave de grupo:
              </label>
              <input type="text" className="form-control" id="usuario" />
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
                <Link href={"/about"}>
                  términos y condiciones para publicador
                </Link>
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
    </div>
  );
}
