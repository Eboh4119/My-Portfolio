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
        }
      }, [menuItems]);
    
      const HandleMenuClick = (menu: React.SetStateAction<MenuItem | null>) => {
        setSelectedMenu(menu);
        setIsActive(menu);
      };
    

    return (
        <div className="flex max-sm:gap-16">
        <div className={`flex inset-0 mt-14 z-40 md:relative max-md:top-40 md:w-[200px]  md:h-full md:block`}>
          <div className="fixed h-full">
          <nav className="w-full h-full justify-center text-white1">
            <ul className="mt-6">
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <button
                    className={`${IsActive?.id === menu.id ? 'bg-violet-700 text-white rounded hover:scale-10' : "'bg-violet-950"} flex gap-2 items-center font-semibold py-2 px-2 ml-2 mb-10`}
                    onClick={() => HandleMenuClick(menu)}
                  >
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      height={20}
                      width={20}
                    />
                    <span className="hidden md:inline  text-white">{menu.name}</span>
                    </button> 
                    </li> 
                    ))} 
                </ul> 
            </nav> 
            </div>
          </div>

          <main className="flex-1 p-4 w-full h-full bg-slate-950">
              {SelectedMenu?.content}
          </main>
        </div>
    )
}

export default SideNav