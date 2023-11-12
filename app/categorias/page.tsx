import Layout from "@/components/Layout/Layout";
import PageCategories from "@/components/sections/PageCategories/PageCategories";
import React from "react";

export default function page() {
  return (
    <Layout>
      <div className="container">
        <PageCategories />
      </div>
    </Layout>
  );
}
