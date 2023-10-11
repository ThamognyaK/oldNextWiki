import Figures from '../components/Figures';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Sources from '../components/Sources';


const results = () => {
return (
<>
<Navigation name = 'iGEM 2023'/>
<h1 className="animate-fade-up">Preliminary Results</h1>
<h4></h4>
<section>Zone of Inhibition Assay Preliminary Results</section>
<h3>The zone of inhibition assay allows you to determine whether a bacterial strain (henceforth called the predator strain) secretes antimicrobial properties (such as antimicrobial peptides and microcins) that harm a different strain of bacteria (henceforth called the prey strain). This allows us to visually evaluate whether a biocontrol that has been transformed with a one or two-plasmid secretion system can target a phytopathogenic bacterial strain.</h3>


<h3>While some of our team members were working on evaluating potential microcins and
developing the plasmid secretion system, other team members began developing specific
assays that would allow us to learn more about the specificity of <a className = "italic">Pantoea</a> biocontrols and
transformation.</h3>


<h3>We first began by confirming that an <a className = "italic">E. coli</a> strain with the MccV microcin secretion system that
we had received from the Davies lab would target bacteria belonging to the genera <a className = "italic"> Escherichia</a>,
<a className = "italic"> Klebsiella</a>, <a className = "italic"> Salmonella</a>, and <a className = "italic"> Shigella</a>. We started with MccV because it is a well-studied microcin
and would allow us to compare our results with the selected microcins and secretion systems
that we develop ourselves. We confirmed that the <a className = "italic">E. coli</a> strain containing the one plasmid
MccV secretion system displayed a zone of inhibition against the prey strain, <a className = "italic">E. coli</a> W3110. This
confirmed the function of the secretion system as well as the microcin’s lethality against
W3110.</h3>


<h3>Our next step was to transform the various pathogenic and biocontrol <a className = "italic">Pantoea</a> strains with the same one-plasmid secretion system shown to target W3110. We utilized electroporation to
transform our strains, then plated them with appropriate antibiotic resistance to ensure only
successful transformants grew. Therefore, we created <a className = "italic">Pantoea</a> strains that can now target
W3110, which we proceeded to test and visually confirm using the zone of inhibition assay. We
successfully transformed some of the pathogenic <a className = "italic">Pantoea</a> strains (specifically strains 1597,
1598, and 1599), but initially had unsuccessful zones of inhibition with the 1600 <a className = "italic">Pantoea </a>
pathogenic strain and the biocontrol strains - indicating that these strains had possibly not been
transformed.</h3>

<h3 className='flex justify-center pt-4'>
<main className="w-[70%] h-[70%]">
<img src="https://static.igem.wiki/teams/4579/wiki/untitled-28.png" className="mx-15 rounded-xl hover:drop-shadow-xl drop-shadow-2xl border-solid border-2 border-BGreen"/>
<main className="pt-2 pb-4 flex justify-center "> <p className='w-[70%] h-[70%] text-center text-Avocado'> Fig 1. Zone of Inhibition</p></main>
</main></h3>

<h3>The next set of assays clarified whether the MccV microcin could target our <a className = "italic">Pantoea</a> strains, rather than just W3110. Our literature review suggested that MccV would not be successful
against bacterial strains of the <a className = "italic">Pantoea</a> genus. Thus following, we performed a zone of
inhibition assay using the MccV transformed <a className = "italic">E. coli</a> strain (1591) as the predator strain and a
pathogenic <a className = "italic">Pantoea</a> strain as the prey strain to verify this ourselves. We did not observe a zone
of inhibition, which we concluded as additional proof that MccV does not target these specific
strains of <a className = "italic">Pantoea</a>.</h3>


<h3>While the <a className = "italic">Pantoea vagans</a> C9-1 (a <a className = "italic">Pantoea</a> biocontrol strain) mechanism is currently unknown,
we were curious to see whether this strain would target the current pathogenic strains that we
were experimenting. Therefore, we ran an assay that had the <a className = "italic">Pantoea</a> biocontrol strain as
the predator strain and each of the <a className = "italic">Pantoea</a> pathogenic strains as the prey strains. This assay
did not yield a zone of inhibition, suggesting that this <a className = "italic">Pantoea</a> biocontrol strain did not target
the <a className = "italic">Pantoea</a> pathogenic strains we had in the lab.</h3>


<h6>These preliminary experiments taught us the following and were verified with a literature review </h6>
<h3>
<ul className = "list-inside list-image-bacteriaBullet">
<li> Microns are specific: the MccV <a className = "italic">E. coli</a> microcin did not target <a className = "italic">Pantoea</a> pathogenic strains </li>
<li> Biocontrols are specific: the <a className = "italic">Pantoea</a> biocontrol strain did not target the <a className = "italic">Pantoea </a>
pathogenic strains we were using in lab </li>
<li> <a className = "italic">Pantoea</a> strains can be successfully transformed: the <a className = "italic">Pantoea</a> pathogenic strains were
able to be successfully transformed with the <a className = "italic">E. coli</a> microcin plasmid </li>
</ul></h3>


<h3>The final zone of inhibition assay we performed was to successfully transform a <a className = "italic">Pantoea </a>
biocontrol strain with a microcin that targeted the <a className = "italic">Pantoea</a> pathogenic strain and showed a
successful zone of inhibition.</h3>


<section>Pathfinder Assay Preliminary Results</section>
<h3>The Pathfinder toolkit includes three different broad-host-range origins of replication with
antibiotic resistance cassettes to determine whether a specific bacteria is compatible with
different plasmid components. We decided to use the Pathfinder toolkit to evaluate which
plasmid backbone we wanted to insert our Type I microcin secretion system into.</h3>


<h3>The three plasmids that are a part of the Pathfinder toolkit are PBBR1, RP4, and RSF1010. The
strains of <a className = "italic">E. coli</a> that contain each of these plasmids respectively are E2C, BCP, and RCP. In the
protocol, these strains will be referred to as the donor cells, and the recipient cells are the
target strain that will get transformed with the inserted plasmid. The donor strains require DAP
to grow and include the KanR gene on each plasmid.</h3>


<h3>To compare the effectiveness of the plasmid backbones, we measured the conjugation
efficiency between the donor <a className = "italic">E. coli</a> cells and the recipient biocontrol strains that we had in the
lab. The two plasmids that we were testing were the RSF1010 plasmid and the RP4 plasmid. We
hypothesized that the RSF1010 plasmid would have a higher conjugation efficiency because it
was a well-known broad host range plasmid and thus would be able to efficiently be transferred
across different bacteria.</h3>


<h3>Our results suggest that the RSF1010 plasmid has a higher conjugation efficiency between the
RCP <a className = "italic">E. coli</a> strain and the biocontrol strains 1595 and 1596. Based on this
data, we plan to insert the Type I secretion system into the RSF1010 plasmid to create the
modular product that we can insert into our symbiont bacteria.</h3>
<h5></h5>
<h4></h4>
<section> Sources </section>
<Sources
citationText='Elston, K.M., Phillips, L.E., Leonard, S.P. et al. The Pathfinder plasmid toolkit for genetically engineering newly isolated bacteria enables the study of Drosophila-colonizing Orbaceae. ISME COMMUN. 3, 49 (2023).'
doi = 'https://doi.org/10.1038/s43705-023-00255-3'
/>
<h5></h5>
<Footer Year='2023' />
</>
)
}


export default results