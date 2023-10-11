'use client';
import Sources from '../components/Sources';
import Figures from '../components/Figures';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const humanPractices = () => {
return (
<>
<Navigation name='iGEM 2023' ></Navigation>
<h1 className="animate-fade-up">Human Practices</h1>
<h4></h4>
<section>Introduction</section>

<h3>This year, our team was inspired by the agricultural legacy of Texas to investigate novel solutions to crop loss using synthetic biology. During our ideation process, our team discovered the devastating impacts of bacterial plant pathogens like fire blight and Pierce’s disease, which can destroy entire crops and each contribute to more than $100 million in annual losses in the United States (Giménez-Romero et. al, 2022; Wallis, 2020).  Current treatments for bacterial pathogens in the United States are also a source of concern, since antibiotics and copper treatments may cause unintended microbial resistance or otherwise harm the surrounding environment (Vu and Oh, 2020).</h3>
<h3>Meanwhile, our team discovered the novel research area of microcins, which have been used by a team at UC Irvine to target specific pathogens without harming nearby microbiota (Vu and Oh, 2020). Acknowledging the need for a targeted, sustainable solution to bacterial pathogens, our team decided to develop a microcin solution to protect our state vegetable, the onion, from the bacterial pathogen Pantoea.</h3>

<h3><main className='grid grid-cols-3 gap-2 place-items-center'>
  <img  className='object-center h-2/3 w-auto border-solid border-BGreen rounded-xl border-2' src="https://static.igem.wiki/teams/4579/wiki/fire-blight-on-apple.jpg"></img>
  <img  className='object-center h-2/3 w-auto border-solid border-BGreen rounded-xl border-2' src="https://static.igem.wiki/teams/4579/wiki/pierce-disease.jpg"></img>
  <img  className='object-center h-2/3 w-auto border-solid border-BGreen rounded-xl border-2' src="https://static.igem.wiki/teams/4579/wiki/onion-center-rot.jpg"></img></main></h3>

<h3>While developing our microcin system, it was essential for our team to gather insight from stakeholders in our project to ensure it was environmentally conscious and well-catered to the needs of our community. To learn more about the day-to-day problems facing agricultural production, we consulted with growers, sellers, and buyers of produce. Next, our team met with representatives from national and international agricultural initiatives to learn more about the implementation and climate surrounding current broad-scale solutions to bacterial plant pathogens. Meanwhile, we delved deeper into the current research on categorizing and treating bacterial pathogens through our meetings with plant pathologists and microcin experts alike. After each meeting, our team considered the implications of stakeholder feedback for our project design, and we worked in an iterative fashion to integrate this feedback into our wet lab approach and project goals. </h3>

<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/igem-23-hp-cycle.jpeg'
figureLegend='Figure 1. Human Practices Correspondence Cycle'
/>

<h3>Approaching the research, our team encountered many questions and issues vis-á-vis our project outline and design providing the opportunity to reach out to and adjust our planning and goals. This is where our Human Practices faction made serious headway, shifting the focus of our project during its own unfolding.</h3>

<Figures
imageSource="https://static.igem.wiki/teams/4579/wiki/igem-23-stakeholders-1.jpeg"
figureLegend="Figure 2. Stakeholders"
/>

<section>Academia:</section>

<h3>The Human Practices Team met with experts in the fields of plant pathology and plant genetics to refine our wet lab protocols and consider the potential benefits and detriments of using microcins to combat agricultural pathogens like pantoea.</h3>

<h6>Discussion with Jennifer Parker, Plant Pathologist and Microcin Expert</h6>

<h3>During our iGEM team’s ideation process, the human practices team met with Jennifer Parker, a Research Scientist in the Davies Lab at the University of Texas at Austin, to discuss bacterial plant diseases of interest and methods used to combat and characterize these pathogens. During this meeting, we discussed the potential of microcin systems to combat common bacterial pathogens such as Xanthomonas, Pseudomonas, and Erwinia, and it became clear that <a className = "font-bold">a microcin product could be a promising solution to various agricultural plights being faced by local Texas farmers</a>. As we delved further into the study and application of microcins, our microcin team continued to consult with Jennifer given her expertise in the novel area of research. Over time, Jennifer became an integral member of the iGEM team, and her role evolved into that of an additional expert advisor for our project. Following our discussion with Dr. du Toit about current biocontrol methods used against Pantoea, the human practices team once again consulted Jennifer on the real world applications of microcins. Specifically, we discussed the feasibility of using common biocontrol Bacillus as a potential future chassis for our microcin system, which would allow farmers to smoothly transition from the application of current products to ours. </h3>

<h6>Discussion with Dr. Schroeder - Plant Pathologist </h6>

<Figures 
  imageSource='https://static.igem.wiki/teams/4579/wiki/roca-and-shroeder-kind-of.jpeg'
  figureLegend=''
/>

<h3>Our meeting with Dr. Schroeder, a plant pathologist from the University of Idaho, was focused on assessing the viability of our wet lab approach, with a particular emphasis on assays. Key points of discussion included <a className= "font-bold">improvements to the Onion Rot Assay</a>, such as modifications in temperature, duration, and inoculation methods/concentrations to enhance the assay results. We discussed our conditions, which included incubation at 25°C and using a toothpick for inoculation, and Dr. Schroeder recommended using conditions of 30-35°C and an OD of 0.3, with inoculation using 0.5 mL in a syringe. We also learned how to standardize onion samples at 0.3 OD to achieve a concentration of 10^8 CFU/mL before inoculation. Furthermore, we began conducting cultures on agar plates to ensure culture purity and incorporated water controls and non-inoculated controls into our experiments. We also discussed the <a className= "font-bold">onion harvesting timeline and process and explored the potential of utilizing current bacteriocins</a>. Dr. Schroeder was supportive of our project, describing it as a <a className= "font-bold">"neat idea."</a> </h3>

<h3>Later on, as our team focussed on finalizing our microcin system, our assays team reconnected with Dr. Schroeder for further insight on <a className= "font-bold">how to test our microcins on onions themselves, as a proof of concept for a potential microcin product</a>. In this follow up, Dr. Schroeder helped to clarify details about the process of pantoea infecting an onion plant, such as how infection usually occurs in the fields rather than during harvest, and how best to employ microcins in the field to prevent infection from pantoea. Dr. Schroeder proposed that we consider a leaf treatment that could be present on the plant in the event that the plant is wounded, and thus be at the wound site to kill any pantoea that may enter.</h3>

<h6>Discussion with Dr. Lindsey du Toit - Plant Pathologist and Stop the Rot Coordinator</h6>
<Figures
imageSource="https://static.igem.wiki/teams/4579/wiki/meeting-with-dr-du-toit.jpg"
figureLegend=""
/>
<h3>Our conversation with Dr. Lindsey du Toit, a plant pathologist and coordinator for the "Stop the Rot" program, had a dual focus on the onion rot issue in the U.S. and the viability of practical applications of our microcin solution. <a className="font-bold">Modifications to the Red Onion Necrosis Assay</a> were discussed, including the need for increased moisture by adding wet paper towels and conducting assays in Tupperware bins, extending the duration from 3 to 5 days, and raising the temperature from 25°C to 30°C. We also explored the bacterial species used in <a className="font-bold">Lifegard (Bacillus mycoides) and its potential viability as a chassis for our microcin system</a>. Our discussion delved into the onion cultivation process, and we established a connection with Subas Malla, a key contact for the Texas "Stop the Rot" initiative.</h3>

<section>Farmers:</section>

<h3>Our Human Practices Team also reached out to local Texas farmers to discuss the applicability of our proposed solution to their current cultivation practices and to gauge the general attitude of Texas farmers toward synthetic biology products.</h3>

<Figures
imageSource="https://static.igem.wiki/teams/4579/wiki/texas-agriculture-graphic.jpg"
figureLegend="Figure 3. Texas’ Agricultural Land Distribution"
/>

<h6>Discussion with Rising Sun Vineyard - Local Vineyard</h6>

<h3>Our initial discussion with Shayna, a representative from local Rising Sun Vineyard, revolved around assessing the viability of our microcin system for Texas agriculture. We discussed current issues facing vineyards and small scale agricultural producers in general, including weather damage, climate concerns, fungal diseases, and mold. <a className="font-bold">Vineyards like Rising Sun also combat bacterial pathogens, such as Xyllela, which can be spread through sharpshooter infestations and destroy entire crops in a matter of days.</a> We talked about the current methods used to deal with Xylella and sharpshooter infestations, which often involve antibiotics administered through the water source or the use of resistant varietals, although the flavor of these American varietals is often considered inferior to European varietals.</h3>

<Figures
imageSource="https://static.igem.wiki/teams/4579/wiki/rising-sun-meeting-with-shayna.jpg"
figureLegend=""
/>

<h3>After this initial meeting, we arranged for our team to make an excursion to Rising Sun Vineyard to see the production and protection of agriculture in practice, and we met owner Steve Frintz. During this excursion, we further discussed the viability of a microcin product in the eyes of the Rising Sun Representatives, and they expressed <a className="font-bold">interest in a potential microcin product that could be applied through a spray or drip to mimic currently available treatments for bacterial pathogens.</a> Overall, although our project could not address all problems faced by the growers at Rising Sun Vineyard, our visit established the potential for a microcin solution to lessen the burden experienced by growers as they adapt to an unpredictable environment</h3>

<Figures
imageSource="https://static.igem.wiki/teams/4579/wiki/sunvineyards-1.jpg"
figureLegend=""
/>

<h6>Discussion with Buyers and Sellers of local produce, Mueller Farmers’ Market</h6>

<h3>To gauge public perception of our strategy for tackling bacterial pathogens in agriculture, our team visited the Texas Farmers’ Market at Mueller and interviewed buyers and sellers of local produce. Prior to this visit, we considered the shifting perception of GMOs in the United States, in which recent legislative changes now require the labeling of GMO products [9]. Given these recent changes, our team was interested in how <a className="font-bold">public perception of GMOs might affect the community’s openness to our microcin solution</a>, and we used a brief discussion about GMOs to contextualize our conversations with farmers’ market attendees.</h3>

<h3>Our discussion with one local seller of organic produce highlighted the potential skepticism our solution might face due to being labeled as a GMO or GM biocontrol product. Specifically, this seller was concerned about the consequences of our product, and of all GMOs, on human health, and she expressed that <a className="font-bold">she held a “poor” perception of GMOs in general</a>. However, given the clarification that our solution would not involve genetically modifying the crop itself, and instead would only modify a product that could be applied and washed off of the crop, <a className="font-bold">the seller found our idea “interesting.”</a> Finally, the seller expressed concern about the application process of our product adding time to farmers’ long days, but maintained that she would be interested to learn more about our project if provided with educational materials such as a website.</h3>

<h3>Meanwhile, our <a className="font-bold">conversations with buyers of local produce offered a more promising outlook on the public perception of our microcin solution.</a> Buyers seemed familiar with the issue of bacterial resistance, and were open to potential GMO alternatives given the adverse environmental effects of bactericides and pesticides. As one buyer acknowledged, the big hurdle for our project would be overcoming the public perception of GMOs in our attempt to explain and advertise a microcin product. In the eyes of another buyer, the common practice of <a className="font-bold">“lumping anything that's genetically modified into one category and saying we aren't going to do that is too extreme,”</a> but it is still important to consider the risks of implementing a GM product. Overall, this buyer emphasized the known risks and shortcomings of current methods for controlling bacterial pathogens, and was adamant on the need to explore alternative solutions.</h3>

<section>Institutions:</section>

<h3>Finally, our team organized meetings with leaders to explore how our microcin solution aligns with current initiatives to control plant pathogens nationally and globally, and to discuss how our solution may be received by the greater agriculture market due to policy guidelines.</h3>

<h6>Discussion with Dr. Subas Malla, Plant Geneticist and Stop the Rot contributor</h6>

<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/meeting-with-dr-malla.jpg'
figureLegend='Zoom Meeting with Dr. Malla'
/>

<h3>Our conversation with Dr. Subas Malla focused on the local Texas onion rot issue and the coordination of pantoea positive and negative controls. We discussed how onion center rot is not as prominent in Texas due to its lower humidity levels and explored the relevance of Burkholderia in this context. The modularity of our system was considered, and we noted that while GMO products have not been extensively used for bacterial control, good bacteria (biocontrol strains) have shown promise in controlling pathogenic bacteria. <a  className= "font-bold">We discussed the potential interest from growers if our solution is established in the field without harming the plants</a>. Agreements were made to send positive and negative control strains of pantoea, with plans for follow-up.</h3>


<h6>Discussion with Dr. Mercedes Roca - Agricultural Biotechnology Policy Expert and Plant Pathologist</h6>

<Figures 
  imageSource='https://static.igem.wiki/teams/4579/wiki/roca-and-shroeder-kind-of.jpeg'
  figureLegend=''
/>

<h3>Our conversation with Dr. Mercedes Roca, an expert in agricultural biotechnology policy and plant pathology, centered on the narrative of our project. We discussed the environmental destruction and destabilization caused by climate change and its implications for global food security. We touched upon the misconception that many people, particularly in urban areas of the United States, take food production for granted and often misunderstand the role of GMOs in agriculture. Texas' significance in agriculture was emphasized, with statistics highlighting its importance to both the U.S. and the world. We acknowledged Texas' history of agricultural advancements, including the work of Norman Borlaug at Texas A&M, and the consequences of the Green Revolution, which increased agricultural productivity but led to excessive fertilizer and pesticide use. We underscored the concept of One Health, emphasizing the interconnectedness of the environment, animal and agricultural health, and human well-being. Our project's objective to address contemporary agricultural issues, such as food production, bacterial pathogens, and antibiotic consequences through the development of a microcin system, was highlighted.</h3>

<h3>After getting in contact with <a className="font-bold">Dr. Maria Mercedes Roca</a>, a plant pathologist and agricultural biotechnology policy expert, it became clear that many people, particularly in urban areas of the United States and across the Globe, take food production for granted, often failing to recognize the intricacies of agriculture. According to Dr. Roca, this misconception has manifested in the form of opposition to genetically modified organisms (GMOs), with “activists” mistakenly framing the shortcomings of agriculture as primarily one of distribution rather than production. This misperception is especially threatening in a state like Texas, where <a className="font-bold">agriculture comprises a majority of the land in Texas (74% of the state’s 268,581 mile2)</a> and a large portion of the population’s career involvement as 14% of working Texans are directly implicated in an agricultural-related job (Hundl, 2019;” Texas Ag Stats,” 2023). Texas plays a vital role in U.S. and global agriculture, drawing from a rich history of agricultural advancements, including the work of Norman Borlaug at Texas A&M.</h3>
<h5></h5>
<h4></h4>

<section>References</section>
<Sources
citationText="Aktar, M. W., Sengupta, D., & Chowdhury, A. (2009). Impact of pesticides use in agriculture: their benefits and hazards. Interdisciplinary toxicology, 2(1), 1–12.
"
doi="https://doi.org/10.2478/v10102-009-0001-7"
/>
 
<Sources
citationText="Belo, T., du Toit L., Waters T., Michael D., Schacht B., LaHue G., Reducing the risk of onion bacterial diseases through managing irrigation frequency and final irrigation timing, Agricultural Water Management, Volume 288, 2023, 108476,ISSN 0378-3774,"
doi="https://doi.org/10.1016/j.agwat.2023.108476"
/>

<Sources
citationText="Buttimer, C., McAuliffe, O., Ross, R. P., Hill, C., O'Mahony, J., & Coffey, A. (2017). Bacteriophages and Bacterial Plant Diseases. Frontiers in microbiology, 8, 34."
doi=" https://doi.org/10.3389/fmicb.2017.00034"
/>
<Sources
citationText="Giménez-Romero, A., Galván, J., Montesinos, M. et al. Global predictions for the risk of establishment of Pierce’s disease of grapevines. Commun Biol 5, 1389 (2022)."
doi="https://doi.org/10.1038/s42003-022-04358-w"
/>
<Sources
citationText="Gray, E. 2023, March 2. Global climate change impact on crops expected within 10 years, NASA study finds – climate change: Vital signs of the planet. NASA."
doi="https://climate.nasa.gov/news/3124/global-climate-change-impact-on-crops-expected-within-10-years-nasa-study-finds/#:~:text=en%20espa%C3%B1ol%20aqui.-,Climate%20change%20may%20affect%20the%20production%20of%20maize%20(corn)%20and,see%20growth%20of%20about%2017%25"
/>

<Sources
citationText="Hickey, C., Blaauw, B., Brannen, P., 2019. Pierce’s Disease of Grape: Identification and Management."
doi="https://secure.caes.uga.edu/extension/publications/files/pdf/B%201514_1.PDF"
/>


<Sources
citationText="Hundl, W. 2019, Jul 17. Texas Agriculture – Growing in Many Ways. U.S. Department of Agriculture
"
doi="https://www.usda.gov/media/blog/2019/07/17/texas-agriculture-growing-many-ways#:~:text=The%20Lone%20Star%20State%20ranks,the%20state's%20268%2C581%20square%20miles)."
/>


<Sources
citationText="Schupska, S. 2019. Grant to boost Vidalia onions. Farm Progress.
"
doi="https://www.farmprogress.com/vegetables/grant-to-boost-vidalia-onions"
/>


<Sources
citationText="Schwartz, H. 2019. Center Rot Onion. PlantDisease."
doi="https://www.plantdiseases.org/center-rot-onion-1"
/>


<Sources
citationText="Singh, B.K., Delgado-Baquerizo, M., Egidi, E. et al. Climate change impacts on plant pathogens, food security and paths forward. Nat Rev Microbiol 21, 640–656 (2023). "
doi="https://doi.org/10.1038/s41579-023-00900-7"
/>




<Sources
citationText="Staehlin B., Gibbons J., Rokas A., O’Halloran T., Slot J., Evolution of a Heavy Metal Homeostasis/Resistance Island Reflects Increasing Copper Stress in Enterobacteria, Genome Biology and Evolution, Volume 8, Issue 3, March 2016, Pages 811–826,"
doi=" https://doi.org/10.1093/gbe/evw031"
/>


<Sources
citationText="2023. How GMOs Are Regulated in the United States. U.S. Food and Drug Adminstration."
doi="https://www.fda.gov/food/agricultural-biotechnology/how-gmos-are-regulated-united-states"
/>


<Sources
citationText="2023. Texas Ag Stats. Texas Department of Agriculture. "
doi="https://www.texasagriculture.gov/About/Texas-Ag-Stats#:~:text=1%20of%20every%207%20wo
rking,in%20an%20agriculture%2Drelated%20job."
/>


<Sources
citationText=" Wallis, A., Carroll, J., Cox, K. 2020. Cornell University Library. "
doi="https://ecommons.cornell.edu/items/079c9763-8cd8-4028-a779-e9c32aeaf584"
/>


<Sources
citationText="Vu, N. T., & Oh, C. S. 2020. Bacteriophage Usage for Bacterial Disease Management and Diagnosis in Plants. The plant pathology journal, 36(3), 204–217."
doi=" https://doi.org/10.5423/PPJ.RW.04.2020.0074"
/>

<h5></h5>
<Footer Year='2023'/>
</>
)
}

export default humanPractices