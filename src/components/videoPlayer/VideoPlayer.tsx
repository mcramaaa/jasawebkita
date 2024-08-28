import React, { useState, useRef } from "react";

const VideoPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      // Ensure videoRef is not null
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto cursor-pointer"
        onClick={handleVideoClick}
        controls={false} // Hide default controls
      />
    </div>
  );
};

export default VideoPlayer;
