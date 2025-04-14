import { dashContent, SocialMedia } from "../config/data"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard () {
    return (
        <div className="text-white py-8 my-12 flex  items-center justify-between px-6 max-sm:block">
            <div className="py-7">
                <h1 className="text-6xl font-semibold py-2 max-sm:text-3xl dash-text">Hi, <span>👋</span> It&apos;s <span className="text-violet-400">Benjamin</span></h1>
                <h3 className="text-animation py-2 dash-text">I&apos;m a <span></span></h3>
                <p className="max-w-[500px] py-2 font-medium text-xl leading-6 dash-text max-sm:text-[15px]"> 
                {dashContent} 
                </p>

                <div className="flex mt-6 items-center gap-6 media">
                    {SocialMedia.map((media, index) => (
                        <div key={index} className="hover:-translate-y-1.5 ease-in-out ">
                            <Link href={media.link}>
                                <Image 
                                src={media.image}
                                alt="image"
                                width={60}
                                height={60}
                                className=" py-2 px-2 bg-violet-500 rounded-full hover:bg-blue-800"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
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