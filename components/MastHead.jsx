export default function MastHead() {
  return (
    <div class="masthead">
      <video
        autoPlay
        loop
        muted
        playsInline
        class="absolute w-full min-h-screen object-cover"
      >
        <source src="/thailand-ris/Titleanimation.mp4" />
      </video>
      <div className="text-container absolute w-full text-center bottom-20">
        <p className="text-white text-6xl">Thailand-RIS</p>
        <p className="text-white text-4xl">Powering up Plant Defenses</p>
        <p className="text-white text-xl">
          Modifying GCL localization to boost plant stress response rates
          through improved ROS mitigation.
        </p>
      </div>
    </div>
  );
}

// https://video.igem.org/videos/embed/4016ee61-6073-43e6-b29a-57b543f65205
/*
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Thailand RIS</h1>
      </div>
*/
