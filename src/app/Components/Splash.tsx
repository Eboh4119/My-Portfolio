"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SplashData } from '../config/data';


const Splash = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000); // Show splash screen for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${show ? 'fade-in' : 'fade-out'}`}>
      <div className='border-2 border-bgSplash rounded-[400px] h-[240px]'>
        <Image
            src={'/Eboh.jpg'}
            alt="Splash Image"
            width={300}
            height={300}
            className="welcome-image rounded-[500px] object-fill"
        />   
      </div>
        {SplashData.map((item, index) => (
            <ul key={index}>
                <li className='welcome-text text-[3rem] max-sm:text-[2rem] font-bold'>{item.tagOne}</li>
                <li className='sub-text font-semibold'>{item.tagTwo}</li>
                <li className='tagline font-medium'>{item.tagThree}</li>
                <li className='tagline'>{item.tagFour}</li>
            </ul>
        ))}
    </div>
  );
};

export default Splash;