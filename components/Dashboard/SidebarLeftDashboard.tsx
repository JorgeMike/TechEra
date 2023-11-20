import Link from "next/link";
import { ILink } from "../Layout/Dashboard";

interface ISidebarLeftDashboard {
  links: ILink[];
  user: string;
}

export default function SidebarLeftDashboard({
  links,
  user,
}: ISidebarLeftDashboard) {
  const route = `/usuario/${user}`;
  return (
    <div className="app-body-navigation">
      <nav className="navigation">
        {links.map((item, index) => (
          <Link href={`${route}/${item.route}`} key={index}>
            <i className="ph-browsers"></i>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <footer className="footer">
        <h1>
          &lt;/&gt;TechEra<small>©</small>
        </h1>
        <div>
          TechEra ©<br />
          All Rights Reserved 2023
        </div>
      </footer>
    </div>
  );
}
