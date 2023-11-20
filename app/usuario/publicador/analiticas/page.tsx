import Analiticas from "@/components/Dashboard/Publicador/Analiticas/Analiticas";
import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "../page";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <Analiticas />
    </Dashboard>
  );
}
