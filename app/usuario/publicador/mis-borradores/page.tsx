import MisBorradores from "@/components/Dashboard/Publicador/MisBorradores/MisBorradores";
import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <MisBorradores user="publicador" />
    </Dashboard>
  );
}
