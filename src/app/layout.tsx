import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Comfortaa({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jasa Kelola Sosial Media : Mulai Perjalanan Suksesmu Hari Ini!",
  description:
    "Buat bisnismu makin menarik dan dilirik bersama Alpha Project! Ditangani oleh tim profesional mulai dari fotografer, videograer, editor, graphic designer, dan content planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
