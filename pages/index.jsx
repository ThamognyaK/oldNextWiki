import Image from "next/image";

import MastHead from "../components/MastHead";
import BackgroundVideo from "../components/promo";
import Pls from "../components/whateverthisis";
import Bgimage from "../components/plshelp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MastHead />

      <BackgroundVideo />

      <Pls />

      <Bgimage />

      
    </div>
  );
}
