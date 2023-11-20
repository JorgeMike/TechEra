import Dashboard from "@/components/Layout/Dashboard";
import Grupos from "@/components/Dashboard/Administrador/Grupos";
import { linksAdministrador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <Grupos />
    </Dashboard>
  );
}
