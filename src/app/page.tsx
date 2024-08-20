"use client";

import About from "@/components/landing/About";
import Marque from "@/components/landing/components/Marque";
import Hero from "@/components/landing/Hero";
import Section1 from "@/components/landing/Section1";
import Navbar from "@/components/layout/Navbar";
import { useSection } from "@/zustand/useNav";
import { useEffect } from "react";

export default function Home() {
  const { section } = useSection();

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
  }, [section]);
  return (
    <div>
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
    </div>
  );
}
