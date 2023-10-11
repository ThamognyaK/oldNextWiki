'use client';
import Figures from '../components/Figures';
import AccordionFigure from '../components/AccordianFigure';
import Sources from '../components/Sources';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Accordion } from 'flowbite-react';



const experiments = () => {
return (
<>
<Navigation name='iGEM 2023' ></Navigation>
<h1 className="animate-fade-up">Experiments</h1>
<h4></h4>
<section>Introduction</section>
<h3>Our goal was to design a modular microcin secretion system that targets bacterial phytopathogens. To do so, our research was broken down into 4 main topics:</h3>
<h3>
<ul className = "ml-6 list-inside list-image-bacteriaBullet">
<li> <></> Inputting the genomes of our target phytopathogens into the cinful program to find potential microcins and immunity proteins</li>
<li> <></> Constructing a broad host range plasmid with the components of a Type 1 secretion system using Golden Gate Assembly</li>
<li> <></> Testing microcin effectiveness through zone of inhibition and growth curve assays </li>
<li> <></> Conducting in-vivo assays to categorize pathogenicity of pathogens and testing in-vivo capabilities of effective novel microcins</li>
</ul></h3>
<h3>Throughout the experimental process, we consistently revised our experimental design based on feedback from our mentors and community stakeholders. Multiple trials were run with an emphasis on sterile technique. </h3>
<h3>Our experiments focused on the center rot of onions that affected the Texas 1050 sweet onion. Researchers had found that specific strains of Pantoea caused center rot while different Pantoea strains had been used as biocontrols. Our goal was to engineer the symbiont strains of Pantoea to secrete microcins that would target the pathogenic Pantoea strains. The specific strains we were working with are listed below: </h3>
<h3>
<main className='border-solid border-black border-2'>
<div className= 'grid grid-cols-4 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>Strain Name</p>
<p className='px-6'>JEB ID</p>
<p className='px-6'>Growth Conditions</p>
<p className='px-6'>Relation to onion</p>
</div>
<div className= 'grid grid-cols-4 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'> <a className='italic'>Pantoea vagans</a> C9-1</p>
<p className='px-6'>1595</p>
<p className='px-6'>Room temp</p>
<p className='px-6'>Symbiont</p>
</div>
<div className= 'grid grid-cols-4 bg-lavender text-DMagenta p-2 text-center items-stretch '>
<p className='px-6'><a className='italic'>Pseudomonas fluorescens</a> A506</p>
<p className='px-6'>1596</p>
<p className='px-6'>Room temp</p>
<p className='px-6'>Symbiont</p>
</div>
<div className= 'grid grid-cols-4 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'><a className='italic'>Pantoea agglomerans</a> PNG 92-11</p>
<p className='px-6'>1597</p>
<p className='px-6'>Room temp</p>
<p className='px-6'>Pathogen</p>
</div>
<div className= 'grid grid-cols-4 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'><a className='italic'>Pantoea allii</a> PNA 200-10</p>
<p className='px-6'>1598</p>
<p className='px-6'>Room temp</p>
<p className='px-6'>Pathogen</p>
</div>
<div className= 'grid grid-cols-4 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'><a className='italic'>Pantoea ananatis</a> LMG 2665 (ATCC 33244)</p>
<p className='px-6'>1599</p>
<p className='px-6'>Room temp</p>
<p className='px-6'>Pathogen</p>
</div>
<div className= 'grid grid-cols-4 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'><a className='italic'>Pantoea ananatis</a> PNA 97-1R (Rif resistant mutant)</p>
<p className='px-6'>1600</p>
<p className='px-6'>Room temp</p>
<p className='px-6'>Pathogen</p>
</div></main>
</h3>
<h3> These specific strains were acquired through the collaboration and generosity of the Davies lab at the University of Texas at Austin. </h3>




<h3>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='bg-DMagenta focus:bg-LGreen focus:text-white focus:ring-white focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-2'><p className='text-white'> Zone of Inhibition Assay (ZOI):<span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span></p>
</Accordion.Title>
<Accordion.Content className='bg-accordion1 text-white'>
<p>The primary goal of this assay is to determine if a 'predator' bacterial strain is effectively secreting a microcin to kill a 'prey' bacterial strain. The assay includes a control strain, which does not secrete microcin. The predator strain does secrete the microcin. The prey strain should be killed by this microcin. If a plated bacteria shows a zone of inhibition, it is likely secreting the microcin since the prey strain is being killed.</p><br></br>
<p>There are two components of the ZOI plate: Base 1.5% agar and top agar. Both layers of agar contain IPTG, the inducer of the one-plasmid secretion system. However, the top agar layer will also include the prey strain, which is what allows the zone of inhibition to be visualized. The top agar may need to be made from scratch, but it contains the same ingredients as base agar with half the amount of agar flakes.</p><br></br>
<p className = 'underline py-3'>Day 1: </p>
<p>In sterile culture tubes, prepare overnight liquid cultures of the following strains:</p>
<ul className = " mx-2 ml-12 list-inside list-image-bacteriaBullet">
<li> <></> Predator strains: These should be the strains you expect to secrete microcins </li>
<li> <></> Prey strain: This is the strain you expect your microcin will target. We use E. coli W3110 when testing secretion of MccV.</li>
<li> <></> Control(s): These should be the strains that will not secrete microcins and/or have the empty plasmid.</li>
</ul><br></br>
<p className = 'underline py-3'>Day 2:</p>
<ul className = "list-decimal ml-6">
<li> Begin melting the base agar. While this is melting, gather 50 mL flasks. You will need one for the base agar and one for the top, so you must get two for each plate you plan to make.</li>
<li> Measure the OD600 of the prey strain. OD (optical density) functions as the concentration of bacteria in 1 mL of LB. We want a final OD of 0.1 for the prey strain, and we want the final volume of prey strain + top agar = 25 mL.</li>




<ul className = " ml-6 list-inside list-image-bacteriaBullet">
<li> <></>Use 1 mL of the LB you grew your cultures in to blank the spectrometer</li>
<li> <></>Add 1 mL of the prey strain to a clean cuvette and put it in the spectrometer.</li>
<li> <></>Hit measure to take a measurement and record the OD of the prey strain, as you will need this for calculations.</li>
<li> <></>Repeat the measurement process for the predator strain and control(s). Make sure to record all OD's as you go.</li>
</ul><br></br>




<li> Use the ODs to calculate the necessary volumes.</li>
<ul className = " ml-6 list-inside list-image-bacteriaBullet">
<li> <></>We want the final ratio of concentration to volume for both strains to be: 10:0.1</li>
<li> <></>Once you have your values, you are going to be centrifuging ONLY the predator and control strains. </li>
<li> <></>Aliquot the calculated volumes of the predator/control strains into individual microcentrifuge tubes. Centrifuge each for 1 minute at 13000 RPM.</li>
<li> <></>Pour off the supernatant and resuspend with 100 μL of LB (or whatever media you used)</li>
</ul><br></br>




<li> Once the base agar is melted, allow it to cool until you can safely touch the bottle.</li>
<ul className = " ml-6 list-inside list-image-bacteriaBullet">
<li> <></>Pour 25 mL of melted base agar into the 50 mL flask you've designated for it</li>
<li> <></>Add 250 μL of IPTG and swirl thoroughly</li>
<li> <></>Pour the mixture onto your plate and allow it to dry completely</li></ul>
<li> Melt the top agar. Once it is melted, repeat the steps of letting the top agar cool before pouring</li>
<ul className = " ml-6 list-inside list-image-bacteriaBullet">
<li> <></>Pour 25 mL of top agar into the 50 mL flask</li>
<li> <></>Add the volume of prey strain calculated using the calculator</li>
<li> <></>Add 1% of the total volume (agar + prey) in IPTG</li> </ul>
<li> Pour the top agar on top of the dried base agar and allow it to dry.</li>
<li> Spot 10 μL of the predator and control on the plate. ALLOW TO DRY. This could take around 2
hours.</li>
<li> Pour the top agar on top of the dried base agar and allow it to dry.</li>
<li> Turn plates upside down and incubate</li>
</ul><br></br>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
</h3>




<h3>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-DMagenta hover:ring-2'><p className='text-white'>Onion Rot Assay:<span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span></p>
</Accordion.Title>
<Accordion.Content className='bg-accordion1 text-white'>
<p>To assess whether our engineered symbiont would effectively treat the center rot in onions, we needed a protocol that would allow us to induce center rot in onions and track its progression over a period of time. </p><br></br>
<p>Initially, our protocol was adapted from Dr. Schroeder, a plant pathologist at the University of Idaho, but we struggled with growing a sufficient amount of pathogenic Pantoea strains in the Texas 1050 onions. Using the knowledge we gained from our conversations with Dr. Brenda Schroeder, we were able to adapt her protocol for inducing center rot in onions.</p><br></br>
<p className = 'underline py-3'>Day 1:</p>
<ul className='list-decimal ml-6'>
<li> Grow a 5mL overnight liquid culture of the pathogenic and control strains. </li></ul><br></br>
<p className = 'underline py-3'>Day 2:</p>
<ul className='list-decimal ml-6'>
<li> The next day, seed 50 mL of LB with your overnight culture. Grow overnight at the appropriate temperature. A smaller amount of LB can be used, but the ratio of overnight culture of LB should stay the same. </li></ul><br></br>
<p className = 'underline py-3'>Day 3:</p>
<ul className='list-decimal ml-6'>
<li> Spin down 1 mL of each culture for 5 minutes at 3000 rpm. </li>
<li> Pour off the supernatant and resuspend each pellet in 1 mL of sterile water. </li>
<li> The concentrations of pathogenic Pantoea strains. should be standardized to an optical density of 0.3 to ensure optimal bacterial growth inside of the onion after inoculation. The OD might be different for other bacterial strains. </li>
<ul className='ml-6 mt-1 list-inside list-image-bacteriaBullet'><li> <></>To standardize to 0.3 take 90 μL of the resuspended cultures and combine it with 1000 μL of sterile water. This gave around 0.2-0.3 for the strains.</li></ul>
<li> Do a 3x serial dilution to get the cells to 105 CFU/ml (do 3 1:10 dilutions of 100 μL culture to 900 μL water) (Schroeder et al. 2021)</li>
<li> Sterilize the onions by soaking in a 10% bleach solution, rinsing with distilled water, then soaking in a 70% ethanol solution, before rinsing with distilled water again. </li>
<li> Inject the onions with 0.5 mL of the diluted cultures using a new sterile syringe each time. </li>
<li> Place the inoculated onion into a paper bag at the appropriate temperature incubator and monitor results after two weeks. </li>
</ul><br></br>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
</h3>




<h3>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-DMagenta hover:ring-2'><p className='text-white'>Golden Gate Assembly: Part Plasmids<span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span></p>
</Accordion.Title>
<Accordion.Content className='bg-accordion1 text-white'>
<p className = 'underline py-3'>Day 1:</p>
<ul className='list-decimal ml-6'>
<li> Set up Golden Gate reactions in PCR strip tubes. Keep on ice until all reactions have been set up. </li>
<li> Calculate what mass (and therefore volume) of each DNA component is needed such that there is a 2:1 molar ratio of insert(s):backbone </li>
<li> Add reagents following the amounts listed above.</li>
<li> Mix samples well by pipetting, put reaction tubes in thermocycler, and begin Golden Gate assembly program </li></ul><br></br>
<p className = 'underline py-3'>Program should be as follows:</p>
<main className='grid grid-rows-auto border-gray-800 border-2 text-center'>
<div className= 'grid grid-cols-3 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>Step</p><p className='px-6'>Temperature</p><p className='px-6'>Time</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>1</p><p className='px-6'>42°C</p><p className='px-6'>1.5 min</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch '>
<p className='px-6'>2</p><p className='px-6'>16°C</p> <p className='px-6'>3 min</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Cycles 1-2</p><p className='px-6'>-</p><p className='px-6'>Repeat 30x</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>3</p><p className='px-6'>60°C</p><p className='px-6'>5 min</p>
</div>
</main>
<br></br>
<p className = 'underline py-3'>If you are planning to run the reaction overnight, use this program instead:</p>
<div className= 'grid grid-cols-3 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>Step</p><p className='px-6'>Temperature</p><p className='px-6'>Time</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>1</p><p className='px-6'>42°C</p><p className='px-6'>5 min</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch '>
<p className='px-6'>2</p><p className='px-6'>16°C</p> <p className='px-6'>5 min</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Cycles 1-2</p><p className='px-6'>-</p><p className='px-6'>Repeat 30x</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>3</p><p className='px-6'>60°C</p><p className='px-6'>5 min</p>
</div>
<br></br>
<p className = 'underline py-3'>Day 2:</p>
<ul className='list-decimal ml-6'>
<li> If you ran the GGA reaction during the day, you can move onto this step as soon as the reaction is complete!</li>
<li> Transform 2 μL assembly reaction into Electrocompetent or Chemically Competent cells and plate on LB + appropriate antibiotic. </li>
<ul className = "ml-6 list-inside list-image-bacteriaBullet">
<li> <></>Typically, the entry used for our part plasmids is pBTK1001, which has a CamR marker, so plate potential transformants on LB + Cam plates </li>
<li> <></>Typically, we transform into chemically competent cells.</li></ul></ul><br></br>




































<p className = 'underline py-3'>Day 3:</p>
<ul className='list-decimal ml-6'>
<li> Check on GGA reaction mix plates and controls and image appropriately.</li>
<li> View GGA transformants on a blue-light transilluminator and look for GFP-expressing colonies. GFP- colonies should contain the assembled part plasmid. </li>
<li> Do a preliminary screening to see if the part plasmid was assembled correctly by running colony PCR on 2 GFP- colonies from each transformation to see if the plasmid in each contains the insert.</li>
<li> Prepare overnight cultures with the remaining volume of resuspended cells. If colony PCR strongly indicates that the insert is present, plasmids obtained from mini-prepping the next day can be sent out for sequencing </li>
<li> If colony PCR indicates any issues with the part plasmid assembly, miniprepped plasmids can be used to run a BsaI digest as a second attempt at determining if the insert if present </li>
<li> Pick 1 additional isolated GFP- colonies to prepare overnight cultures. </li>
<li> Incubate all cultures overnight in the 37C shaking incubator. </li></ul><br></br>
































<p className = 'underline py-3'>Day 4:</p>
<ul className='list-decimal ml-6'>
<li> Examine overnight cultures of the GFP- colonies on a blue-light transilluminator to confirm that they still do not express GFP </li>
<li> Once the cultures are confirmed to still be GFP-, make stock cultures, and perform plasmid miniprep to obtain the assembled part plasmid.</li></ul><br></br>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
</h3>




<h3>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-DMagenta hover:ring-2'><p className='text-white'>Golden Gate Assembly: 1st Stage Assembly<span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span></p>
</Accordion.Title>
<Accordion.Content className='bg-accordion1 text-white'>
<p className = 'underline py-3'>Day 1: Setting Up GGA Reaction(s)</p>
<ul className='list-decimal ml-6'>
<li> Set up Golden Gate reactions in PCR strip tubes. Keep on ice until all reactions have been set up. </li>
<li> Calculate what mass (and therefore volume) of each DNA component is needed such that there is a 2:1 molar ratio of insert(s):backbone </li></ul><br></br>
<p className = 'underline py-3'>DNA Component Ratios for Each Assembly Reaction</p>
<main className='grid grid-rows-auto border-gray-800 border-2 text-center'>
<div className= 'grid grid-cols-3 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>DNA Component</p>
<p className='px-6'>Desired Moles (fmol)</p>
<p className='px-6'>Plasmid Length (bp)</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>pBTK1028</p>
<p className='px-6'>25</p>
<p className='px-6'>3446</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Type 2 Part Plasmid</p>
<p className='px-6'>50</p>
<p className='px-6'>-</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Type 3 Part Plasmid</p>
<p className='px-6'>50</p>
<p className='px-6'>-</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Type 4 Part Plasmid</p>
<p className='px-6'>50</p>
<p className='px-6'>-</p>
</div>
</main>
<p className = 'underline py-3'>Reagent Volumes for Each Assembly Reaction</p>




<main className='grid grid-rows-auto border-gray-800 border-2 text-center bg-accordion1'>
<div className= 'grid grid-cols-2 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>Reagent</p>
<p className='px-6'>Volume</p>
</div>
<div className= 'grid grid-cols-2 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>dH2O</p>
<p className='px-6'>-</p>




</div>
<div className= 'grid grid-cols-2 bg-lavender text-DMagenta p-2 text-center items-stretch '>
<p className='px-6'>10X T4 DNA Ligase Buffer</p>
<p className='px-6'>2</p>
</div>
<div className= 'grid grid-cols-2 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>pBTK1028/backbone</p>
<p className='px-6'>-</p>
</div>
<div className= 'grid grid-cols-2 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Type 2 Part Plasmid</p>
<p className='px-6'>-</p>
</div>
<div className= 'grid grid-cols-2 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Type 3 Part Plasmid</p>
<p className='px-6'>-</p>
</div>
<div className= 'grid grid-cols-2 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Type 4 Part Plasmid</p>
<p className='px-6'>-</p>
</div>
<div className= 'grid grid-cols-2 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>NEB Golden Gate Assembly Mix (BsaI-Hfv2 and T4 DNA Ligase)</p>
<p className='px-6'>1</p>
</div>
<div className= 'grid grid-cols-2 bg-accordion3 text-white p-2 text-center items-stretch'>
<p className='px-6'>Total</p>
<p className='px-6'>3</p>
</div>
</main><br></br>
<ul className='list-decimal ml-6'>
<li> Add reagents following the amounts listed above.</li>
<li> Mix samples well by pipetting, put reaction tubes in thermocycler, and begin Golden Gate assembly program </li></ul>
<p className='underline py-3'>Program should be as follows:</p>
<main className='grid grid-rows-auto border-gray-800 border-2 text-center'>
<div className= 'grid grid-cols-3 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>Step</p><p className='px-6'>Temperature</p><p className='px-6'>Time</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>1</p><p className='px-6'>42°C</p><p className='px-6'>1.5 min</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch '>
<p className='px-6'>2</p><p className='px-6'>16°C</p> <p className='px-6'>3 min</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Cycles 1-2</p><p className='px-6'>-</p><p className='px-6'>Repeat 30x</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>3</p><p className='px-6'>60°C</p><p className='px-6'>5 min</p>
</div>
</main><br></br>
<p className='underline py-3'>If you are planning to run the reaction overnight, use this program instead:</p>
<main className='grid grid-rows-auto border-gray-800 border-2 text-center'>
<div className= 'grid grid-cols-3 bg-DMagenta text-white p-2 text-center items-stretch'>
<p className='px-6'>Step</p><p className='px-6'>Temperature</p><p className='px-6'>Time</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>1</p><p className='px-6'>42°C</p><p className='px-6'>5 min</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch '>
<p className='px-6'>2</p><p className='px-6'>16°C</p> <p className='px-6'>5 min</p>
</div>
<div className= 'grid grid-cols-3 bg-white text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>Cycles 1-2</p><p className='px-6'>-</p><p className='px-6'>Repeat 30x</p>
</div>
<div className= 'grid grid-cols-3 bg-lavender text-DMagenta p-2 text-center items-stretch'>
<p className='px-6'>3</p><p className='px-6'>60°C</p><p className='px-6'>5 min</p>
</div>
</main><br></br>








<p className = 'underline py-3'>Day 2: Transforming into Component Cells</p>
<ul className='list-decimal ml-6'>
<li> If you ran the GGA reaction during the day, you can move onto this step as soon as the reaction is complete!</li>
<li> Transform 2 μL assembly reaction into Electrocompetent or Chemically Competent cells and plate on LB + appropriate antibiotic. </li>
<ul className = 'ml-6 list-inside list-image-bacteriaBullet'>
<li> <></>Typically, the entry used for our part plasmids is pBTK1001, which has a CamR marker, so plate potential transformants on LB + Cam plates </li>
<li> <></>Typically, we transform into chemically competent cells.</li>
</ul>
</ul><br></br>




<p className = 'underline py-3'>Day 3: Checking on Transformants and Screening Plasmids</p>
<ul className='list-decimal ml-6'>
<li> Check on GGA reaction mix plates and controls and image appropriately.</li>
<li> View GGA transformants on a blue-light transilluminator and look for GFP-expressing colonies. GFP- colonies should contain the assembled part plasmid. </li>
<li> Do a preliminary screening to see if the part plasmid was assembled correctly by running colony PCR on 2 GFP- colonies from each transformation to see if the plasmid in each contains the insert. </li>
<li> Prepare overnight cultures with the remaining volume of resuspended cells. If colony PCR strongly indicates that the insert is present, plasmids obtained from mini-prepping the next day can be sent out for sequencing</li>
<li> If colony PCR indicates any issues with the part plasmid assembly, miniprepped plasmids can be used to run a BsaI digest as a second attempt at determining if the insert if present</li>
<li> Pick 1 additional isolated GFP- colonies to prepare overnight cultures.</li>
<li> Incubate all cultures overnight in the 37C shaking incubator.</li>
</ul><br></br>
<p className = 'underline py-3'>Day 4: Examining Cultures, Making Stocks, and Plasmid Miniprep</p>
<ul className='list-decimal ml-6'>
<li> Examine overnight cultures of the GFP- colonies on a blue-light transilluminator to confirm that they still do not express GFP. </li>
<li> Once the cultures are confirmed to still be GFP-, make stock cultures, and perform plasmid miniprep to obtain the assembled part plasmid.</li></ul><br></br>
</Accordion.Content></Accordion.Panel></Accordion>
</h3>
<h5></h5>


<h4></h4>
<section>References</section>
<Sources
citationText='Schroeder, B. K., Humann, J. L., &amp; du Toit, L. J. (2012). Effects of postharvest onion curing parameters on the development of sour skin and slippery skin in storage. Plant Disease, 96(10), 1548–1555.'
doi = 'https://doi.org/10.1094/pdis-02-12-0117-re'/>
<h5></h5>


<Footer Year='2023'/>
</>
)
}


export default experiments