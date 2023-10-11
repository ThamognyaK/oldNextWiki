import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Cards from '../components/Cards'




function contribution() {
return (
<main className="bg-DMagenta">
<Navigation
name="iGEM 2023"
/>
<h1 className="animate-fade-up">Contributions</h1>
<h4></h4>
<h3>This page details the contributions we have made to the iGEM community. We believe our work
with microcin-secretion and plant pathogens has provided valuable resources for future teams
to use and expand upon</h3>
<section>Adapting a Framework for Microcin Identification & Secretion</section>
<h3>The framework our team referenced for identifying, building, and testing microcins is a large-
scale process that requires extensive time and resources. This process involves
computationally identifying many microcin candidates and developing/testing them in large
batches. [Maybe we can put here how long this cycle takes for Davies Lab vs how long it took
us?]. While adapting this process during our project, we developed a framework for testing
microcins that is accessible to the time, resources, and capabilities of undergraduate iGEM
teams. We have also identified valuable information that would be useful to iGEM teams
considering specific pathogens they may want to target with a microcin.</h3>
<h3>Our approach to microcin identification involves preliminary screening based on a set of criteria
used by the Davies Lab. Microcins attacking a particular bacteria will often be found in the
genome of closely related species.</h3>
<h3>Additionally, the methods used by our team to build and test microcin constructs are easily
accessible to most undergraduate teams. Virtual parts design, golden gate assembly, and PCR
were all used to create plasmid secretion systems for our identified microcins. We primarily
utilized the zone of inhibition assay to test our microcins, which is an efficient method to confirm
microcin secretion within the iGEM timeline.</h3>
<h5></h5>
<Footer
Year="2023"
/>
</main>
)
}


export default contribution