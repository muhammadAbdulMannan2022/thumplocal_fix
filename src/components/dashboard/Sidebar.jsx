import React from "react";
import { Link, useLocation } from "react-router";
import {
  Home,
  Globe,
  Image,
  List,
  Star,
  Megaphone,
  User,
  LogOut,
} from "lucide-react";

const SidebarItem = ({ to, Icon, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition 
        ${
          active
            ? "bg-[#8BB353] text-white shadow"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      <span
        className={`w-8 h-8 grid place-items-center rounded ${
          active ? "bg-white/10 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        <Icon className="w-4 h-4" />
      </span>
      {label}
    </Link>
  );
};

const Sidebar = () => {
  const links = [
    { to: "/dashboard/web-solution", label: "Web Solution", Icon: Globe },
    { to: "/dashboard/poster", label: "Poster", Icon: Image },
    { to: "/dashboard/listing", label: "Listing", Icon: List },
    { to: "/dashboard/reviews", label: "Reviews", Icon: Star },
    { to: "/dashboard/ads", label: "Ads Campaign", Icon: Megaphone },
    { to: "/dashboard/profile", label: "Profile", Icon: User },
    { to: "/logout", label: "Logout", Icon: LogOut },
  ];

  return (
    <aside className="w-[260px] shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-3">
      <div className="flex items-center gap-2 px-2 py-3"></div>
      <nav className="space-y-1">
        {links.map(({ to, label, Icon }) => (
          <SidebarItem key={label} to={to} label={label} Icon={Icon} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
