import Layout from "@/components/Layout/Layout";
import CategoriesContent from "@/components/Pages/Categories/CategoriesContent";

export default function page() {
  return (
    <Layout>
      <div className="container">
        <CategoriesContent />
      </div>
    </Layout>
  );
}
