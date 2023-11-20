import Dashboard from "@/components/Layout/Dashboard";
import MisArticulos from "@/components/Dashboard/Publicador/MisArticulos/MisArticulos";
import { linksAdministrador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <MisArticulos user="administrador" />
    </Dashboard>
  );
}
