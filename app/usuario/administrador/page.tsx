import Inicio from "@/components/Dashboard/Publicador/Inicio/Inicio";
import Dashboard from "@/components/Layout/Dashboard";
import { linksAdministrador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <Inicio user="administrador" />
    </Dashboard>
  );
}
