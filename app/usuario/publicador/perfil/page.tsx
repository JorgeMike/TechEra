import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "../page";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <div>Perfil</div>
    </Dashboard>
  );
}
