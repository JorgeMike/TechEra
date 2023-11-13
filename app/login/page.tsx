import Layout from "@/components/Layout/Layout";
import Login from "@/components/Login/Login";

export default function page() {
  return (
    <Layout>
      <div className="container">
        <Login />
      </div>
    </Layout>
  );
}
