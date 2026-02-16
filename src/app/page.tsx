"use client";
import { ArrowDownNarrowWide, Plane, Rocket } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;

      if (scrollTop + windowHeight >= docHeight - 80) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-xs max-sm:object-[20%] max-md:object-[20%] scale-110">
        <source src="https://res.cloudinary.com/dppsj6vxd/video/upload/v1771248003/video_20260216_184722_ykxefw.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
        <h1 className="font-semibold leading-tight text-7xl max-sm:text-4xl">
          Welcome to{" "}
          <TypeAnimation
            sequence={[500, "SkillTrack", 2000, ""]}
            speed={75}
            repeat={Infinity}
            className="font-bold bg-gradient-to-l from-blue-400 to-purple-600 bg-clip-text text-transparent underline decoration-purple-400 underline-offset-4"
          />
        </h1>

        <h3 className="text-3xl max-sm:text-2xl">
          Track your progress easily......
        </h3>

        {/* SCROLL DIV — only class changed */}
        <div
          className={`
            flex flex-col items-center mt-8 animate-bounce
            transition-opacity duration-300
            ${showScroll ? "opacity-100" : "opacity-0"}
          `}
        >
          <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent tracking-wide mb-2">
            SkillTrack Guide Below
          </p>
          <ArrowDownNarrowWide className="size-10 text-purple-400 opacity-80" />
        </div>
      </div>

      <div className="max-w-2xl bg-slate-900/70 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 text-white shadow-lg fade-in mx-auto">
        <h3 className="text-2xl font-semibold text-purple-300 mb-4 text-center">
          How to Use SkillTrack 👀 🌏
        </h3>
        <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
          <li>• Click <span className="text-purple-400 font-semibold">Add Skill</span> to create a new subject.</li>
          <li>• Enter the <span className="text-purple-400 font-semibold">Skill Name</span> you want to track.</li>
          <li>• Choose your <span className="text-purple-400 font-semibold">Progress %</span> (0 – 100).</li>
          <li>• You can <span className="text-blue-400 font-semibold">Edit</span> anytime to update progress.</li>
          <li>• Use the <span className="text-red-400 font-semibold">Delete</span> button to remove a skill.</li>
          <li>• Track your growth and improve daily 💡</li>
        </ul>
      </div>
    </main>
  );
}