import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Carousel/Carousel";
import RecentNewsSection from "@/components/sections/RecentNewsSection/RecentNewsSection";
import CategoriesSection from "@/components/sections/CategoriesSection/CategoriesSection";
import FeaturedArticlesSection from "@/components/sections/FeaturedArticlesSection/FeaturedArticlesSection";
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <RecentNewsSection />
      <CategoriesSection />
      <FeaturedArticlesSection />
    </Layout>
  );
}
