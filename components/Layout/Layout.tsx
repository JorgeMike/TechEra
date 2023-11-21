import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Navbar />
      <div style={{minHeight: "70.8vh"}}>{children}</div>
      <Footer />
    </div>
  );
}
