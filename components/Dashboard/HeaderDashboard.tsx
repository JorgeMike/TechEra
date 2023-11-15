"use client";
import { useRouter } from "next/navigation";
import { Righteous } from "next/font/google";
import Link from "next/link";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderDashboard() {
  const router = useRouter();
  const handleRouter = () => {
    router.push("perfil");
  };
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <div className="logo">
          <h1 className="logo-title">
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <span className={righteous.className}>&lt;/&gt;TechEra</span>
            </Link>
          </h1>
        </div>
      </div>
      {/*       <div className="app-header-navigation">
        <div className="tabs">
          <a href="#">Overview</a>
          <a href="#" className="active">
            Payments
          </a>
          <a href="#">Cards</a>
          <a href="#">Account</a>
          <a href="#">System</a>
          <a href="#">Business</a>
        </div>
      </div> */}
      <div className="app-header-actions">
        <button className="user-profile" onClick={handleRouter}>
          <span>Matheo Peterson</span>
          <span>
            <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
          </span>
        </button>
        {/*         <div className="app-header-actions-buttons">
          <button className="icon-button large">
            <i className="ph-magnifying-glass"></i>
          </button>
          <button className="icon-button large">
            <i className="ph-bell"></i>
          </button>
        </div> */}
      </div>
      {/*       <div className="app-header-mobile">
        <button className="icon-button large">
          <i className="ph-list"></i>
        </button>
      </div> */}
    </header>
  );
}
