"use client";

import Marque from "@/components/landing/components/Marque";
import Ending from "@/components/landing/Ending";
import Pricing from "@/components/landing/Pricing";
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
    <div className="relative">
      <div id="home">
        <div className="z-40 sticky w-full">
          <Navbar />
        </div>
      </div>

      <div>{/* <Hero scrollPricing={scrollToSection} /> */}</div>
      <Marque />
      {/* <AboutAlpha /> */}
      <div id="pricing"></div>
      <Pricing />
      {/* 
      <About />
      <Section2 />
      <Section1 />
      
      <Media />
      <Services />
      <Client />
      <div id="porto"></div>
      <Portofolio />
      <Section3 />
      <div id="testi"></div>
      <Testimoni /> */}

      <Ending />
    </div>
  );
}
