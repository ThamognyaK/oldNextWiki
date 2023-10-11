'use client';
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel';
import Cards from '../components/Cards';
import Figures from '../components/Figures';
import AccordianFigure from '../components/AccordianFigure';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Sources from '../components/Sources';
import { Accordion } from 'flowbite-react';




const engineering = () => {
return (
<>
<Navigation name = 'iGEM 2023'/>
<h1 className='animate-fade-up'>Engineering Success</h1>
<h4 className = 'pb-10'></h4>
<h3 className='flex justify-center'></h3>
<h3 className='flex justify-center'><img className='w-1/3 h-auto rounded-full' src='https://static.igem.wiki/teams/4579/wiki/overall-dbtl-1.png'/></h3>
<section>Introduction</section>
<h3>ITo combat plant pathogens of interest using microcins, our team underwent <a className='font-bold'>three distinct phases</a>  in our engineering process (Figure 1). </h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/engineering-phases-overview-1.png'
figureLegend='Figure 1. Overview of the three phases of our engineering process. Created with BioRender.com.'
/>
<h3>In our first phase, we redesigned <a className='font-bold'> an existing two-plasmid microcin secretion system to be more modular</a> (Kim et al. 2023). This enabled us to easily swap in different microcins and expression regulators without needing to alter the rest of our system’s genetic circuitry. With the foundation set by our redesigned system, our second phase centered around <a className='font-bold'>predicting, implementing, and testing microcins that could potentially target our pathogens of interest</a>. In tandem with this second phase, we also went through the third phase of our process, in which we <a className='font-bold'>adapted optimized inducible promoters for use in our system</a> (Meyer et al., 2019). </h3>
<h3>Each of our phases involved at least one iteration of the <a className='font-bold'>Design, Build, Test, and Learn (DBTL) cycle</a>. In general, we relied on <a className='font-bold'>Golden Gate Assembly (GGA)</a> (Engler et al. 2008, Engler et al. 2009) to build the specific constructs used during each phase (Figure 2). To examine whether the aims of each phase were met, we often conducted <a className='font-bold'>zone of inhibition (ZOI)</a> assays that allowed us to observe whether a microcin’s behavior aligned with our expectations (Figure 2). When the results of our testing procedures suggested the presence of problems, we reexamined relevant literature, our initial designs, and/or our testing methods to inform the changes we needed to make. </h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/gga-zoi.png '
figureLegend='Figure 2. Overview of the Golden Gate Assembly (GGA) cloning process used to build our DNA constructs and the ZOI assay procedure used to test them. Created with BioRender.com.'/>
<section>Phase 1: Redesigning an Existing Modular Two-Plasmid Microcin Secretion System </section>
<h3>We improved the modularity of the existing two-plasmid microcin V (MccV) secretion system (Kim et al. 2023) by specifically reengineering the microcin-expression plasmid of that system. To do so, we created <a className='font-bold'>a generalized scheme</a> (Figure 3) for how the genetic components of microcin expression are assembled together in a transcriptional unit. We then demonstrated that MccV was still effective in that scheme. See the <a className='font-bold text-DMagenta underline hover:no-underline' href='https://2023.igem.wiki/austin-utexas/description'>Project Description Page</a> for more on the original system. </h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/parts-in-the-two-plasmid-system.png'
figureLegend='Figure 3. Our general assembly schema for our microcin expression plasmid. Created with BioRender.com.'/>
<h3><Accordion collapseAll>
<Accordion.Panel >
<Accordion.Title className='text-white bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4'><p className='text-darkWhite'>
Phase 1 Engineering Cycle <span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span> </p>
</Accordion.Title>
<Accordion.Content className='bg-DMagenta text-darkWhite'>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion1 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite '>Design <span className = 'text-right text-sm text-white underline align-right'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion1 text-darkWhite'>
<p>We designed primers to amplify the following <a className = 'italic'>E. coli</a> genes from the existing MccV secretion system plasmids: <a className = 'italic'>cvaC</a> (MccV) and <a className = 'italic'>cvi</a> (immunity protein for MccV). Because the nucleotide sequence for the CvaC15 signal peptide was too short to design primers for, we designed a pair of complementary oligonucleotides that could be annealed together to form the part. For each part, we ensured that the primers or oligonucleotides added BsmBI and BsaI restriction sites that produce the correct sticky ends for the given part type defined by our <a className='font-bold'>chosen GGA overhang syntax</a>, which is derived from the <a className='font-bold'>Bee Toolkit (BTK)</a> (Leonard et al., 2018). See the <a className='font-bold text-lavender underline hover:no-underline' href='https://2023.igem.wiki/austin-utexas/parts'>Parts Page</a> for more details on our syntax and how it defines and organizes the different types of parts in our microcin expression plasmid. When <a className = 'italic'>cvaC</a>, cvi, and CvaC15 are assembled according to this scheme, they give rise to a full transcriptional unit for expressing MccV. </p>
<br></br>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion2 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Build <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion2 text-darkWhite'>
<p>Using the primers we designed, we performed standard Polymerase Chain Reactions (PCR) to amplify <a className = 'italic'>cvaC</a> and <a className = 'italic'>cvi</a> as parts adapted to our syntax. To obtain our CvaC15 part, we used a slow-cooling thermocycler protocol to anneal the two complementary single-stranded oligonucleotides we designed together. Once we confirmed that the sizes of each of our parts were correct using gel electrophoresis (Figure 4), we purified them using the Zymo DNA Clean and Concentrate Kit.</p>
<AccordianFigure
imageSource='https://static.igem.wiki/teams/4579/wiki/phase-1-gel-images.png'
figureLegend='Figure 4. Successful synthesis of the components of our redesigned MccV expression plasmid. The gel electrophoresis results indicate that the PCR products or annealed oligonucleotides for cvaC (306 bp), cvi (270 bp), and CvaC15 (84 bp) are the appropriate size given the addition of BsmBI and BsaI restriction sites to them. Unlabeled wells contain amplified PCR products not used in our constructs.'/>
<p>We then created two basic parts, one consisting of both <a className = 'italic'>cvaC</a> and <a className = 'italic'>cvi</a> and the other consisting of CvaC15, by using GGA to clone the parts into a high-copy GFP-dropout entry vector (Leonard et al., 2018) via BsmBI digestion-ligation. Once each basic part sequence was confirmed to be correct (Figure 5A and 5B), we used GGA again to assemble these three parts together, along with BTK constitutive promoter (CP25) and terminator (<a className = 'italic'>rpoC</a> ) parts, into a BTK low-copy backbone via BsaI digestion-ligation (Leonard et al., 2018). The resulting assembly formed a constitutive MccV expression plasmid that followed our assembly scheme. Using whole plasmid sequencing, we confirmed that the plasmid we designed had been assembled correctly (Figure 5C).</p>
<AccordianFigure
imageSource='https://static.igem.wiki/teams/4579/wiki/phase-1-sequencing-3.png '
figureLegend='Figure 5. Successful equencing results for our MccV expression plasmid. The construct that we designed in-silico is on top and the sequencing result is on the bottom. The sequencing service we used uses Oxford Nanopore technology, which can have errors in reading stretches of repeated nucleotides. This commonly results in the appearance of mismatches when aligning the sequences, so we manually examined mismatched regions and confirmed that they did not affect the transcriptional unit.'/>
<p>With our correctly assembled constitutive MccV expression plasmid obtained, we then electroporated the plasmid into a strain of <a className='italic'>E. coli</a> W3110 we obtained that contained pSK01. After overnight incubation at 37C on doubly selective media, we picked colonies, prepared freezer stocks, and reconfirmed that the new strains could be grown in liquid culture with the same antibiotics. We followed the same procedure for developing a strain of the agricultural biocontrol <a className='italic'>Pantoea</a> vagans C9-1 that can also express and secrete MccV, just with the added step of having to also electroporate pSK01 into the strain. </p>
<AccordianFigure
imageSource=''
figureLegend='[1586 + MccV, 1595 + SS, 1595 + SS + MccV tansformation plates] '/>
<p>In addition to constructing our design of the microcin expression plasmid, we assembled our araC and pTet promoters into transcriptional units with CFP in hopes of being able to measure the levels of expression caused by these promoters.</p>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion3 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Test <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion3 text-darkWhite'>
<p className='underline'>Testing MccV in Our System</p>
<p>To test our successfully redesigned microcin two-plasmid secretion system, we used our <a className='italic'>E. coli</a> W3110 and <a className='italic'>P. vagans</a> C9-1 strains containing our completed MccV secretion system with MccV in a ZOI assay. As detailed in the <a className='font-bold text-lavender underline hover:no-underline' href='https://2023.igem.wiki/austin-utexas/experiments'>Experiments Page</a>, we spotted concentrated overnight culture of each strain (referred to as “predator” strains) onto LB plates topped with a layer of soft agar containing the target strain (referred to as the “prey” strain) of the microcin, which, for MccV, was <a className='italic'>E. coli</a> W3110. The plates were then left to incubate at 37C overnight.</p>
<AccordianFigure
imageSource='https://static.igem.wiki/teams/4579/wiki/untitled-28.png'
figureLegend='Figure 6. Result of ZOI assays with E. coli W3110 (left) and P. vagans C9-1 (right) strains containing our MccV secretion system (+MccV/+SS). Strains that either had just the MccV expression plasmid and pSK01 (+MccV/-SS) or neither plasmid (-MccV/-SS) were also spotted on the plate to serve as negative controls. A strain containing the original two-plasmid MccV secretion system was also spotted as a positive control.'
/>
<p>After overnight incubation, the strains containing our complete system were observed to have created a visible ZOI.</p>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion4 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Learn <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion4 text-darkWhite'>
<p>The production of a ZOI by both strains containing our redesigned MccV secretion system indicated that <a className='font-bold'>MccV, when used in our system, was still able to be expressed, secreted, and effective against its target</a>. This demonstrated that adapting the components of microcin expression to the syntax and assembly scheme we created still allows the two-plasmid microcin secretion system to be functional. As such, we learned that <a className='font-bold'>our version of the system could be used for testing other microcins</a>. </p><br></br>
<p>Additionally, because our system was shown to also function in the in the P. vagans C9-1 strain, we also confirmed that <a className='font-bold'>our system works outside of</a> <a className='italic font-bold'>E. coli</a> <a className='font-bold'>and that</a> <a className='italic font-bold'>P. vagans</a> <a className='font-bold'>C9-1 can be a suitable final chassis</a> for our system. As such, these results had also given us evidence that our <a className='font-bold'>system was successfully constructed and functions as intended</a>. </p><br></br>
</Accordion.Content>
</Accordion.Panel>
</Accordion>
</Accordion.Content>
</Accordion.Panel>
</Accordion></h3>
<section>Phase 2: Incorporating Predicted Microcins  </section>
<h3>After confirming that our redesigned microcin secretion system worked, we applied our GGA syntax to microcins predicted from <a className = 'italic'>cinful</a> (Cole et al., 2022) to enable them to assemble into microcin expression plasmid according to our schema. See the <a className='font-bold text-DMagenta underline hover:no-underline' href='https://2023.igem.wiki/austin-utexas/description'>Project Description Page</a> for more on cinful. Initially, we predicted microcins that could potentially target the following <a className='font-bold'>4 strains of pathogenic Pantoea:</a> <a className = 'italic'>P. agglomerans</a> PNG 92-11, <a className = 'italic'>P. allii</a> PNA 200-10, <a className = 'italic'>P. ananatis</a> LMG 2665, and <a className = 'italic'>P. ananatis</a> PNA 97-1R. Later in our project, we also predicted microcins for strains of <a className='font-bold'>pathogenic</a> <a className = 'italic font-bold'>Erwinia amylovora</a> <a className='font-bold'>and</a> <a className = 'italic font-bold'>Xanthomonas</a>. After several cycles of the DBTL, we were <a className = 'italic font-bold'>able to demonstrate promising antimicrobial activity against a target</a>.
</h3>
<h3><Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4'><p className='text-darkWhite'>
Our Initial Engineering Cycle <span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span> </p>
</Accordion.Title>
<Accordion.Content className='bg-DMagenta text-darkWhite'>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion1 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Design <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion1 text-darkWhite'>
<p>In hopes of maximizing the likelihood that the Pantoea microcins we chose to work with would be effective, we <a className='font-bold'>filtered</a> <a className='font-bold italic'>cinful’s</a> <a className='font-bold'>output</a> for microcins that met the following criteria:  </p>
<ul className = "list-inside mx-2 list-image-bacteriaBullet">
<li> <></> A <a className='font-bold'>signal peptide sequence was identified</a> at the beginning of the microcin (“signalMatch = TRUE”)</li>
<li> <></> The HMMER biosequence analysis program used by <a className = 'italic'>cinful</a> found that the microcin amino acid sequence had a <a className='font-bold'>significant enough degree of similarity</a> with any of the 10 known microcins (“hmmerHit = TRUE”) </li>
</ul><br></br>
<p>The filtered microcins were then aligned using MUSCLE (Madeira et al. 2022) to ensure that the microcins we selected were not duplicates of one another. The alignment indicated that there were <a className='font-bold'>six unique microcin sequences</a>, so we simply chose to work with all six.</p><br></br>
<AccordianFigure
imageSource='https://static.igem.wiki/teams/4579/wiki/pantoea-muscle-alignment.png'
figureLegend='Figure 7. MUSCLE alignment of the amino acid sequences of the filtered Pantoea microcins predicted by cinful, with the strain of origin of each microcin indicated on the left. The 90 filtered microcins were clustered into 6 unique sequences.'/>
<p>To adapt these microcins to our assembly scheme, we removed the native signal peptide sequence at the beginning of each microcin AA sequence. This allows the microcin to become fused with our system’s CvaC15 signal peptide instead. We then obtained the original nucleotide sequence for each microcin by using information in <a className = 'italic'>cinful's</a> output to locate the microcin sequence in its original genome. We then added BsmBI and BsaI restriction sites that produce the correct sticky ends according to our syntax to the sequences. Finally, we then had them synthesized commercially as gBlocks by Integrated DNA Technologies (IDT).</p>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion2 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Build <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion2 text-darkWhite'>
<p>After resuspending our <a className='italic'>Pantoea</a> microcin gBlocks, we created basic parts of each microcin by using GGA to clone each into a high-copy GFP-dropout entry vector (Leonard et al., 2018) via BsmBI digestion-ligation. Once each basic microcin part sequence was confirmed to be correct, we used GGA again to assemble each microcin with our CvaC15 part, the CP25 promoter, and the rpoC terminator, into a BTK low-copy backbone via BsaI digestion-ligation (Leonard et al., 2018). The resulting assemblies formed constitutive microcin expression plasmids that followed our assembly scheme. Using whole plasmid sequencing, we confirmed that the plasmid we designed had been assembled correctly. </p><br></br>
<AccordianFigure imageSource='https://static.igem.wiki/teams/4579/wiki/phase-2-sequencing.png' figureLegend='Figure 9. Successful sequencing results for all 6 Pantoea microcin expression plasmid. The constructs that we designed in-silico is on top and the sequencing result is on the bottom. For reasons described in Figure 5, we manually examined mismatched regions and confirmed that they did not affect the transcriptional unit.'/><br></br>
<p>We then electroporated each Pantoea microcin expression plasmid into a strain of <a className = 'italic'>E. coli</a> DH5α containing pSK01. </p><br></br>
<AccordianFigure imageSource='' figureLegend='[DH5α + Pantoea Mccs transformation plates]'/><br></br>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion3 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Test <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion3 text-darkWhite'>
<p>To test whether the <a className = 'italic'>Pantoea</a>  microcins were effective against any of the 4 pathogenic <a className = 'italic'>Pantoea</a>  strains we had, we used the <a className = 'italic'>E. coli</a> DH5α strains we made in ZOI assays with each pathogen. For each of the 4 pathogens, we spotted concentrated overnight culture of each strain (referred to as  “predator” strains) onto LB plates topped with a layer of soft agar containing the given pathogen. The plates were then left to incubate at 37C overnight.</p><br></br>
<AccordianFigure imageSource='' figureLegend='[Mcc01-06 against 1597-1600 ZOIs]'/><br></br>
<p>After overnight incubation, an obvious ZOI was not produced by any of the microcins against any of the pathogenic <a className='italic'>Pantoea</a> strains. However, it did seem that a very weak/small ZOI might have been produced by the strain expressing Mcc04 when it was spotted on <a className='italic'>P. agglomerans</a> PNG 92-11 and <a className='italic'>P. ananatis</a> PNA 97-1R.</p>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion4 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Learn <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion4 text-darkWhite'>
<p>The lack of clear ZOIs indicated that none of the <a className='italic'>Pantoea</a> microcins, except potentially Mcc04, were effective against any of our 4 pathogenic <a className='italic'>Pantoea</a> strains. Since the ZOI generated by Mcc04 against <a className='italic'>P. agglomerans</a> PNG 92-11 and <a className='italic'>P. ananatis</a> PNA 97-1R. was very small and faint, <a className='font-bold'>it was inconclusive whether the microcin was effective against those two strains</a>. After revisiting microcin testing literature and discussing our results with microcin researcher <a className='italic'>Jennifer Parker</a>, we learned that observing microcin effectiveness <a className='italic'>can be influenced by a number of factors</a> (Kim et al. 2022). These factors primarily included the following:.</p><br></br>
<ul className='list-inside list-image-bacteriaBullet'>
<li>Relative concentrations of the microcin secretor and target strains</li>
<li>Access to the appropriate outer membrane receptor</li>
<li>Diffusibility of the microcin through the medium</li>
<li>Inhibition of the microcin secretor strain</li>
</ul><br></br>
<p>From the moment we observed our initial results to the end of the iGEM 2023 season, we attempted to address each of these factors in hopes of obtaining a more definitive result. In doing so, we went through multiple cycles of modifying our testing procedures or designing new parts for our system. The results of these cycles led us to believe that Mcc04 may have weak antimicrobial activity, and we learned that one way to prove such is to <a className='font-bold'>show that providing an immunity protein lessens inhibition</a> (Parker & Davies 2022). This has led us to our current cycle (Figure #), which has revolved around <a className='font-bold'>incorporating an immunity protein (IP) into our Mcc04 expression plasmid</a>.</p>
<AccordianFigure
imageSource=''
figureLegend='[Figure showing the change we made, the result, and what it led us to, See Results Page for more information on results of the various changes made to our testing procedures.]'/>
<ul className='list-inside list-image-bacteriaBullet'>
  <li>Relative concentrations of the microcin secretor and target strains → ZOI optimization</li>
<li>Access to the appropriate outer membrane receptor → DIP</li>
<li>Diffusibility of the microcin through the medium → Growth curves</li>
<li>Inhibition of the microcin secretor strain → Immunity protein</li>
</ul>
</Accordion.Content></Accordion.Panel></Accordion>
</Accordion.Content></Accordion.Panel></Accordion></h3>


<h3><Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4'>
<p className='text-darkWhite'>
Our Current Engineering Cycle <span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span> </p>
</Accordion.Title>
<Accordion.Content className='bg-DMagenta text-darkWhite'>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion1 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Design <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion1 text-darkWhite'>
<p>We incorporated an IP into our Mcc04 expression plasmid in hopes of showing decreased inhibition of the secretor strain when it is present. This, in turn, would allow us to demonstrate the antimicrobial activity of Mcc04 by indicating that immunity is needed to lessen inhibition. To find a likely IP for Mcc04, we manually searched the genome sequence of the strain of origin for open reading frames near Mcc04 and its native secretion system components. See the <a className='font-bold text-lavender underline hover:no-underline' href='https://2023.igem.wiki/austin-utexas/results'>Results Page</a> for more on how we found an IP candidate.</p><br></br>
<AccordianFigure 
imageSource='https://static.igem.wiki/teams/4579/wiki/immunity-protein-in-the-genome.png'
figureLegend='Figure 12. Location of the immunity protein candidate for Mcc04 in the genome of a strain of origin.'/>
<p>To adapt the candidate to our assembly scheme, we designed a DNA sequence that consisted of Mcc04, its IP, an RBS and spacer sequence between the two, and BsmBI and BsaI restriction sites that produce the correct sticky ends according to our syntax for microcin parts. We then had the final sequence synthesized commercially as a Gene Fragment by Twist Biosciences.</p><br></br>
<AccordianFigure
imageSource=''
figureLegend='[Figure of Mcc04 + IP part]'/>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion2 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Build <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion2 text-darkWhite'>
<p>After resuspending our Mcc04+IP Gene Fragment, we created a basic part of it by using GGA to clone it into a high-copy GFP-dropout entry vector (Leonard et al., 2018) via BsmBI digestion-ligation. Once its basic part sequence was confirmed to be correct, we used GGA again to assemble Mcc04+IP with our CvaC15 part, the CP25 promoter, and the rpoC terminator, into a BTK low-copy backbone via BsaI digestion-ligation (Leonard et al., 2018). The resulting assembly formed a microcin expression plasmid that expressed both Mcc04 and its IP, all while still following our assembly scheme. Using whole plasmid sequencing, we confirmed that the plasmid we designed had been assembled correctly.</p><br></br>
<AccordianFigure
imageSource=''
figureLegend='[Figures showing sequencing results/part plasmid & first stage assembly transformations??]'/><br></br>
<p>We then electroporated the new plasmid into strains of <a className='italic'>E. coli</a> DH5α, <a className='italic'>E. coli</a> W3110, and <a className='italic'>P. agglomerans</a> PNG 92-11 containing pSK01.</p>
<AccordianFigure
imageSource=''
figureLegend='[Figure showing transformation plates]'/>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion3 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Test <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion3 text-darkWhite'>
<p>We conducted 14-hour growth curve assays to compare the growth of the <a className='italic'>P. agglomerans</a> PNG 92-11 Mcc04-secretor strains with and without the IP. This allowed us to observe whether the growth inhibition of <a className='italic'>P. agglomerans</a> PNG 92-11 caused by Mcc04 on its own (Fig showing intermediate cycles above) can be remedied by providing immunity. This, in turn, also helped suggest whether the inhibition caused by Mcc04 is due to antimicrobial activity. </p> <br></br>
<p>The results of repeated growth curve assay indicate that the growth of <a className='italic'>P. agglomerans</a> PNG 92-11 expressing and secreting Mcc04 is no longer observed when the IP is expressed.</p>
<AccordianFigure imageSource='' figureLegend='[Growth curve with 1597 + SS + Mcc04 + IP]'/><br></br>
<p>We also conducted ZOI assays using the <a className='italic'>E. coli</a> Mcc04-secretor strains with and without the IP. This allowed us to examine whether expression of the IP would generate a more visible and reproducible ZOI than when it is not expressed. Following the improvements to the ZOI procedure we made (Fig showing intermediate cycles above), we spotted highly concentrated overnight culture of each strain onto LB plates topped with a layer of soft agar containing a highly diluted concentration of either <a className='italic'>P. agglomerans</a> PNG 92-11 or <a className='italic'>P. ananatis</a> PNA 97-1R cells. The plates were then left to incubate at 37C overnight. </p> <br></br>
<p>After overnight incubation, a faint ZOI had been generated by the <a className='italic'>E. coli</a> DH5α Mcc04-secretor strain with the IP when spotted on <a className='italic'>P. agglomerans</a> PNG 92-11.</p>
<AccordianFigure imageSource='' figureLegend='[Mcc04 + IP in DH5a vs. 1597]'/><br></br>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion4 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Learn <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion4 text-darkWhite'>
<p>The growth curve and ZOI assay results suggested that expression of the <a className='font-bold'>IP lessened inhibition of the Mcc04 secretor strains</a>. In turn, we were able to learn that <a className='font-bold'>Mcc04 has promising antimicrobial activity against two pathogenic</a> <a className='font-bold italic'>Pantoea</a> <a className='font-bold'>strains</a>. However, further testing and characterization is needed to fully confirm this.</p><br></br>
<p>Additionally, the various experimental and construct design changes we’ve accumulated up to this point allowed us to begin <a className='font-bold'>applying an improved process for predicting, incorporating, and testing microcins</a> against pathogenic strains of <a className='italic'>Erwinia amylovora</a> and <a className='italic'>Xanthomonas</a>. After using an improved criteria for selecting microcins to work with, we managed to clone and assemble these microcins into microcin expression plasmids. However, we have yet to fully test them. See the <a className='font-bold text-lavender underline hover:no-underline' href='https://2023.igem.wiki/austin-utexas/results'>Results Page</a> for more information on these microcins.
</p>
</Accordion.Content></Accordion.Panel></Accordion>
</Accordion.Content></Accordion.Panel></Accordion></h3>




<section>Phase 3: Adapting Optimized Inducible Promoters for Our System</section>
<h3>We <a className='font-bold'>adapted a set of inducible promoter systems</a> that have been optimized in <a className='italic'>E. coli</a> (Meyer et al. 2018) for use in our microcin secretion system. This was accomplished by isolating the individual promoters and regulatory genes of the systems and applying our GGA syntax to them, enabling them to form assemblies that follow our schema. We were able to demonstrate that the <a className='font-bold'>Ptet, Ptac, PvanCC, and Pcin inducible promoters can properly promote GFP expression</a> when induced and limit it when uninduced, indicating that they <a className='font-bold'>could provide control over microcin expression within our microcin secretion system</a>.</h3>

<h3><Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-DMagenta focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4'><p className='text-darkWhite'>
Phase 3 Engineering Cycle  <span className = 'flex justify-right text-sm text-white underline'> Click to Expand</span> </p>
</Accordion.Title>
<Accordion.Content className='bg-DMagenta text-darkWhite'>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion1 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Design <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion1 text-darkWhite'>
<p>Because the original plasmids containing the inducible promoter systems only differed in the specific promoter and regulatory gene being used, we designed two pairs of universal primers to amplify the promoter and regulatory gene of each system. The universal primers also captured an RBS and a hammerhead ribozyme for each promoter and a terminator sequence upstream of each regulator. We ensured that the primers added BsmBI and BsaI restriction sites that produce the correct sticky ends according to our syntax. This way, the promoters would be compatible with our assembly scheme and therefore able to form versions of our microcin secretion system under inducible control.</p>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion2 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Build <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion2 text-darkWhite'>
<p>Using the primers we designed, we performed standard PCR to amplify Ptet, Ptac, PluxB, PcymRC, pBAD, PvanCC, and their corresponding regulatory genes: tetR, lacI, luxR, cymR, araC and araE, vanR, and cinR, respectively. Once we confirmed that the sizes of each of our parts were correct using gel electrophoresis, we purified them using the Zymo DNA Clean and Concentrate Kit.</p><br></br>
<AccordianFigure
imageSource='https://static.igem.wiki/teams/4579/wiki/phase-3-gel-2.png'
figureLegend='Figure 16. Figure 4. Successful synthesis of the inducible promoters and their regulatory genes. The gel electrophoresis results indicate that tetR (866 bp), lacI (1327 bp), luxR (997 bp), cymR (856 bp), araC+araE (2583 bp), vanR (980 bp), Ptac (256 bp), Ptet (236 bp), PluxB (235 bp), PcymRC (270 bp), pBAD (469 bp), and PvanCC (230 bp) all are the appropriate size given the addition of BsmBI and BsaI restriction sites to them. Unlabeled wells contain doublets of amplified promoter PCR products that could not be used.'/><br></br>
<p>We then created basic parts of each promoter and regulator by using GGA to clone each into a high-copy GFP-dropout entry vector (Leonard et al., 2018) via BsmBI digestion-ligation. Once each basic part sequence was confirmed to be correct, we used GGA again to assemble Ptet, Ptac, PvanCC, and Pcin each with a BTK GFP coding sequence part and their corresponding regulator. We chose not to create assemblies with the other inducible promoters because we were unable to obtain the inducer molecules for them. These assemblies resulted in GFP-expression plasmids that enabled us to examine the performance of the inducible promoters when adapted to our schema. Using whole plasmid sequencing, we confirmed that the plasmids we designed had all been assembled correctly.
</p><br></br>
<AccordianFigure
imageSource=''
figureLegend='[Figures showing sequencing results/part plasmid & first stage assembly transformations??]'/>
<p>We then electroporated each plasmid into the strain of P. agglomerans PNG 92-11 containing pSK01 we created during Phase 2. This allowed us to have a strain that utilizes the new inducible promoters while emulating our full two-plasmid microcin secretion system (just without the microcin).</p><br></br>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion3 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Test <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion3 text-darkWhite'>
<p>We performed a simple fluorescence assay on our strains containing the Ptet, Ptac, PvanCC, and Pcin-controlled GFP-expression plasmids and pSK01. We induced overnight cultures of the strains (grown from single colonies) and, after another overnight period, took a single endpoint reading. These readings were then compared against the endpoint readings taken from uninduced cultures growth at the same time. When taking our readings, we set excitation and emission to 485 nm and 535 nm, respectively.</p><br></br>
<AccordianFigure
imageSource='https://static.igem.wiki/teams/4579/wiki/phase-2-sequencing.png'
figureLegend='Figure 18. GFP fluorescence in P. agglomerans PNG 92-11 under the inducible promoters Ptet, PvanCC, and Pcin. Induced (+) cultures exhibited much greater fluorescence than uninduced ones, indicating that the promoters have a clear “on/off” state.'/><br></br>
<p>Our endpoint readings indicated that the induced and uninduced states of each promoter caused significantly different levels of GFP expression.</p>
</Accordion.Content></Accordion.Panel></Accordion>
<Accordion collapseAll>
<Accordion.Panel>
<Accordion.Title className='text-white bg-accordion4 focus:bg-LGreen focus:ring-DMagenta focus:ring-2 hover:bg-LGreen hover:ring-white hover:ring-4 pb-2 text-xs'><p className='text-darkWhite'>Learn <span className = 'text-right text-sm text-white underline'> Click to Expand</span></p></Accordion.Title>
<Accordion.Content className='bg-accordion4 text-darkWhite'>
<p>Through our assay results, we demonstrated that the inducible systems with Ptet, Ptac, PvanCC, Pcin, and their corresponding regulators were <a className='font-bold'>still functional when adapted to our scheme and system</a>. From this, we learned that these <a className='font-bold'>inducible promoters should enable us to control microcin expression</a> in our system. As such, <a className='font-bold'>we chose to make new assemblies with MccV and Mcc04 under inducible expression</a> via these promoters. While we successfully assembled these inducible microcin constructs, we were unable to test them in ZOI or growth curve assays due to time.</p>
</Accordion.Content></Accordion.Panel></Accordion>
</Accordion.Content></Accordion.Panel></Accordion></h3>


<h5></h5>


<h4></h4>
<section>References</section>
<Sources
citationText='Cole, T. J., Parker, J. K., Feller, A. L., Wilke, C. O., & Davies, B. W. (2022). Evidence for widespread class II microcins in Enterobacterales Genomes. Applied and Environmental Microbiology, 88(23), e01486-22.'
doi=''/>
<Sources
citationText='Engler, C., Romy Kandzia, & Sylvestre Marillonnet. (2008). A One Pot, One Step, Precision Cloning Method with High Throughput Capability. PLOS ONE, 3(11), e3647–e3647.'
doi='https://doi.org/10.1371/journal.pone.0003647 '/>
<Sources
citationText='Engler, C., Gruetzner, R., Romy Kandzia, & Sylvestre Marillonnet. (2009). Golden Gate Shuffling: A One-Pot DNA Shuffling Method Based on Type IIs Restriction Enzymes. PLOS ONE, 4(5), e5553–e5553. '
doi='https://doi.org/10.1371/journal.pone.0005553 '/>
<Sources
citationText='Kim, S.-Y., Parker, J., Gonzalez-Magaldi, M., Telford, M. S., Leahy, D. J., & Bryan William Davies. (2023). Export of diverse and bioactive peptides through a type I secretion system. BioRxiv (Cold Spring Harbor Laboratory).'
doi='https://doi.org/10.1101/2023.01.26.525739'/>
<Sources
citationText='Madeira, F., Pearce, M., Tivey, A., Prasad Basutkar, Lee, J., Ossama Edbali, Nandana Madhusoodanan, Kolesnikov, A., & López, R. (2022). Search and sequence analysis tools services from EMBL-EBI in 2022. Nucleic Acids Research, 50(W1), W276–W279.'
doi='https://doi.org/10.1093/nar/gkac240 '/>
<Sources
citationText='Meyer, A.J., Segall-Shapiro, T. H., Glassey, E., Zhang, J., & Voigt, C. A. (2018). Escherichia coli “Marionette” strains with 12 highly optimized small-molecule sensors. Nature Chemical Biology, 15(2), 196–204.'
doi='https://doi.org/10.1038/s41589-018-0168-3'/>
<Sources
citationText='Parker, J. D., & Bryan William Davies. (2022). Microcins reveal natural mechanisms of bacterial manipulation to inform therapeutic development. Microbiology, 168(4).'
doi='https://doi.org/10.1099/mic.0.001175'/>
<h5></h5>
<Footer Year='2023'/>
</>
)
}

export default engineering