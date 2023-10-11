'use client';
import Figures from '../components/Figures';
import Sources from '../components/Sources';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Accordion } from 'flowbite-react';


const medals = () => {
return (
<>
<Navigation name='iGEM 2023' ></Navigation>
<h1 className="animate-fade-up">Medal Requirements</h1>

<div className="bg-newtallow rounded-xl p-5 my-8 mx-[15%] text-BGreen text-center text-xl">
Our team has completed the following deliverables required for the <a href="#Bronze" className="hover:text-OBrown hover:font-bold underline"> Bronze</a>, <a href="#Silver" className="hover:text-gray-400 hover:font-bold underline">Silver</a>, and <a href="#Gold" className="hover:text-yellow-300 hover:font-bold underline">Gold</a> medals.
</div>




<div id="Bronze"><h4></h4></div>
<section>Bronze Medal Deliverables</section>
<h3 >
  Click a deliverable below for more details
  <ul className=' list-disc font-normal  pl-6'>
  <li className='m-4 underline hover:font-bold hover:text-OBrown'> <img    /> <a href="https://2023.igem.wiki/austin-utexas/">Wiki </a> </li>
  <li className='m-4 underline hover:font-bold hover:text-OBrown'> <img    /> <a href="https://competition.igem.org/deliverables/judging-form"> Judging Form </a> </li>
  <li className='m-4 underline hover:font-bold hover:text-OBrown'> <img    /> <a href="https://2023.igem.wiki/austin-utexas/attributions"> Project Attributions </a> </li>
  <li className='m-4 underline hover:font-bold hover:text-OBrown'> <img    /> <a href="https://2023.igem.wiki/austin-utexas/description"> Project Description </a> </li>
  <li className='mt-4 ml-4 underline hover:font-bold hover:text-OBrown'> <img    /> <a href="https://2023.igem.wiki/austin-utexas/contribution"> Contributions </a> </li>
  <li className='m-4 underline hover:font-bold hover:text-OBrown'> <img    /> <a href="https://video.igem.org/w/nGF4kQZfDdtWak4aXpDgiH"> Project Promotion Video </a> </li>
  <center>
    <iframe title="Austin-UTexas: Modular Novel Microcin Secretion System against Agricultural Path... (2023) - Project Promotion [English]" width="560" height="315" src="https://video.igem.org/videos/embed/afbdbb97-29d1-4a0d-89f8-939eb4bd4777" frameBorder="0" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
    </center>
  </ul>
  </h3>
  <h5></h5>




  <div id="Silver"><h4></h4></div>
<section>Silver Medal Deliverables</section>
<h6>Engineering Success</h6>
<h3>
This page details our progress through the engineering cycle and what we learned from each iteration. We specifically catalogue our experience with inducing microcin secretion and measuring this secretion. Each stage of the engineering cycle provided us with valuable information for reengineering the Type 1 Secretion System and inducing expression.
<ul className=' list-none font-normal pt-6'> <li><a href="https://2023.igem.wiki/austin-utexas/engineering"> See more details here: <span className="underline hover:font-bold hover:text-gray-400"> Engineering Success </span> </a>
</li>
</ul>
</h3>


<h6>Human Practices</h6>
<h3>
This page includes the collaboration and outreach we conducted during our project. We specifically sought out stakeholders in our local community and experts to hear their feedback on our project. This process allowed us to modify our project to better serve the local community and consider how our project could contribute to the Sustainable Development Goals.
<ul className=' list-none font-normal pt-6'> <li><a href="https://2023.igem.wiki/austin-utexas/human-practices"> See more details here: <span className="underline hover:font-bold hover:text-gray-400"> Human Practices </span> </a>
</li>
</ul>
</h3>
<h5></h5>




<div id="Gold"><h4></h4></div>
<section>Gold Medal Deliverables</section>
<h6>Excellence in Synthetic Biology:</h6>
<h3>
Our team chose to submit the parts we created for our modular microcin secretion system to the <span className="font-bold">Best Parts Collection </span> category. Within this page we have catalouged each part we created as well as our entire secretion system construct.<ul className=' list-none font-normal pt-6'> <li><a href="https://2023.igem.wiki/austin-utexas/parts"> See more details here: <span className="underline hover:font-bold hover:text-yellow-500"> Parts Collection</span> </a>
</li>
</ul>
</h3>
<h3></h3>


<h6>Specializations</h6>
<h3>
The two specialization categories we are submitting our project for are <span className="font-bold">Integrated Human Practices</span> and <span className="font-bold">Sustainable Development</span>. These pages detail how we integrated feedback and advice from stakeholders into our project as well as our consideration of the United Nations Sustainable Development Goals.
</h3>
<h3 className="pt-6"> Click a specialization below for more details:
  <ul className=' list-disc font-normal  pl-6'>
  <li className='m-4 underline hover:font-bold hover:text-yellow-500'> <img    /> <a href="https://2023.igem.wiki/austin-utexas/human-practices">Integrated Human Practices </a> </li>
  <li className='mt-4 ml-4 underline hover:font-bold hover:text-yellow-500'> <img    /> <a href="https://2023.igem.wiki/austin-utexas/sustainable"> Sustainable Development </a> </li> </ul> </h3>
  <h5></h5>


<Footer Year='2023'/>
</>
)
}


export default medals