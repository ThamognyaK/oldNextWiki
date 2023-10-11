import Image from "next/image";

import MastHead from "../components/MastHead";
import BackgroundVideo from "../components/promo";
import pls from "../components/whateverthisis";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MastHead />
      <BackgroundVideo />
      <pls />
    </div>
  );
}
