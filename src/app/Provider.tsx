"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Provider({ children }: { children: ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <NextTopLoader
        color="#7FC7D9"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        zIndex={100000}
        showSpinner={true}
        easing="ease"
      />
      <Toaster />
      <div
        className={`${
          showNavbar ? "sticky top-0" : "absolute -top-28"
        }  z-[60] duration-300 bg-gradient-to-r drop-shadow-md from-brand-dark to-brand`}
      >
        <Navbar />
      </div>
      <div className="mb-10">{children}</div>
      <Footer />
    </div>
  );
}
