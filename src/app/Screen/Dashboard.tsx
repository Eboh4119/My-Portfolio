import { dashContent, SocialMedia } from "../config/data";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-stone-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Left Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-none dash-text text-white">
              Hi, <span className="inline-block">👋</span> It&apos;s{" "}
              <span className="text-violet-400">Benjamin</span>
            </h1>

            <h3 className="text-animation text-4xl lg:text-5xl font-semibold text-white mt-4 dash-text">
            <span className="text-violet-400"></span>
            </h3>
          </div>

          <p className="max-w-lg mx-auto lg:mx-0 text-lg lg:text-xl text-gray-300 leading-relaxed font-light dash-text">
            {dashContent}
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
            {SocialMedia.map((media, index) => (
              <Link
                key={index}
                href={media.link}
                target="_blank"
                className="group"
              >
                <div className="p-4 bg-violet-950 hover:bg-violet-600 border border-violet-700/30 hover:border-violet-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/20">
                  <Image
                    src={media.image}
                    alt={media.link || "social"}
                    width={52}
                    height={52}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>

            <div className="relative border-4 border-violet-500/40 rounded-full p-3 bg-stone-900">
              <Image
                src="/Eboh.jpg"
                alt="Eboh Benjamin"
                width={380}
                height={380}
                className="rounded-full object-cover dashimage shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}