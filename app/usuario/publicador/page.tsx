import Inicio from "@/components/Dashboard/Publicador/Inicio/Inicio";
import Dashboard, { ILink } from "@/components/Layout/Dashboard";

export const linksPublicador: ILink[] = [
  { name: "Inicio", route: "" },
  { name: "Mis Articulos", route: "mis-articulos" },
  { name: "Mis Borradores", route: "mis-borradores" },
  { name: "Analiticas", route: "analiticas" },
  { name: "Crear Articulo", route: "crear-articulo" },
];

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <Inicio />
    </Dashboard>
  );
}
