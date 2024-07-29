"use client";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";
import Scene from "./components/Scene";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="h-[50vh]"></div>
      <Projects />
      <div className="h-[50vh]"></div> */}
      <Scene />
    </main>
  );
}
