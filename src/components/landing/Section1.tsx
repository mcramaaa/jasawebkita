import { SECTION1 } from "@/constants/appConstant";
import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="group bg-brand-bone overflow-hidden relative mt-32 pb-16 rounded-[3.125rem] ">
      <Image
        src={"/bg.png"}
        className="object-cover group-hover:scale-125 duration-1000"
        alt=""
        fill
      />
      <div>
        <div className="flex mx-4 mt-16 lg:mx-20 md:mt-24 lg:mt-20 flex-col gap-10">
          <div className="w-full flex flex-col items-center  justify-center">
            <p className="text-2xl md:text-3xl py-3 font-montserrat font-bold text-brand">Lalu apa solusinya ?</p>
            <h2 className="text-3xl group-hover:scale-110 font-montserrat duration-1000 w-fit md:text-4xl text-brand group-hover:text-brand-dark font-bold gap-3 font-varella text-center">
              Beralih{" "}
              <span className="font-light text-brand-dark">
                dari Tradisional
              </span>{" "}
              ke Digital
            </h2>
          </div>
        </div>
        <div className="mt-10 z-30">
        <div className="absolute left-1/2 top-[19%] bottom-0 w-0.5 bg-brand"></div>
          {SECTION1.value.map((item, i) => (


             <div key={i} className="flex items-center mb-16 px-4 lg:px-48 mx-4 lg:mx-36 relative">

              <div className={`flex-1 pr-24  ${i % 2 === 0 ? 'text-right' : 'order-2 pl-8 pr-0'}`}>
                
                {/* MID */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white font-bold">
                {i + 1}
              </div>
            
               {i % 2 !== 0 ? (
                 <div className="text-right">
                   <h4 className="font-montserrat font-bold text-2xl mb-2">{item.label}</h4>
                   <p className="text-sm md:text-base">{item.desc}</p>
                 </div>
               ) : (
                 <div className="w-full h-[500px] relative">
                   <Image src={item.image} alt="" layout="fill" objectFit="contain" />
                 </div>
               )}
              </div>


             <div className={`flex-1 pl-8 ${i % 2 !== 0 ? 'order-2 pr-8 pl-0' : 'text-left'}`}>
               {i % 2 === 1 ? (
                 <div className="w-full h-[500px] relative">
                   <Image src={item.image} alt="" layout="fill" objectFit="contain" />
                 </div>
               ) : (
                 <div>
                   <h4 className="font-montserrat font-bold text-2xl mb-2">{item.label}</h4>
                   <p className="text-sm md:text-base">{item.desc}</p>
                 </div>
               )}
             </div>
           </div>
            // <div
            //   key={i}
            //   className="grid mx-4 px-4 lg:px-52 lg:mx-32 grid-cols-1 md:grid-cols-13  items-center text-brand-dark justify-center"
            // >
            //   {/* RIGHT */}
            //   <div
            //     className={`${
            //       i % 2 !== 1 ? "order-1 md:order-1" : "order-1 md:order-2"
            //     } col-span-5 flex items-center justify-end pb-10`}
            //   >
            //     {i % 2 === 1  ? (
            //       <div className="w-96 h-96 flex relative">
            //         <Image src={item.image} alt="" fill objectFit="contain" />
            //       </div>
            //     )  : (
            //       <div className="flex gap-2 flex-col lg:max-w-xl text-right">
            //         <h4 className="font-montserrat font-bold lg:text-2xl w-full">
            //           {item.label}
            //         </h4>
            //         <p className="text-sm md:text-base ">{item.desc}</p>
            //       </div>
            //     )}
            //   </div>

            //   {/* MID */}
            //   <div className="col-span-3 w-full h-full hidden md:flex flex-col items-center justify-center ">
            //     <div
            //       className={`grid place-items-center ${
            //         i !== SECTION1.value.length - 1 ? "h-[80px]" : "h-[40px]"
            //       }  rounded-full w-[40px] bg-brand`}
            //     >
            //       <p className="font-montserrat text-white font-bold text-center">
            //         {i + 1}
            //       </p>
            //     </div>
            //     {i !== SECTION1.value.length - 1 && (
            //       <div className="w-[3px] h-full bg-brand"></div>
            //     )}
            //   </div>

            //   {/* LEFT */}
            //   <div
            //     className={`${
            //       i % 2 === 1 ? "order-1 md:order-1" : "order-1 md:order-3"
            //     } col-span-5 w-full justify-start `}
            //   >
            //     {i % 2 !== 1 ? (
            //       <div className="w-96 h-96 flex items-center relative max-h-xl ">
            //         <Image src={item.image} alt="" fill objectFit="contain" />
            //       </div>
            //     ) : (
            //       <div className="flex gap-2 flex-col text-left lg:max-w-xl">
            //         <h4 className="font-montserrat font-bold lg:text-2xl ">
            //           {item.label}
            //         </h4>
            //         <p className="text-sm md:text-base">{item.desc}</p>
            //       </div>
            //     )}
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}