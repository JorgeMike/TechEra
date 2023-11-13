import Link from "next/link";
import styles from "./loginstyles.module.css";
export default function Login() {
  return (
    <div className={styles.loginContainer}>
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
    </div>
  );
}
