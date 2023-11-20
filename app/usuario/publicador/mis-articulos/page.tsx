import MisArticulos from "@/components/Dashboard/Publicador/MisArticulos/MisArticulos";
import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <MisArticulos user="publicador" />
    </Dashboard>
  );
}
