"use client"

import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <>
            {/* Header Section */}
            <div className="flex justify-end px-6 py-4 items-center 
                           bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 
                           border-b border-violet-700/30 
                           backdrop-blur-md 
                           fixed w-full z-20 shadow-lg">
                
                <div className="flex items-center gap-4 tagleft">
                    <h1 className="text-white text-2xl font-bold">Portfolio</h1>
                    
                    <div className="border-2 border-violet-700 rounded-[300px]">
                        <Link href={'https://github.com/Eboh4119'}>
                            <Image
                                src={'github.svg'}
                                alt="git"
                                width={30}
                                height={30}
                                className="rounded-[250px] bg-violet-500"
                            />
                        </Link>
                    </div>

                    <div className="border-2 border-violet-700 rounded-[300px]">
                    <Image
                        src={'/Eboh.jpg'}
                        alt="Profile image"
                        width={30}
                        height={30}
                        className="rounded-[250px] "
                    />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header