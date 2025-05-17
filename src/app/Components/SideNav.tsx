"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Dashboard from "@/app/Screen/Dashboard"
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [menuItems, setmenuItems] = useState<MenuItem[]>([
        {
          id: 1,
          name: 'Home',
          image: '/home.svg',
          content: <Dashboard />
        },
        {
            id: 2,
            name: 'About',
            image: '/user.svg',
            content: <About />
          },
          {
            id: 3,
            name: 'Skill',
            image: '/skillshare.svg',
            content: <Skill />
          },
          {
            id: 4,
            name: 'Project',
            image: '/microsoft-project.svg',
            content: <Project />
          },
          {
            id: 5,
            name: 'Contact Me',
            image: '/phone.svg',
            content: <Contact />
          },
        
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
    setIsSidebarOpen(false); // Close sidebar on menu item click in mobile view
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-purple2 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-stone-800 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 transition-transform duration-300 ease-in-out flex flex-col mx-auto `}
      >
        <div className="py-4 px-4">
        </div>
        <nav className="flex-1 text-white1">
          <ul className="py-8 px-4">
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <button
                  className={`flex gap-2 items-center w-full text-sm font-semibold py-4 px-3 mb-3 rounded ${
                    IsActive?.id === menu.id
                      ? "bg-purple-700 text-purple2"
                      : "hover:bg-purple-700"
                  }`}
                  onClick={() => handleMenuClick(menu)}
                >
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    height={20}
                    width={20}
                  />
                  <span>{menu.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 w-full">
        {SelectedMenu?.content}
      </main>
    </div>
  );
}


export default SideNav