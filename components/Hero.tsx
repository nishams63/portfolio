"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

const FloatingShape = dynamic(() => import("./three/FloatingShape"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const show3D = true;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">

      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-50">
        {mounted && typeof window !== "undefined" && show3D && (
          <Suspense fallback={null}>
            <FloatingShape />
          </Suspense>
        )}
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-30"
          style={{
            background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/4 left-[10%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #E8C97A 0%, transparent 70%)",
          }}
        />
      </div>

      {/* OVERLAY (IMPORTANT) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">

        {/* Role */}
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
          AI AUTOMATION SPECIALIST
        </p>

        {/* Headline */}
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-tight mb-6">
          I Build Systems That
          <br />
          <span className="text-yellow-500">
            Scale Your Revenue
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 max-w-xl mb-10">
          Helping e-commerce brands grow faster using AI automation and high-converting content systems.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Book a Call
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            See Work
          </a>
        </div>

      </div>
    </section>
  );
}