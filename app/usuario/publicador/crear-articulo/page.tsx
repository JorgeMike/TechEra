import EditorArticulo from "@/components/Dashboard/EditorDeArticulo/EditorArticulo";
import Dashboard from "@/components/Layout/Dashboard";
import { linksPublicador } from "../page";

export default function page() {
  return (
    <Dashboard links={linksPublicador} user="publicador">
      <EditorArticulo />
    </Dashboard>
  );
}
