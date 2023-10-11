// BackgroundVideo.js
import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://static.igem.wiki/teams/4629/wiki/promobackground.png")',
        }}
      ></div>

      {/* Video Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-100">
        <video
          className="w-3/4 h-auto rounded-[5%]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/thailand-ris/Titleanimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default BackgroundVideo;

// pls.js
