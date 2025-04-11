"use client"

import { useEffect, useState } from "react"
import Header from "./Components/Header"
import SideNav from "./Components/SideNav"
import Splash from "./Components/Splash"

function Page () {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 4000)
    }, []);

    return isReady ? 
    <div>
        <Header />
        <SideNav />
    </div> : <Splash /> 
}

export default Page