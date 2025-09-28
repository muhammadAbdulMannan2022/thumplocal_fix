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

const SidebarItem = ({ to, Icon, label, actives }) => {
  const { pathname } = useLocation();
  const active = actives.includes(pathname);
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition group relative
        ${
          active
            ? "bg-[#8BB353] text-white shadow"
            : "text-gray-700 hover:bg-gray-100"
        }
        lg:flex-row lg:justify-start justify-center flex-col lg:gap-3 gap-1`}
    >
      <span
        className={`w-8 h-8 grid place-items-center rounded ${
          active ? "bg-white/10 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        <Icon className="w-4 h-4" />
      </span>
      <span className="lg:block hidden">{label}</span>
      <span className="lg:hidden block text-xs leading-tight text-center">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const links = [
    {
      to: "/dashboard/web-solution/seo",
      label: "Web Solution",
      Icon: Globe,
      actives: [
        "/dashboard/web-solution/seo",
        "/dashboard/web-solution/seo/exWeb",
        "/dashboard/web-solution-sp",
        "/dashboard/web-builder",
      ],
    },
    {
      to: "/dashboard/poster",
      label: "Poster",
      Icon: Image,
      actives: ["/dashboard/poster"],
    },
    {
      to: "/dashboard/listing",
      label: "Listing",
      Icon: List,
      actives: [
        "/dashboard/listing",
        "/dashboard/listing/time",
        "/dashboard/listing/social",
      ],
    },
    {
      to: "/dashboard/reviews",
      label: "Reviews",
      Icon: Star,
      actives: ["/dashboard/reviews", "/dashboard/reviews/social"],
    },
    {
      to: "/dashboard/ads",
      label: "Ads Campaign",
      Icon: Megaphone,
      actives: ["/dashboard/ads"],
    },
    {
      to: "/dashboard/profile",
      label: "Profile",
      Icon: User,
      actives: ["/dashboard/profile"],
    },
    { to: "/logout", label: "Logout", Icon: LogOut, actives: ["/logout"] },
  ];

  return (
    <aside className="w-[80px] lg:w-[260px] shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-2 lg:p-3">
      <div className="hidden lg:flex items-center gap-2 px-2 py-3"></div>
      <nav className="space-y-1">
        {links.map(({ to, label, Icon, actives }) => (
          <SidebarItem
            key={label}
            to={to}
            label={label}
            Icon={Icon}
            actives={actives}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
