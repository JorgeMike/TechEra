import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Carousel/Carousel";
import RecentNewsSection from "@/components/sections/RecentNewsSection/RecentNewsSection";
import CategoriesSection from "@/components/sections/CategoriesSection/CategoriesSection";
import FeaturedArticlesSection from "@/components/sections/FeaturedArticlesSection/FeaturedArticlesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <RecentNewsSection />
      <CategoriesSection />
      <FeaturedArticlesSection />
    </>
  );
}
