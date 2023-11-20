import Dashboard from "@/components/Layout/Dashboard";
import MisBorradores from "@/components/Dashboard/Publicador/MisBorradores/MisBorradores";
import { linksAdministrador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <MisBorradores user="administrador"/>
    </Dashboard>
  );
}
