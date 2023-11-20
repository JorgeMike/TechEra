import Inicio from "@/components/Dashboard/Publicador/Inicio/Inicio";
import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <Inicio user="publicador" />
    </Dashboard>
  );
}
