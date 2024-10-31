"use client";

import About from "@/components/landing/About";
import AboutAlpha from "@/components/landing/AboutAlpha";
import Client from "@/components/landing/Client";
import Marque from "@/components/landing/components/Marque";
import Media from "@/components/landing/components/Media";
import Ending from "@/components/landing/Ending";
import Hero from "@/components/landing/Hero";
import Portofolio from "@/components/landing/Portofolio";
import Pricing from "@/components/landing/Pricing";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Section3 from "@/components/landing/Section3";
import Services from "@/components/landing/Services";
import Testimoni from "@/components/landing/Testimoni";
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

      <div>
        <Hero scrollPricing={scrollToSection} />
      </div>
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
