import React, { useState, useEffect } from "react";
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
  ArrowRight,
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
        flex-row justify-start gap-3 `}
    >
      <span
        className={`w-8 h-8 grid place-items-center rounded ${
          active ? "bg-white/10 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        <Icon className="w-4 h-4" />
      </span>
      <span className="block">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Add/remove body class for sidebar state
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
    return () => {
      document.body.classList.remove("sidebar-open"); // Cleanup on unmount
    };
  }, [isOpen]);

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
    <>
      {/* Sidebar */}
      <aside
        className={` fixed md:static h-full md:h-[90vh] w-[260px] shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-2 md:p-3 transition-transform duration-300 ease-in-out z-[9999]
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="hidden md:flex items-center gap-2 px-2 py-3"></div>
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
          {/* Toggle Button for Small Screens */}
          <button
            className="md:hidden z-[10000] px-2 bg-[#8BB353] text-white rounded-md h-10 absolute -right-5 top-4"
            onClick={toggleSidebar}
          >
            <ArrowRight
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              size={24}
            />
          </button>
        </nav>
      </aside>

      {/* Overlay for Small Screens */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[9998]"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
