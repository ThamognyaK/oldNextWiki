'use client';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';




const attributions = () => {
return (
<>
<Navigation name='iGEM 2023' ></Navigation>
<h1 className="animate-fade-up">Attributions</h1>
<h4></h4>
<h2></h2>


<h3><iframe className= "bg-tallow w-full h-screen px-11 py-11" src="https://attributions.igem.org/?team=Austin-utexas&year=2023"></iframe>
</h3>


<h5></h5>
<Footer Year='2023'/>
</>
)
}


export default attributions