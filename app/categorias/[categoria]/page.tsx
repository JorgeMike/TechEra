import Layout from "@/components/Layout/Layout";
import React from "react";

export default function page({ params }: { params: { categoria: string } }) {
  return <Layout>page: {params.categoria}</Layout>;
}
