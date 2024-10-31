import { NAVMENU } from "@/constants/appConstant";
import { useSection } from "@/zustand/useNav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// interface IProps {
//   showNav?: boolean;
// }

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setSection } = useSection();

  const openBar = () => {
    setIsOpen(!isOpen);
  };

  function handleSection(key: string) {
    if (path !== "/") {
      router.push("/");
      setSection(key);
    } else {
      setSection(key);
    }
    setIsOpen(false);
  }

  return (
    <div>
      <div
        className={`px-3 absolute bg-white overflow-hidden w-full z-50 md:px-12 lg:px-52 py-4 grid grid-flow-col items-center`}
      >
        <Link
          href={"/"}
          onClick={() => {
            setSection("home");
          }}
          // className="aspect-[4/1] w-40 lg:w-52 relative"
        >
          {/* <Image
            src={"/assets/logo2.png"}
            alt="bbizlogo"
            fill
            className="object-contain"
          /> */}
          <p className="text-brand-dark font-black font-montserrat text-xl md:text-2xl lg:text-3xl">
            JasaWebKita
          </p>
        </Link>
        <div className="hidden md:flex w-full justify-end bgpin gap-5 text-sm lg:gap-10 lg:text-base font-semibold">
          {NAVMENU.map((list, i) => (
            <button
              className="text-nowrap text-brand-dark hover:scale-110 duration-300"
              key={i}
              onClick={() => handleSection(list.refKey)}
            >
              {list.label}
            </button>
          ))}
        </div>
        <div className="md:hidden flex justify-end w-full">
          {!isOpen ? (
            <HiMenuAlt3
              onClick={openBar}
              className="md:hidden text-2xl text-brand-dark"
            />
          ) : (
            <IoClose
              onClick={openBar}
              className="md:hidden text-2xl text-brand-dark"
            />
          )}
        </div>
      </div>

      {/* DROPDOWN */}

      <div className="z-40">
        {isOpen && (
          <div className="w-full h-screen absolute" onClick={openBar}></div>
        )}
        <div
          className={`${
            isOpen ? "mt-14" : "-mt-96"
          } bg-brand-dark/90 backdrop-blur-sm absolute  w-full flex flex-col px-5 justify-center gap-5 md:hidden text-white py-5 rounded-b-lg duration-300`}
        >
          {NAVMENU.map((list, i) => (
            <button
              className={`text-nowrap hover:scale-110 duration-300 py-2 text-center`}
              key={i}
              onClick={() => handleSection(list.refKey)}
            >
              {list.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
