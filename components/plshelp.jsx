/**
https://static.igem.wiki/teams/4629/wiki/igem-quote.png

 */

// BackgroundVideo.js
import React from "react";

const Bgimage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://static.igem.wiki/teams/4629/wiki/igem-quote.png")',
        }}
      ></div>

    </div>
  );
};

export default Bgimage;

// pls.js
