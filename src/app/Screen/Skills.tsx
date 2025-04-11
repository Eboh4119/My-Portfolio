import { SkillsData } from "../config/data"
import Image from "next/image"

export default function Skill () {
    return(
        <div className="py-14">
            <h1 className="font-bold text-3xl py-4 text-white">Skills</h1>
            <div className="grid grid-cols-4 text-white gap-4 pt-4 max-sm:grid-cols-2">
                {SkillsData.map((skill, index)  => (
                    <div key={index} className="border-2 border-violet-700 py-2 px-5 rounded media items-center">
                        <Image 
                        src={skill.image}
                        alt="image"
                        width={60}
                        height={60}
                        />
                        <h3 className="font-semibold text-xl pt-2">{skill.tag}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}