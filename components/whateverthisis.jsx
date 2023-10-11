import React from "react";
import Image from "next/image";

const Pls = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://static.igem.wiki/teams/4629/wiki/gradient.png")',
        }}
      ></div>

      <div class="grid grid-cols-2 gap-5 border-transparent absolute inset-0 text-center items-center justify-center z-100">
        <div class="p-5"></div>
        <div class="p-5">
          <h1 className="text-what text-5xl font-black">INCREASE</h1>
          <h1 className="text-xl font-bold">
            plant stress response capabilities.
          </h1>
        </div>
        <div class="p-5">
          <h1 className="text-whatt text-5xl font-black">35%</h1>
          <h1 className="text-xl font-bold">
            of farmers in Chantaburi cited droughts as the most pressing issue
            towards their crop yields.
          </h1>
        </div>
        <div class="p5"></div>
      </div>
    </div>
  );
};

export default Pls;
