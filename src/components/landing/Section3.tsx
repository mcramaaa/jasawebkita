import React from "react";

export default function Section3() {
  return (
    <div className="relative bg-brand-bone rounded-t-3xl">
      <div className="absolute inset-x-0 bg-white h-1/2 rounded-t-3xl" aria-hidden="true" />
      <div className="relative px-4 mx-4 lg:mx-32 py-32 mt-16 shadow-2xl bg-white rounded-[3.125rem]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="flex-col flex text-2xl lg:text-5xl text-brand-dark font-montserrat ">
            Slot Terbatas Untuk{" "}
            <span className="font-bold">Tetap BERKUALITAS !</span>
          </h2>

          {/* <button className="mt-5 text-white" ><Link target="_blank" className=" bg-brand-dark rounded-full  py-3 px-3 " href={"https://api.whatsapp.com/send?phone=6285184864504&text=Hai%2C%20Alpha%20Project!%20Mau%20konsultasi%20untuk%20upgrading%20sosial%20media%20brand%20saya%2C%20nih!%20"} >Konsultasi Sekarang</Link></button> */}
        </div>

        <p className="text-center mt-4 text-lg lg:text-2xl lg:mx-40">
          Alpha Project membatasi jumlah klien yang ditangani setiap bulan untuk
          menjaga kualitas konten yang dihasilkan
        </p>
        
      </div>
    </div>
  );
}
