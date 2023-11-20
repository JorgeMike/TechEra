import MisBorradores from "@/components/Dashboard/Publicador/MisBorradores/MisBorradores";
import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "../page";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <MisBorradores />
    </Dashboard>
  );
}
