"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

const FloatingShape = dynamic(() => import("./three/FloatingShape"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // 🔥 CONTROL 3D HERE
  const show3D = true; // change to true when ready

  useEffect(() => {
    setMounted(true);
  }, []);

  const name = "Nisham";

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 md:left-[45%] opacity-50 md:opacity-100">
        {mounted && typeof window !== "undefined" && show3D && (
          <Suspense fallback={null}>
            <FloatingShape />
          </Suspense>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Intro */}
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-tight mb-6">
          <span className="text-yellow-500">N</span>
          {name.slice(1)}
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-300 max-w-xl mb-10">
          I help brands grow using{" "}
          <span className="text-yellow-400 font-semibold">
            AI automation
          </span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Work With Me
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
}