import Figures from '../components/Figures';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Sources from '../components/Sources';








const safety = () => {
return (
<>
<Navigation
name="iGEM 2023"
/>
<h1 className="animate-fade-up">Safety</h1>
<h4></h4>
<section>Introduction</section>
<h3>As a team working with novel microcins and plant pathogens, we understand the importance of lab safety and security. Throughout our project we engaged in various measures to ensure all team members could prevent and adequately address possible risks. Beyond general safety training, we also engaged in research to prevent any possible risks specific to the elements in our project.</h3>




<section>General Lab Safety</section>
<h3>Prior to beginning wet lab work, all team members were required to participate in site-specific lab safety training provided by UT Austin Environmental Health & Safety (EHS). This training included proper safety procedures for working with biohazardous material, such as proper PPE, sterile technique, and disposal of said materials. Team members were also trained to identify possible hazards in the lab and how to address possible risks, such as a spill or fire. Key safety measures followed by our team were:</h3>
<h3>
<ul className = "list-inside list-image-bacteriaBullet">
<li> <></>Usage of gloves when working in lab/handling biological materials </li>
<li> <></>Wearing proper PPE when working with potentially harmful chemicals and other materials (goggles, lab coats, face shields, etc.) </li>
<li> <></>Use of bunsen burner when working with biological materials to prevent contamination </li>
<li> <></>Wiping down all benchtops with 70% ethanol before and after work to prevent contamination </li>
<li> <></>Observing all safety labels in the lab and observing the location of safety equipment (fire extinguisher, eyewash, shower, etc.) </li>
</ul></h3>




<section>Working With Novel Microcins</section>
<h3>Microcins are a class of antimicrobial peptides (AMPs) which are relatively under-characterized compared to other AMPs. Therefore, our main strategy for circumventing possible risks relating to microcins was consulting with a lab specializing in microcin secretion. After consulting with <a className = 'font-bold'>Jennifer Parker</a>, a researcher from the Davies Lab at UT Austin, as well as relevant academic literature, we obtained useful information regarding the potential risk of microcins towards humans. We found that microcins typically only harm other bacteria, and that working with them did not pose a significant threat to humans. Consequently, we followed the standard biosafety procedure outlined by UT Austin EHS when working with our microcins. We also submitted a check-in form detailing our planned work, which was approved by the iGEM Safety and Security Committee.</h3>








<section>Working With Plant Pathogens</section>
<h3>Several species of known plant pathogens were used in our research to test the efficacy of our secretion system. We primarily focused on <a className = 'italic'>Pantoea</a> species as many are known onion pathogens. The four strains we used in experiments were <a className = 'italic'>P. agglomerans</a> PNG 92-11, <a className = 'italic'>P. allii</a> PNA 200-10, <a className = 'italic'>P. ananatis</a> LMG 2665, and <a className = 'italic'>P. ananatis</a> PNA 97-1R. When researching the strains, we found that many <a className = 'italic'>P. agglomerans</a> species are listed as BL2 organisms due to being opportunistic pathogens. However, further research and consultation with the lab we obtained the strains from showed that these strains generally pose minimal risks to researchers. </h3>
<h3>After confirming the pathogens were safe to work with, our main safety concern was preventing accidental release of these strains into the environment. The main measures we took to prevent environmental release were:</h3>




<h3>
<ul className = "list-inside list-image-bacteriaBullet">
<li> <></>Sterilization of lab bench with 70% ethanol before and after working with a pathogen </li>
<li> <></>Using a bunsen burner and observing sterile technique while working with a pathogen </li>
<li> <></>Disposing of single-use materials in the proper biowaste container (gloves, pipette tips,microcentrifuge tubes, etc.) </li>
<li> <></>Cleaning and autoclaving reusable materials before reuse </li>
<li> <></>Storing all pathogens and other bacterial stocks at -80ºC with proper labels to prevent contamination </li>
</ul></h3>
<h5></h5>
<Footer
Year="2023"
/>
</>
)
}




export default safety