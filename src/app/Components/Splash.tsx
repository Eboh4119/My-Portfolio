"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SplashData } from '../config/data';

const Splash = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-stone-950 overflow-hidden
                     ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-1000`}>

      <div className="flex flex-col items-center text-center px-6 relative">

        {/* Profile Image with Glow Effect */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 rounded-full blur-3xl opacity-30 scale-110"></div>
          
          <div className="relative border-4 border-violet-500/50 rounded-full p-2">
            <div className="border-4 border-white/10 rounded-full overflow-hidden">
              <Image
                src="/Eboh.jpg"
                alt="Eboh Benjamin"
                width={180}
                height={180}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          {SplashData.map((item, index) => (
            <div key={index} className="space-y-3">
              <h1 className="welcome-text text-6xl md:text-7xl font-bold tracking-tighter text-white">
                {item.tagOne}
              </h1>
              
              <p className="sub-text text-2xl md:text-3xl font-semibold text-violet-400">
                {item.tagTwo}
              </p>

              <div className="pt-6 space-y-1">
                <p className="tagline text-lg md:text-xl text-gray-300 font-medium">
                  {item.tagThree}
                </p>
                <p className="tagline text-lg md:text-xl text-gray-400">
                  {item.tagFour}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        <div className="absolute bottom-16 flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mb-3"></div>
          <p className="text-xs text-gray-500 tracking-widest">LOADING PORTFOLIO...</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;