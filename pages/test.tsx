import { Inter } from 'next/font/google'
import Cards from '../components/Cards';
import Link from 'next/link';
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
<>
<main className="bg-newtallow">
<Navigation 
name="iGEM 2023"
/>

<div className="bg-newtallow w-[100%] h-10"></div>
<div className="bg-[url('https://static.igem.wiki/teams/4579/wiki/backgroundg.jpg')] w-full h-[570px] bg-cover bg-center p-20">

<div className="grid place-content-center">
<img className="mx-auto w-[80%] h-auto animate-fade-up block img-center" src="https://static.igem.wiki/teams/4579/wiki/title3gif.gif"></img>
</div>

</div>

<div className="bg-DMagenta mx-auto py-10 px-4"></div>
<div className= 'bg-DMagenta'>


<div className="grid grid-cols-2 place-items-center">
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-down-right">
  <span className="text-center text-3xl font-bold">Bacterial phytopathogens cause massive damages to crop yields every year. <a className="text-OBrown">About 40%</a> of all economically-important crops are lost to plant pathogens and pests annually.
</span>
</div>
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="flip-right">
<img src="https://static.igem.wiki/teams/4579/wiki/fortypercentstat.png"/>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center">
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="zoom-in-right">
  <img src="https://static.igem.wiki/teams/4579/wiki/pesticidespray.png"/>
</div>
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-left">
  <span className="text-center text-3xl font-bold">Current approaches include detrimental pesticides. This method is <a className="text-OBrown">unsustainable</a> in the long run, as it causes active harm to the environment and farmland</span>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center bg-DMagenta">
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-up-right">
  <span className="text-center text-3xl font-bold">Alternative to microbial pesticides: <a className="text-OBrown">biocontrols!</a> Current methods of bacterial biocontrols utilize natural bacterial enemies to specific pathogens. However, this approach is strenuous and time consuming.</span>
</div>
<div className="bg-lavender drop-shadow-md rounded-full w-[50%] h-[80%] grid place-content-center" data-aos="flip-right">
<span className="text-center text-xl font-bold">Image/Diagram</span>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center">
<div className="bg-OBrown drop-shadow-md rounded-full w-[50%] h-[80%] grid place-content-center" data-aos="zoom-in-right">
<span className="text-center text-xl font-bold">Image/Diagram</span>
</div>
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-left">
  <span className="text-center text-3xl font-bold">Therefore, we seek to expand on biocontrols using a synthetic biology approach. We are modifying non-pathogenic bacteria that naturally colonize plant species to secrete <a className="text-OBrown">microcins</a></span>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center bg-DMagenta">
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-up-right">
  <span className="text-center text-3xl font-bold">Microcins are antimicrobial peptides that are highly selective of their pathogenic targets. After identifying their targets, they exterminate the pathogens by disrupting their cell membranes.</span>
</div>
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="flip-right">
<img src="https://static.igem.wiki/teams/4579/wiki/microcin-mech-removebg-preview.png"/>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center">
<div className="bg-OBrown drop-shadow-md rounded-full w-[50%] h-[80%] grid place-content-center" data-aos="zoom-in-right">
<span className="text-center text-xl font-bold">Image/Diagram</span>
</div>
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-left">
  <span className="text-center text-3xl font-bold">Our project presents an environmentally-friendly and cost-effective solution for farmers who face strain from plant pathogens. The self-replicating nature of microcin-producing chassis serve to reduce carbon emissions and expenses that can come from traditional microbial pesticides.</span>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>
</div>


<Footer Year='2023'/>
</main>
    </>
  )
}