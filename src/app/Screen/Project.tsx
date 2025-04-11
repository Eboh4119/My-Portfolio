import { ProjectData } from "../config/data"
import Image from "next/image"
import Link from "next/link"

export default function Project () {
    return(
        <div className="mt-20 py-15">
            <h1 className="font-bold text-3xl py-4 text-white">Projects</h1>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 text-white gap-4 pt-4">
                 {ProjectData.map((project, index) => (
                    <div key={index} className="border-2 border-violet-700 py-2 px-5 rounded media items-center">
                        <Image 
                        src={project.image}
                        alt="project"
                        width={400}
                        height={200}
                        /> 
                        <h3 className="font-semibold text-xl my-2">{project.tag}</h3>
                        <h3>{project.project}</h3>

                        <div className="flex gap-5 py-4">
                            <Link href={project.repo_link} className="hover:-translate-y-1.5 ease-in-out">
                                <Image 
                                src={project.git}
                                alt="git link"
                                width={50}
                                height={50}
                                className="bg-violet-700 py-2 px-2 rounded-full"
                                /> 
                            </Link>

                            <Link href={project.link} className="hover:-translate-y-1.5 ease-in-out">
                                <Image 
                                src={project.link_image}
                                alt="link"
                                width={50}
                                height={50}
                                className="bg-violet-700 py-2 px-2 rounded-full"
                                />
                            </Link>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    )
}