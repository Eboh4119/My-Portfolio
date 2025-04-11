"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Header() {
    const [Sidebar, setIsSidebar] = useState(false)
    return (
        <>
            {/* Header Section */}
            <div className="flex justify-end px-6 py-4 items-center bg-slate-900 fixed w-[100%] z-20">
                <div className="flex items-center gap-4 tagleft">
                    <h1 className="text-white text-2xl font-bold">Portfolio</h1>
                    
                    <div className="border-2 border-violet-700 rounded-[300px]">
                        <Link href={'git/.com'}>
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