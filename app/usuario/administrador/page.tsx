import Dashboard, { ILink } from "@/components/Layout/Dashboard";

export const linksAdministrador: ILink[] = [
  { name: "Inicio", route: "" },
  { name: "Artículos", route: "articulos" },
  { name: "Pendientes", route: "pendientes" },
  { name: "Grupos", route: "grupos" },
  { name: "Analíticas", route: "analiticas" },
  /* { name: "Crear Artículo", route: "crear-articulo" }, */
];

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <div>Administrador</div>
    </Dashboard>
  );
}
