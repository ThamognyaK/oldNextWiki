'use client';
import Figures from '../components/Figures';
import Sources from '../components/Sources';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Accordion } from 'flowbite-react';
import AccordionFigure from '../components/AccordianFigure';




const parts = () => {
return (
<>
<Navigation name='iGEM 2023' ></Navigation>
<h1 className="animate-fade-up">Parts</h1>
<h4></h4>
<section>Introduction</section>
<h3>The 2023 UT Austin iGEM Team’s modular microcin expression parts collection includes parts necessary for engineering a bacterial chassis to secrete microcins, a type of small antimicrobial peptide. Our team has specifically designed parts to engineer a modular two-plasmid system that facilitates extracellular secretion of microcins by the chassis. One plasmid contains the microcin with a signal peptide sequence that indicates to the cell that the microcin is to be secreted. The other plasmid (pSK01) is from the literature (Kim et al., 2023) and contains genes for the proteins necessary to secrete small peptides using the E. coli microcin V (MccV) type I secretion system (T1SS). We have a selection of promoters (Type 2), coding sequences (Type 3), and terminator/regulatory gene (Type 4) parts that can be easily assembled to express microcins constitutively or under inducible control.</h3>


<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/parts-page-1.jpg'
figureLegend='Fig. 1. Overview of  ..... Created with BioRender.com.'
/>
<h3>
Our basic and composite parts follow the Bee Toolkit/Yeast Toolkit standard of Golden Gate assembly (Lee et al., 2015; Leonard et al., 2018). This standard includes type-specific prefix and suffix sticky ends for each part, and these sticky ends are NOT included in their sequences in the registry. Instead, they are listed in the table of Figure 2 below. In the part sequence depicted at the upper right of Figure 2, the prefix sticky end is labeled in red, while the suffix sticky end is labeled in purple.
</h3>
<Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/parts-page-2.jpg'
figureLegend='Figure 2. A schematic of our assemblies accompanied by a table of all the part type-specific sticky ends, derived from the BTK/YTK standard. The sequence to the upper right depicts the process by which parts are digested from PCR products to individual part plasmids (using BsmBI digestion) followed by BsaI digestion to create composite part assemblies. Type-specific sticky ends in the upper right sequence are labeled in red (prefix) and purple (suffix). Created with BioRender.com.'
/>
<h3>
We hope that this modular microcin part collection will allow future iGEM teams to work with microcins and the secretion system components we’ve characterized in this system—which have been shown to secrete small peptides other than microcins as well (Kim et al., 2023). The majority of our parts are iGEM Type IIS compatible sequences for a majority of our parts. In some cases, we have worked with pre-existing parts that are incompatible with the iGEM Type IIS standard. In those cases, we have to the best of our ability added equivalent Type IIS compatible sequences on the iGEM Parts Registry. One example of this is the cvaAB part. We used the existing pSK01 secretion system from Kim et al. for our secretion assays. This plasmid is not iGEM Type IIS compatible, however we have included an equivalent cvaAB part that is compatible with the iGEM Type IIS standard. However, all of our current characterization data for our assemblies used the pSK01 plasmid from Kim et al.
</h3>
<h5></h5>
<h4></h4>
<section>Categorization</section>
<h3>
The basic parts that we developed each fall into one of the categories listed under Basic Parts. Each of these follows the BTK/YTK standard mentioned in the Introduction. Type-specific overhangs from this standard can be added to the ends of any sequence intended to take on the function of that part type. Three categories of assemblies of our team’s basic parts alongside select parts from the Bee Toolkit are under Composite Parts.
</h3>


<h6> Basic parts </h6>
<h3>
<ul className=' list list-image-bacteriaBullet px-5'>
  <li className='m-4'> <span className="font-bold"> Secretion System Machinery </span> – These parts are necessary for the two-plasmid secretion system to function, regardless of what microcin is being secreted. </li>
  <li className='m-4'> <span className="font-bold"> Inducible Promotors </span> – Seven inducible promoters selected due to their relatively high dynamic range (Meyer et al., 2019) and apparent functionality in a variety of Proteobacteria (Schuster & Reisch, 2021). </li>
  <ul className=' list list-image-bacteriaBullet px-16'> <li> Each of these parts also includes a ribosome binding site (RBS) and a hammerhead ribozyme (HHRz) in the 5' untranslated region to insulate gene expression levels from coding sequence effects on mRNA structure. </li></ul>
  <li className='m-4'>  <span className="font-bold"> Microcins or [microcin + immunity protein] coding sequences  </span> – All novel microcins that our team identified (some with immunity proteins) as well as the known microcin MccV + its associated immunity protein Cvi. </li>
  <li className='m-4'> <span className="font-bold"> Regulatory Genes </span> – A collection of seven regulatory transcription factor genes, each associated with one of the seven inducible promoters. These parts include a terminator to complete the microcin transcriptional unit followed by the regulatory gene transcriptional unit. </li>
  <li className='mt-4'>  <span className="font-bold"> BTK parts </span> – Parts from the Bee Toolkit (Leonard et al., 2018). These parts were not created by the UT Austin iGEM Team. These include pBTK107, a Type 2 constitutive promoter part, pBTK205, a Type 3 <i>GFP</i> coding part, and pBTK300, a Type 4 <i>rpoC</i> terminator part. </li>
  </ul> </h3>
 
  <h6>Composite Parts</h6>
  <h3>
  <ul className=' list list-image-bacteriaBullet px-5'>
    <li className='m-4'> <span className="font-bold"> Constitutive Microcin/Microcin + Immunity Protein Assemblies </span> – Microcin expression under control of a constitutive <a className="underline hover:font-bold hover:text-Avocado" href="http://parts.igem.org/Part:BBa_K4579037">promotor </a></li>
    <li className='m-4'>
    <span className="font-bold">
    Inducible Microcin Expression Assemblies
    </span>
    – Microcin expression under the control of an inducible promoter system.
    </li>
    <li className='mt-4 ml-4'>
    <span className="font-bold"> Inducible Promoter Characterization Assemblies </span> – GFP under the control of an inducible promoter system.
    </li>    </ul></h3>


    <Figures
imageSource='https://static.igem.wiki/teams/4579/wiki/parts-page-3.jpg'
figureLegend='Figure 3. Our general microcin plasmid assembly schema characterized by part type. Parts of the same type may be swapped out for one another as the user sees fit. Type 2 inducible promoter parts were always used in conjunction with their associated terminator + transcription factor Type 4 parts. Created with BioRender.com.'
/>
<h5></h5>
<h4></h4>


<section> References </section>


<Sources
citationText='Cole, T. J., Parker, J. K., Feller, A. L., Wilke, C. O., & Davies, B. W. (2022). Evidence for widespread class II microcins in Enterobacterales Genomes. <i>Applied and Environmental Microbiology, 88</i>(23), e01486-22. '
doi = 'https://doi.org/10.1128/aem.01486-22'
/>


<Sources
citationText='Kim, S. Y., Parker, J. K., Gonzalez-Magaldi, M., Telford, M. S., Leahy, D. J., & Davies, B. W. (2023). Export of Diverse and Bioactive Small Proteins through a Type I Secretion System. <i>Applied and Environmental Microbiology, 89</i>(5), e00335-23.'
doi = 'https://doi.org/10.1128/aem.00335-23'
/>
<Sources
citationText='Lee, M. E., DeLoache, W. C., Cervantes, B., & Dueber, J. E. (2015). A highly characterized yeast toolkit for modular, multipart assembly. <i>ACS Synthetic Biology, 4</i>(9), 975-986.'
doi = 'https://pubs.acs.org/doi/10.1021/sb500366v'
/>
<Sources
citationText='Leonard, S. P., Perutka, J., Powell, J. E., Geng, P., Richhart, D. D., Byrom, M., ... & Barrick, J. E. (2018). Genetic engineering of bee gut microbiome bacteria with a toolkit for modular assembly of broad-host-range plasmids. <i>ACS Synthetic Biology, 7</i>(5), 1279-1290.'
doi = 'https://doi.org/10.1021/acssynbio.7b00399'
/>
<Sources
citationText='Meyer, A. J., Segall-Shapiro, T. H., Glassey, E., Zhang, J., & Voigt, C. A. (2019). Escherichia coli “Marionette” strains with 12 highly optimized small-molecule sensors. <i>Nature Chemical Biology, 15</i>(2), 196-204.'
doi = 'https://doi.org/10.1038/s41589-018-0168-3'
/>
<Sources
citationText='Schuster, L. A., & Reisch, C. R. (2021). A plasmid toolbox for controlled gene expression across the Proteobacteria. <i>Nucleic Acids Research, 49</i>(12), 7189-7202.'
doi = 'https://doi.org/10.1093/nar/gkab496'
/>
<h5></h5>
<Footer Year='2023'/>
</>
)
}




export default parts



