import Image from "next/image";
import React from "react";

interface IProps {
  i: number;
  item: {
    label: string;
    img: string;
    desc: string;
  };
}

export default function SectionCard(props: IProps) {
  const { i, item } = props;
  const rev = i % 2 === 0;

  return (
    <div
      className={`${
        !rev && "lg:place-items-end"
      } grid md:grid-cols-2 gap-3 md:gap-7 lg:gap-10`}
    >
      <div
        className={`w-full grid place-items-center ${
          rev ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <div className="flex w-full md:w-fit items-center p-3 justify-center group bg-gradient-to-t drop-shadow-md from-white via-brand-dark/20 to-white rounded-xl">
          <div className="w-full md:w-72  aspect-[3/2] overflow-hidden relative rounded-xl">
            <Image
              src={item.img}
              alt={item.label}
              fill
              className="object-contain group-hover:scale-110 duration-500 transition-all"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          rev && "md:order-first items-end md:text-end"
        } flex gap-4 flex-col group justify-center h-full text-center md:text-start`}
      >
        <div
          className={`${rev && "lg:items-end"} md:w-fit w-full flex flex-col`}
        >
          <h2 className="md:text-2xl text-xl font-semibold font-varella">
            {item.label}
          </h2>
          <div className="h-[2px] rounded-full group-hover:w-full duration-500 bg-brand w-0"></div>
        </div>
        <p className="text-base">&quot;{item.desc}&quot;</p>
      </div>
    </div>
  );
}
