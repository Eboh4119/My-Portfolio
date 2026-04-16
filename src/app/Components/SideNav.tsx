"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Dashboard from "@/app/Screen/Dashboard";
import About from "../Screen/About";
import Skill from "../Screen/Skills";
import Project from "../Screen/Project";
import Contact from "../Screen/Contact";

interface MenuItem {
  id: number;
  name: string;
  image: string;
  content: React.JSX.Element;
}

function SideNav() {
  const [IsActive, setIsActive] = useState<MenuItem | null>(null);
  const [SelectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [menuItems] = useState<MenuItem[]>([
    { id: 1, name: "Home", image: "/home.svg", content: <Dashboard /> },
    { id: 2, name: "About", image: "/user.svg", content: <About /> },
    { id: 3, name: "Skill", image: "/skillshare.svg", content: <Skill /> },
    { id: 4, name: "Project", image: "/microsoft-project.svg", content: <Project /> },
    { id: 5, name: "Contact Me", image: "/phone.svg", content: <Contact /> },
  ]);

  useEffect(() => {
    if (menuItems.length > 0) {
      setSelectedMenu(menuItems[0]);
      setIsActive(menuItems[0]);
    }
  }, [menuItems]);

  const handleMenuClick = (menu: MenuItem) => {
    setSelectedMenu(menu);
    setIsActive(menu);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-stone-950">
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden fixed top-3 left-6 z-50 p-3 bg-stone-800 hover:bg-violet-600 rounded-2xl text-white shadow-lg transition-all"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-20 md:w-20 lg:w-64 bg-stone-900/95 backdrop-blur-xl border-r border-violet-700/30 
                    transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 transition-all duration-300 ease-in-out flex flex-col shadow-2xl`}
      >
        {/* Logo / Header Area */}
        <div className="h-20 flex items-center justify-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-9 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center px-5">
              <span className="text-white font-bold text-2xl">EB</span>
            </div>
            <span className="hidden lg:block text-white text-xl font-semibold tracking-tight">
              Eboh
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-10 px-3">
          <ul className="space-y-2">
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => handleMenuClick(menu)}
                  className={`group flex items-center gap-4 w-full py-4 px-5 rounded-2xl transition-all duration-300
                    ${IsActive?.id === menu.id 
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30" 
                      : "hover:bg-white/5 text-gray-300 hover:text-white"
                    }`}
                >
                  {/* Icon */}
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      height={24}
                      width={24}
                      className="transition-transform group-hover:scale-110"
                    />
                  </div>

                  {/* Text - Hidden on small screens, visible on lg */}
                  <span className="hidden lg:block font-medium text-base">
                    {menu.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-white/10 hidden lg:block">
          <div className="text-xs text-gray-500 text-center">
            © 2026 Eboh Benjamin
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:ml-20 lg:ml-64 transition-all duration-300">
        {SelectedMenu?.content}
      </main>
    </div>
  );
}

export default SideNav;