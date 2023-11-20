import Dashboard from "@/components/Layout/Dashboard";
import { linksAdministrador } from "../page";

export default function page() {
  return (
    <Dashboard links={linksAdministrador} user="administrador">
      <div>Articulos</div>
    </Dashboard>
  );
}
