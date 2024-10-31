/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Comfortaa({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jasa Web Kita : Mulai digitalisasi Bisnismu Hari Ini!",
  description:
    "Buat bisnismu makin modern dan dilirik bersama jasa web kita! Ditangani oleh tim profesional mulai dari web developer, apps developer, graphic designer, dan video editor ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '248239781718151');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=248239781718151&ev=PageView& noscript=1`}
          />
        </noscript> */}
      </head>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
