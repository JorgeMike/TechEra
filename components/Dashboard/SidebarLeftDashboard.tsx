import Link from "next/link";

export default function SidebarLeftDashboard() {
  const route = "/usuario/publicador";
  return (
    <div className="app-body-navigation">
      <nav className="navigation">
        <Link href={`${route}`}>
          <i className="ph-browsers"></i>
          <span>Inicio</span>
        </Link>
        <Link href={`${route}/mis-articulos`}>
          <i className="ph-check-square"></i>
          <span>Mis Artículos</span>
        </Link>
        <Link href={`${route}/mis-borradores`}>
          <i className="ph-check-square"></i>
          <span>Mis Borradores</span>
        </Link>
        {/*         <Link href={`${route}/calendario`}>
          <i className="ph-swap"></i>
          <span>Calendario</span>
        </Link> */}
        <Link href={`${route}/analiticas`}>
          <i className="ph-file-text"></i>
          <span>Analíticas</span>
        </Link>
        <Link href={`${route}/crear-articulo`}>
          <i className="ph-file-text"></i>
          <span>Crear articulo</span>
        </Link>
        {/*        <a href="#">
          <i className="ph-globe"></i>
          <span>Configuración</span>
        </a>
         <a href="#">
          <i className="ph-clipboard-text"></i>
          <span>Exchange</span>
        </a> */}
      </nav>
      <footer className="footer">
        <h1>
          &lt;/&gt;TechEra<small>©</small>
        </h1>
        <div>
          TechEra ©<br />
          All Rights Reserved 2023
        </div>
      </footer>
    </div>
  );
}
