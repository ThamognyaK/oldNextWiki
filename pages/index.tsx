import { Inter } from 'next/font/google'
import Cards from '../components/Cards';
import Link from 'next/link';
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Sources from '@/components/Sources';

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
<main className="bg-DMagenta">
<Navigation name="iGEM 2023" />

<div className="bg-newtallow w-[100%] h-10"></div>

<div className="bg-[url('https://static.igem.wiki/teams/4579/wiki/backgroundg.jpg')] w-full h-[570px] bg-cover bg-center p-20 relative">

<div className="grid place-content-center">
<img className="mx-auto w-[80%] h-auto animate-fade-up block img-center" src="https://static.igem.wiki/teams/4579/wiki/finaltitle.gif"></img>
</div>


{/* ninja */}
<img src="https://static.igem.wiki/teams/4579/wiki/unshaded-ninja-microcin-removebg-preview.png" className="absolute bottom-9 right-[28%] w-[30%] h-[50%]" 
data-aos="slide-left"
data-aos-delay="500"></img>

{/* bad pathogen */}
<img src="https://static.igem.wiki/teams/4579/wiki/chasing-pt1-removebg-preview-1.png" className="absolute bottom-9 right-[45%] w-[20%] h-[32%]"></img>


</div>


<div className="bg-DMagenta mx-auto py-10 px-4"></div>
<div className= 'bg-DMagenta'>


<div className="grid grid-cols-2 place-items-center">
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-down-right">
  <span className="text-center text-skymagenta text-2xl font-bold">Food insecurity is a <a className="text-Jasmine">major global issue</a>, with millions facing hunger each year. One major contributing factor is crop loss, a significant fraction of which is due to <a className="text-Jasmine">plant pathogens</a>. According to the Food and Agriculture Organization, around <a className="text-Jasmine">$220 billion USD</a> of crops are lost due to plant diseases and pests annually, including <a className="text-Jasmine">bacterial plant pathogens.</a></span>
</div>
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="flip-right">
<img src="https://static.igem.wiki/teams/4579/wiki/sad-farmer-money-removebg-preview.png"/>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center">
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="zoom-in-right">
  <img src="https://static.igem.wiki/teams/4579/wiki/pesticidefinal.png"/>
</div>
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-left">
  <span className="text-center text-skymagenta text-2xl font-bold">One of the main ways farmers currently defend crops against bacterial pathogens is <a className="text-Jasmine">pesticides</a>, which can be <a className="text-Jasmine">detrimental</a> to the environment and human health. Pesticides can damage farmland and the local ecosystem, preventing <a className="text-Jasmine">sustainable patterns</a> of production and consumption.
  </span>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center bg-DMagenta">
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-right">
  <span className="text-center text-skymagenta text-2xl font-bold"><a className="text-Jasmine">Biocontrols</a> are a sustainable alternative to conventional crop protection methods. Bacterial biocontrol agents inhibit or kill a target pathogens through a wide variety of natural mechanisms (Bonaterra et al., 2022). These agents work in <a className="text-Jasmine">harmony with nature</a> to prevent the devastating losses that bacterial plant pathogens can cause.</span>
</div>
<img data-aos="fade-left" src="https://static.igem.wiki/teams/4579/wiki/crop-dusting-harmony-removebg-preview.png"/>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center">
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="flip-right">
<img src="https://static.igem.wiki/teams/4579/wiki/microcinbacteria.png"/>
</div>
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-left">
  <span className="text-center text-skymagenta text-2xl font-bold">Our project uses synthetic biology to improve upon biocontrols through the creation of a <a className="text-Jasmine">modular microcin secretion system</a>. We aim to engineer natural biocontrols to kill off target pathogenic bacteria through the secretion of microcins, providing a <a className="text-Jasmine">sustainable</a> approach to crop protection.
  </span>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center bg-DMagenta">
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-right">
  <span className="text-center text-skymagenta text-2xl font-bold">Microcins are a class of <a className="text-Jasmine">novel antimicrobial peptides</a> secreted by many bacteria. Microcins are a potential alternative because they are <a className="text-Jasmine">highly specific</a> and difficult to <a className="text-Jasmine">acquire resistance to</a>. Generally, microcins cause disruptions in the cell membrane through interactions with inner membrane receptors, resulting in destruction of the cell (Parker & Davies, 2022).</span>
</div>
<div className="w-[65%] h-[80%] grid place-content-center" data-aos="flip-right">
<img src="https://static.igem.wiki/teams/4579/wiki/microcin-mech-now-ninja-slicing-removebg-preview.png"/>
</div>
</div>

<div className="bg-DMagenta mx-auto py-20 px-4"></div>

<div className="grid grid-cols-2 place-items-center">
<img data-aos="fade-right" src="https://static.igem.wiki/teams/4579/wiki/guardian-removebg-preview-1.png"/>
<div className="w-[85%] h-80 grid place-content-center" data-aos="fade-up-left">
  <span className="text-center text-skymagenta text-2xl font-bold">Our modular microcin secretion system permits the <a className="text-Jasmine">easy swapping of microcins</a>, allowing farmers to implement it for <a className="text-Jasmine">diverse bacterial pathogens and environments</a>. Overall, our project provides farmers with a sustainable, effective method of protecting crops and <a className="text-Jasmine">mitigating global food loss</a>.</span>
</div>
</div>

<div className="bg-DMagenta py-10"></div>

<div data-aos="fade-up">
<h4></h4>
<h6>References</h6>
<Sources
  citationText='Bonaterra A, Badosa E, Daranas N, Francés J, Roselló G, Montesinos E. 2022. Bacteria as biological control agents of plant diseases. Microorganisms.'
  doi='10.3390/microorganisms10091759.'
/>
<Sources
  citationText='FAO. 2017. The future of food and agriculture – Trends and challenges. Food and Agriculture Organization of the United Nations. https://www.fao.org/3/i6583e/i6583e.pdf'
  doi=''
/>
<Sources
  citationText='Parker, J. K., & Davies, B. W. (2022) Microcins reveal natural mechanisms of bacterial manipulation to inform therapeutic development. Microbiology, 168(4), 001175.'
  doi='https://doi.org/10.1099/mic.0.001175'
/>
<h5></h5>
</div>

</div>

<Footer Year='2023'/>
</main>
    </>
  )
}

