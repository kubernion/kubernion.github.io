"use client";

import { useEffect, useState } from "react";
import { FaLinux, FaGithub, FaOsi, FaMailBulk } from "react-icons/fa";
import { SiProtonmail } from "react-icons/si";
import { 
  SiC, 
  SiCplusplus, 
  SiTypescript, 
  SiNextdotjs, 
  SiLaravel, 
  SiPython, 
  SiHtml5, 
  SiCss3 
} from "react-icons/si";

const TECH_ITEMS = [
  { icon: FaOsi, name: "Open Source" },
  { icon: FaLinux, name: "Linux" },
  { icon: SiC, name: "C" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiPython, name: "Python" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },

];

export default function Home() {
  const [techs, setTechs] = useState(TECH_ITEMS);
  const [mounted, setMounted] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

useEffect(() => {
    // 1. Debugging: Check what is actually in storage
    const visitLog = localStorage.getItem("kubernion_visit_log");
    console.log("Current visit log status:", visitLog);

    // 2. Set state based on storage
    if (visitLog === "true") {
      setIsReturning(true);
    }

    // 3. Listener for the privacy banner "Accept" click
    const handleSystemReady = () => {
      console.log("Privacy accepted - switching to Operational");
      setIsReturning(true);
    };

    window.addEventListener("kubernion-system-ready", handleSystemReady);
    
    // 4. Randomize icons
    setTechs([...TECH_ITEMS].sort(() => 0.5 - Math.random()));
    
    // 5. Mount the component
    setMounted(true);

    return () => {
      window.removeEventListener("kubernion-system-ready", handleSystemReady);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white selection:bg-blue-500 selection:text-white overflow-hidden font-sans">
      
      {/* Background: Dot Grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#112233_0.6px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      {/* Background: Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000000_100%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full space-y-16 px-6 animate-in fade-in zoom-in duration-700">
        
        {/* === HEADER SECTION === */}
        <div className="text-center space-y-8 flex flex-col items-center">
          
          {/* Brand Name */}
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-white via-slate-300 to-slate-600 drop-shadow-2xl">
            Kubernion
          </h1>

          {/* System Status - DYNAMIC */}
          <div className={`flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-widest px-4 py-1 rounded-full transition-all duration-500 ${isReturning 
            ? "text-green-400" // Returning User (Green)
            : "text-blue-400" // New User (Blue)
          }`}>
            
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isReturning ? "bg-green-400" : "bg-blue-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isReturning ? "bg-green-500" : "bg-blue-500"}`}></span>
            </span>
            
            {/* Logic to swap text */}
            {mounted ? (isReturning ? "System Operational" : "System Initialization") : "Connecting..."}
          </div>

          {/* Motto */}
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
            <span className="text-blue-200 font-normal">Coding Beyond Boundaries</span>
            <br />
            <span className="font-light tracking-widest text-xs">#reliabilityhasnothingtohide</span>
          </p>

          {/* === PREMIUM BUTTONS === */}
          <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
            
            {/* 1. Glass GitHub Button */}
            <a 
              href="https://github.com/kubernion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-black/1 backdrop-blur-sm border border-white/10 hover:bg-white/1 hover:border-white/20 transition-all duration-300 flex items-center gap-3 text-lg font-medium text-slate-200"
            >
              <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="font-light">GitHub</span>
            </a>

            {/* 2. Animated Gradient "Contact" Button */}
            {/* Wrapper for the moving border gradient */}
            <div className="group relative rounded-full p-px overflow-hidden">
              {/* The Spinning Gradient Background */}
              <div className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#3b82f6_50%,#000000_100%)] opacity-100" />
              
              {/* The Button Itself */}
              <a 
                href="mailto:kubernion+service@proton.me?subject=Service%20Request:%20[Insert Topic]" 
                className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl transition-all duration-300 gap-3"
              >
                <SiProtonmail className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="font-light bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-700 text-transparent bg-clip-text animate-gradient">
                  Contact Us
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* === INFINITE SLIDER SECTION === */}
        <div className="w-full">
          {/* Mask ensures icons fade out on left/right edges */}
          <div className="relative w-full max-w-4xl mx-auto mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            
            {/* Only render slider when mounted to prevent hydration mismatch on random shuffle */}
            {mounted && (
              <div className="animate-infinite-scroll flex gap-24 items-center">
                {/* Render the list TWICE. 
                   The CSS animation moves the list by -50% (exactly half).
                   Since the list is doubled, when it hits -50%, it looks exactly like the start (0%).
                   This creates the seamless loop.
                */}
                {[...techs, ...techs].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 group shrink-0">
                    <tech.icon className="text-5xl text-slate-700 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all duration-300" />
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 z-10 text-slate-700 text-[10px] font-mono tracking-wider">
        &copy; {new Date().getFullYear()} Kubernion. All systems operational.
      </div>
    </main>
  );
}