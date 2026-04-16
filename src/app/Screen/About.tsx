import { MeData, AboutData } from "../config/data";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6 bg-stone-950 flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left Content - Text Section */}
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                About <span className="text-violet-400">Me</span>
              </h1>
              <div className="h-1 w-20 bg-violet-500 mt-4 rounded-full"></div>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-gray-300">
              <p className="dash-text">
                {AboutData}
              </p>
              <p className="dash-text media">
                {MeData}
              </p>
            </div>

            {/* Optional: Add a small highlight box */}
            <div className="inline-block bg-stone-900 border border-violet-700/50 rounded-2xl px-8 py-6 mt-6">
              <p className="text-violet-400 font-medium text-lg">
                Passionate about creating beautiful digital experiences
              </p>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl opacity-25"></div>

              {/* Image Container */}
              <div className="relative border-4 border-violet-500/30 bg-stone-900 p-4 rounded-full">
                <Image
                  src="/Eboh.jpg"
                  alt="Eboh Benjamin"
                  width={420}
                  height={420}
                  className="rounded-full object-cover shadow-2xl dashimage"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}