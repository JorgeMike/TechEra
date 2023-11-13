import Link from "next/link";
import styles from "./loginstyles.module.css";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h2 className={righteous.className}>&lt;/&gt;TechEra</h2>
        <div className={styles.formContainer}>
          <form>
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
            <div className="mb-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <p>
        ¿No tienes cuenta? <Link href={"/registro"}>Registrate aqui</Link>
      </p>
    </div>
  );
}
/*     <div className={styles.loginContainer}>
      <h2>Iniciar Sesión</h2>
      <div className={styles.form}>
        <label htmlFor="username">Usuario</label>
        <input type="email" placeholder="Correo" id="username" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" placeholder="Contraseña" id="password" />
        <button type="submit">Entrar</button>
      </div>
      <p className={styles.registerPrompt}>
        ¿No tienes cuenta? <Link href={"/registro"}>Regístrate</Link>
      </p>
    </div> */
