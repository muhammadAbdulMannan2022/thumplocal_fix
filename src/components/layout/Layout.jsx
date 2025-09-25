import React from "react";
import { ReactNode, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();
  const isDashboard = pathname.toLowerCase().startsWith("/dashboard");

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        {!isDashboard && <Navbar />}
        <main className="">{children}</main>
        {!isDashboard && <Footer />}
      </div>
    </div>
  );
}
