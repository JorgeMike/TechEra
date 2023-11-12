import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{backgroundColor: "#f4f4f4"}}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
