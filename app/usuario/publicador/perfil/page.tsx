import Dashboard from "@/components/Layout/Dashboard";
import Profile from "@/components/Dashboard/Publicador/Perfil/Profile";
import { linksPublicador } from "@/src/Arrays";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <Profile />
    </Dashboard>
  );
}
