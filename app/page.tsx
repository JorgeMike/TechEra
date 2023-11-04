import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
}
