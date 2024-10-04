import { TESTI } from "@/constants/appConstant";
import Image from "next/image";
import React, {useState } from "react";
import { FaPlay, FaRegComments, FaStar } from "react-icons/fa6";
import ReactPlayer from "react-player";
// import YouTube from "react-youtube";

export default function Testimoni() {
  const star = 5;

  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  // const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = (index:any) => {
    if(activeVideo === index){
      console.log("video terputar")
      setActiveVideo(null)
    } else {  
      setActiveVideo(index)
    }
  };

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const videoElement = document.querySelector(`#video-${activeVideo}`);
      if (videoElement) {
        videoElement.requestFullscreen();
        
      }
    }
  };
  return (
    
    <div className=" px-4 bg-brand-bone lg:px-20 xl:px-32 py-14 grid lg:grid-cols-3">
      <div className="flex flex-col justify-center">
        <div className="text-7xl w-full justify-center items-center py-7 flex lg:justify-start text-brand">
          <FaRegComments />
        </div>
        <h2 className=" flex text-3xl font-bold text-brand-dark font-montserrat flex-col">
          Dari Mereka yang Sudah Merasakannya
        </h2>
        <p className="mt-4 text-sm lg:text-base">
          Biarkan para klien kami yang berbicara. Hasil yang memuaskan bukan
          sekadar janji, tapi kenyataan yang dirasakan oleh klien kami. Baca
          kisah mereka dan lihat bagaimana layanan kami membuat perbedaan besar.
        </p>
      </div>

      <div className="lg:col-span-2 relative grid grid-cols-1 lg:grid-cols-3 place-items-center">
        <div className="absolute w-5 md:w-10 h-full z-10 left-0 bg-gradient-to-r from-brand-bone to-brand-bone/0"></div>
          {TESTI.map((item, i) => (
            <div
              className="w-60 h-[600px] my-3 p-4 rounded-xl mr-4 flex flex-col items-center bg-white drop-shadow-lg overflow-hidden"
              key={i}
            >
              <div>
                <p className="text-sm text-center">{item.comment}</p>
              </div>
              <div className="absolute bottom-0 bg-brand-bone h-2/5 w-full flex flex-col items-center gap-2">
                <Image
                  src={item.img}
                  alt=""
                  height={90}
                  width={90}
                  className="object-contain absolute rounded-full -top-10 border-4 border-brand-bone"
                />
                <div className="mt text-center flex flex-col items-center mt-16">
                  <h5>{item.label}</h5>
                  <div>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`inline-block text-xs ${
                          i < star ? "text-blue-500" : "text-gray-400"
                        }`}
                      >
                        <FaStar />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                {activeVideo === i ? (
                  <ReactPlayer
                    id={`video-${activeVideo}`}
                    url={item.video}
                    width="100%"
                    height="180"
                    controls={true}
                    playing={true}
                    playsinline={false}
                    onPlay={() => handleFullScreen()}
                  />
                  ) : (
                    <div 
                      className="w-full h-32 bg-gray-200 flex items-center justify-center cursor-pointer"
                      onClick={() => handleVideoClick(i)} 
                    >
                      <FaPlay className="text-4xl text-gray-500" />
                    </div>
                  )}
                </div>

                {/* <button onClick={() => openNewTab(item.video)}>
                  lihat video
                </button> */}

                {/* <Link href={item.video} target="_blank" className="text-sm">
                  Lihat video
                </Link> */}
              </div>
            </div>
          ))}
        <div className="absolute w-5 md:w-10 h-full z-10 right-0 bg-gradient-to-l from-brand-bone to-brand-bone/0"></div>
      </div>
    </div>
  );
}
