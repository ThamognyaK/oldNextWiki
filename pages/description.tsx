import AccordionFigure from '../components/AccordianFigure';
import Figures from '../components/Figures';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Sources from '../components/Sources';


const description = () => {
return (
<>
<Navigation name = 'iGEM 2023'/>
<h1 className = 'animate-fade-up'> Project Description</h1>
<h4></h4>
<section>The Problem</section>
<h3>Bacterial pathogens cause many of the most devastating plant diseases of the modern age: fire blight of apples and pears, Pierce’s disease in grapes—shown in Figure 1—and crown gall disease, just to name a few (Mansfield et al., 2012). Globally, plant pathogens cause roughly US$220 billion in crop yield loss every year (FAO, 2017); the potato pathogen <a className='italic'>Ralstonia solanacearum</a> alone is responsible for over US$1 billion in annual agricultural losses (Mansfield et al., 2012).</h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/1-osu-pierces-disease-figure.jpeg'
figureLegend = "Figure 1. Leaves on a grapevine showing characteristic symptoms of Pierce’s disease caused by infection with the bacterium Xylella fastidiosa. Source: OSU Extension."
/>
<h3>This year, the UT Austin iGEM team is tackling the problem of bacterial plant pathogens in agriculture by engineering non-pathogenic strains of bacteria (our chassis) to secrete small, target-specific antimicrobial peptides known as microcins that kill the pathogen of interest. Our goal is to create a modular system in which microcins targeting different plant pathogens can be easily swapped out with each other for secretion by the chassis, enabling the rapid engineering of multiple biocontrols that each target a specific pathogen.</h3>
<h3>Current control methods such as antimicrobial and anti-insect pesticides against bacterial plant pathogens and their vectors are hardly sustainable. Long-term use of antimicrobial pesticides may inadvertently select for resistance in pathogenic bacteria while also killing off beneficial plant symbiotic microbes, and pesticide run-off can cause serious environmental damage as well as threaten human health. Biocontrols, however, are a less-explored but increasingly promising solution to phytopathogen control. While already used in agriculture to a small extent, bacterial biocontrols only make up approximately 1% of current phytopathogen control methods (Lahlali et al., 2022).</h3>
<section>Using Microcins</section>
<h3>Our team’s key goal is to show that we can engineer a modular system that enables a non-pathogenic bacterial chassis to kill a plant pathogen of interest, thus acting as a biocontrol. In order to inhibit the proliferation of target pathogens, we are engineering our chassis to secrete small antimicrobial peptides known as microcins—a subclass of bacteriocins—that can ideally kill the phytopathogenic bacterium before it severely infects the plant. These microcins act as molecular ‘weapons’ that the chassis can use against the pathogenic target strain by secreting them outside of the cell. But why microcins?</h3>
<h3>Currently characterized microcins are highly specific in their bactericidal activity, and this fact is thought to make it more challenging for target species to develop resistance (Parker & Davies, 2022). This specificity of microcins is generally attributed to their evolution as a weapon of interbacterial competition, as it has been observed that bacteria within the same niche (often close relatives) are the most likely to produce microcins with activity against one another (Cole et al., 2022). Because of this, microcins generally have a narrow target spectrum and would likely produce less disturbance to the overall plant microbiome than traditional antimicrobial compounds.</h3>
<section>The microcin secretion <a href='https://2023.igem.wiki/austin-utexas/engineering' className='hover:text-DMagenta text-accordion1'>system</a></section>
<h3 className='flex flex-row-2 gap-6 text-BGreen px-1/4 items-center'>
<p className='object-left'>To ensure microcins produced by our chassis actually make it outside of the cell to act against their pathogen targets, we have chosen to engineer a secretion system that allows our chassis to secrete a microcin specific to a pathogen of interest. Our design builds upon the previously characterized <a className='italic'>E. coli</a> microcin V (MccV) type I secretion system (T1SS) that we have engineered to increase modularity and adaptability of its constituent parts (Kim et al., 2023). The secretion system includes two plasmids, one containing the microcin and one containing the secretion system genes. However, our engineering efforts have focused primarily on improving modularity of the microcin-containing plasmid.<br></br><br></br>
The first plasmid (plasmid 1 in Figure 3) contains the basic MccV T1SS genes CvaA and CvaB regulated by a constitutive promoter, while the second plasmid (plasmid 2 in Figure 3) contains the coding sequences for a microcin of interest and its associated immunity protein. The TolC receptor protein is not expressed from the secretion plasmid, as this receptor is already present in the genomes of most Gram-negative bacteria (Kim et al., 2023). There are two variants of constructs for this second plasmid—one variation places the microcin and immunity protein under a constitutive promoter, while the other instead uses inducible promoters.</p>
<main className='grid grid-col-2 object-center'>
<img className=' rounded-xl border-solid border-BGreen w-auto h-auto drop-shadow-lg' src='https://static.igem.wiki/teams/4579/wiki/2-davies-secretion-paper-figure-1a.jpg'
alt=''/>
<p className='italic object-right caption-bottom py-3'>Figure 2. Schematic of the microcin V type I secretion system in E. coli. From Kim et al., 2023.</p>
</main>
</h3>
<h3>We have been working with a set of seven of the twelve inducible promoters optimized in the <a className='italic'>E. coli</a> ‘Marionette’ strain in order to engineer a version of our microcin construct under inducible control (Meyer et al., 2019). This may help lessen metabolic burden on the chassis by allowing microcin secretion to be turned ‘on’ and ‘off’ as needed. Additionally, we’ve hypothesized that utilizing inducible expression may help to mitigate any potentially toxic effects of microcin expression within the host chassis that are not controlled by the immunity protein. The inducible version of our microcin plasmid is shown in Figure 3. The constitutive version of this plasmid looks much the same save for the absence of the transcription factor and the presence of a constitutive (rather than inducible) promoter.</h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/the-two-plasmid-system.jpeg'
figureLegend='Figure 3. The two-plasmid microcin secretion system. CvaA and CvaB are CvaC15 is the signal peptide that signals to the cell to secrete the microcin, and the inducer- regulated transcription factor has a net activating effect on transcription in the presence of its inducer molecule. Created with BioRender.com.'/>
<h6>Identifying Microcins</h6>
<h3>To identify microcins specific to pathogens of interest, we have been using a recently developed bioinformatics tool known as cinful (Cole et al., 2022) to find candidate microcin sequences that target phytopathogenic bacteria, including <a className='italic'>Erwinia</a> amylovora (the causal agent of fire blight) and <a className='italic'>Pantoea</a> strains that cause onion center rot. This tool scans the genomes of strains within the same genus as the pathogen in question to identify nucleotide sequences that show sequence similarity to a set of 10 known microcins. Other characteristics such as proximity to likely secretion system proteins are also considered when determining whether a peptide may be a microcin.</h3>
<section>Why test on onions?</section>
<h3>Due to the relatively short time span of iGEM project preparation, we sought a pathogen-plant relationship model that would not take months of growing to analyze in our pathogen inhibition experiments. The easiest way to do this was to select a bacterium that can affect a plant both before and after it has been harvested. <a className='italic'>Pantoea</a>-mediated onion center rot is observed to affect onions in both the pre- and post-harvest stages (Agarwal et al., 2019), and harvested onions are easily accessible at any grocery store. Additionally, onions have a relatively long shelf life, and their skins have been shown to contain antimicrobial compounds that presumably keep the interior relatively sterile when unpeeled (Sagar & Pareek, 2020). Regardless, we made sure to sterilize the peeled onions prior to using them in our <a className='hover:text-DMagenta text-accordion1' href='https://2023.igem.wiki/austin-utexas/experiments'>onion rot assays</a>, and the results of one of these assays are pictured in Figure 4 below.</h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/4-pantoea-assay-figure.jpg'
figureLegend='Figure 4. To the right is pictured a sweet onion 21 days post-inoculation with Pantoea ananatis PNA 97-1R, a causal agent of onion center rot. The onion to the left was inoculated with water as a control.'
/>
<h5></h5>
<h4></h4>
<section> References </section>
<Sources
citationText='Agarwal, G., Stumpf, S., Kvitko, B., & Dutta, B. (2019). ​​​Center Rot of Onion​. The Plant Health Instructor, 10.'
doi = ''
/>
<Sources
citationText='Cole, T. J., Parker, J. K., Feller, A. L., Wilke, C. O., & Davies, B. W. Evidence for Widespread Class II Microcins in Enterobacterales Genomes. Applied and
Environmental Microbiology, 2022, 88(23).'
doi = 'https://doi.org/10.1128/aem.01486-22'
/>
<Sources
citationText='FAO. 2017. The future of food and agriculture – Trends and challenges. Food and Agriculture Organization of the United Nations.'
doi='https://www.fao.org/3/i6583e/i6583e.pdf'
/>
<Sources
citationText='Kim, S-Y., Parker, J. K., Gonzalez-Magaldi, M., Telford, M. S., Leahy, D. J., & Davies, B. W. (2023). Export of Diverse and Bioactive Small Proteins through a Type I Secretion System. Applied and Environmental Microbiology, 89(5), e00335-23.'
doi = 'https://doi.org/10.1128/aem.00335-23'
/>
<Sources
citationText='Lahlali, R., Ezrari, S., Radouane, N., Kenfaoui, J., Esmaeel, Q., El Hamss, H., Belabess, Z., & Barka, E. A. Biological Control of Plant Pathogens: A Global
Perspective. Microorganisms. 2022, 10(3):596.'
doi = 'https://doi.org/10.3390%2Fmicroorganisms10030596'
/>
<Sources
citationText='Mansfield, J., Genin, S., Magori, S., Citovsky, V., Sriariyanum, M., Ronald, P., ... & Foster, G. D. (2012). Top 10 plant pathogenic bacteria in molecular plant pathology. Molecular Plant Pathology, 13(6), 614-629.'
doi='https://doi.org/10.1111/j.1364-3703.2012.00804.x'
/>
<Sources
citationText='Meyer, A. J., Segall-Shapiro, T. H., Glassey, E., Zhang, J., & Voigt, C. A. (2019). Escherichia coli “Marionette” strains with 12 highly optimized small-molecule sensors. Nature Chemical Biology, 15(2), 196-204.'
doi = 'https://doi.org/10.1038/s41589-018-0168-3'
/>
<Sources
citationText='OSU Extension. (2021, April 13). Pierce’s Disease of Grape. Oklahoma State University. '
doi='https://extension.okstate.edu/programs/digital-diagnostics/plant-diseases/pierces-disease-of-grape.html'
/>
<Sources
citationText='Parker, J. K., & Davies, B. W. (2022). Microcins reveal natural mechanisms of bacterial manipulation to inform therapeutic development. Microbiology, 168(4), 001175.'
doi='https://doi.org/10.1099/mic.0.001175'
/>
<Sources
citationText='Sagar, N. A., & Pareek, S. (2020). Antimicrobial assessment of polyphenolic extracts from onion (Allium cepa L.) skin of fifteen cultivars by sonication-assisted extraction method. Heliyon, 6(11).'
doi = 'https://doi.org/10.1016/j.heliyon.2020.e05478'
/>
<h5></h5>
<Footer
Year='2023' />
</>
)
}
export default description