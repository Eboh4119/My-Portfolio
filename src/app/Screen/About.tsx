import { MeData, AboutData } from "../config/data"
import Image from "next/image"

export default function About () {
    return(
        <div className="py-16 text-white flex items-center justify-between px-6 max-sm:block">
            <div className="py-10">
                <h1 className="font-bold text-3xl py-2">About Me</h1>
                <p className="font-medium text-xl max-w-[700px] py-8 dash-text">{AboutData}</p>
                <p className="font-medium text-xl max-w-[700px] media">{MeData}</p>
            </div>

            <div className="border-2 border-violet-700 rounded-full">
                            <Image 
                            src={'/Eboh.jpg'}
                            alt="Eboh.png"
                            width={300}
                            height={200}
                            className="rounded-full w-[300px] h-[300px] object-fill dashimage max-sm:w-full"
                            /> 
                        </div>
        </div>
    )
}