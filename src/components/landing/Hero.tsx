import Lottie from "lottie-react";
import React from "react";
import webLottie from "@/assets/lottie/webLottie.json";

interface IProps {
  scrollPricing: (e: string) => void;
}

export default function Hero(props: IProps) {
  const { scrollPricing } = props;
  // const { section, setSection } = useSection();
  // console.log(section);
  return (
    <>
      <div className="relative p-3 md:pt-10 md:px-5">
        <div className="lg:h-[75vh] overflow-hidden mt-16 md:mt-7 h-[75vh] rounded-xl  relative">
          {/* <video
            autoPlay
            loop
            // playsInline
            muted
            className="object-cover w-full h-full absolute pointer-events-none "
            src={`https://videos.pexels.com/video-files/29607597/12742138_1920_1080_30fps.mp4`}
          ></video> */}

          <div className="absolute w-full grid lg:grid-cols-2 h-full items-center justify-center bg-gradient-to-b from-brand-core2/50 to-brand-core2/60">
            <div className="flex justify-center hover:rotate-3 duration-300 hover:animate-pulse">
              <div className="relative md:w-2/3 h-fit z-10">
                {/* <Image alt="" fill src={"/assets/hero.png"} /> */}
                <Lottie animationData={webLottie} className="ml-10 " />
              </div>
            </div>
            <div className="lg:order-first h-full grid place-items-center">
              <div className="flex flex-col gap-2 justify-between items-center">
                <div className="text-white items-center text-center text-3xl lg:gap-8 lg:text-[3.75rem] hover:scale-110 duration-300 font-montserrat cursor-default hover:drop-shadow-lg flex font-bold flex-col justify-center text-wrap lg:text-start">
                  <p>Bikin Web</p>
                  <p className="text-brand-dark"> Makin mudah </p>
                </div>
                <div className="font-montserrat font-bold lg:text-2xl lg:px-20 lg:mt-5 text-center lg:text-start text-white">
                  <div className="flex justify-center gap-2">
                    <p>Dengan</p>
                    <h1>Jasa Pembuatan Web</h1>
                  </div>
                  <h2 className="font-montserrat lg:text-2xl lg:px-20 text-center text-nowrap gap-2 flex flex-col lg:flex-row items-center lg:text-start">
                    <span className=" font-bold bg-brand-yellow text-brand-dark px-3 rounded-lg">
                      {" "}
                      Cuma 1,4 juta
                    </span>{" "}
                    dapet web yang aktif setahun !
                  </h2>
                </div>

                <div className="flex mt-2 p-3 lg:mt-8 text-white lg:gap-10 items-center font-montserrat lg:px-16  lg:items-start justify-center text-center mx-2 hover:scale-105 duration-300 flex-col">
                  <button
                    // target="_blank"
                    className="py-2 px-8 bg-brand-yellow text-brand-dark rounded-md animate-bounce lg:text-2xl hover:bg-brand-dark hover:text-white duration-300 font-bold "
                    // href={"https://bit.ly/AlphaPromo50ribu"}
                    onClick={() => scrollPricing("pricing")}
                  >
                    Order Sekarang
                  </button>
                  {/* <button
                  className="py-1 px-3 bg-white text-brand-dark rounded-xl animate-bounce lg:text-2xl mt-4 hover:bg-brand-dark hover:scale-105 hover:text-white duration-300 font-bold"
                >
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
