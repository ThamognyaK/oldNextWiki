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
            'url("https://static.igem.wiki/teams/4629/wiki/quotebackground.png")',
        }}
      ></div>

<div className="absolute inset-0 flex items-center text-center justify-center z-100  drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">

<div class="flex items-center justify-center h-screen text-white">
    <div class="text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">The difference between life and death:</h1>
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">48 hours</h1>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">one gene.</h1>
    </div>
</div>


      </div>

    </div>
  );
};

export default Bgimage;

// pls.js
