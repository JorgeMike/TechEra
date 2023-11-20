import Dashboard from "@/components/Layout/Dashboard";
import Analiticas from "@/components/Dashboard/Publicador/Analiticas/Analiticas";
import { linksAdministrador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <Analiticas />
    </Dashboard>
  );
}
