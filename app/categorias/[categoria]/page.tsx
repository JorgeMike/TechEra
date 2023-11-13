import Layout from "@/components/Layout/Layout";
import CategoryContent from "@/components/Pages/Categories/Category/CategoryContent";
import SidebarLeft from "@/components/Pages/Categories/Category/SidebarLeft";
import SidebarRight from "@/components/Pages/Categories/Category/SidebarRight";

export default function Page({ params }: { params: { categoria: string } }) {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <SidebarLeft currentCategory={params.categoria} />
        <CategoryContent currentCategory={params.categoria} />
        <SidebarRight currentCategory={params.categoria} />
      </div>
    </Layout>
  );
}
