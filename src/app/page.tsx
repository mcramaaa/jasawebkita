"use client";

import About from "@/components/landing/About";
import Marque from "@/components/landing/components/Marque";
import Ending from "@/components/landing/Ending";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Section3 from "@/components/landing/Section3";
import Testimoni from "@/components/landing/Testimoni";
import Navbar from "@/components/layout/Navbar";
import { useSection } from "@/zustand/useNav";
import { useEffect } from "react";

export default function Home() {
  const { section } = useSection();

  console.log(section);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToSection(section);
    console.log("h");
  }, [section]);
  return (
    <div className="relative">
      <div
        id="home"
        className="bg-gradient-to-br from-brand-dark to-brand start-0"
      >
        <Navbar />
        <Hero />
      </div>
      <Marque />
      <About />
      <Section1 />
      <Section2 />
      <div id="pricing"></div>
      <Pricing />
      <Section3 />

      <div id="testi"></div>
      <Testimoni />
      <Ending />
    </div>
  );
}
