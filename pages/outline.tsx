'use client';
import Figures from '../components/Figures';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const pageName = () => {
return (
<>
<Navigation name='iGEM 2023' ></Navigation>
<h1 className="animate-fade-up">Title</h1>
<h4></h4>
<h2>Header</h2>
<h6>Subheader</h6>
<h3>Body text.</h3>
<Figures
imageSource='https://static.wixstatic.com/media/e8ae4b_904fc5c4a144413ea5dd4a2b69059620~mv2.png/v1/fill/w_560,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R-1.png'
figureLegend='Cute little bunny to brighten up your day!'
/>
<h3>Body text.</h3>
<h2>Bullet Points</h2>
<h3>
<ul className = "list-inside">
<li> <img className = 'h-3.5 w-4 display: inline' src = "https://static.wixstatic.com/media/e8ae4b_904fc5c4a144413ea5dd4a2b69059620~mv2.png/v1/fill/w_560,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R-1.png" alt = '-'/> List Item 1 </li>
<li> <img className = 'h-3.5 w-4 display: inline' src = "https://static.wixstatic.com/media/e8ae4b_904fc5c4a144413ea5dd4a2b69059620~mv2.png/v1/fill/w_560,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R-1.png" alt = '-'/> List Item 2 </li>
<li> <img className = 'h-3.5 w-4 display: inline' src = "https://static.wixstatic.com/media/e8ae4b_904fc5c4a144413ea5dd4a2b69059620~mv2.png/v1/fill/w_560,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R-1.png" alt = '-'/> List Item 3 </li>
<li> <img className = 'h-3.5 w-4 display: inline' src = "https://static.wixstatic.com/media/e8ae4b_904fc5c4a144413ea5dd4a2b69059620~mv2.png/v1/fill/w_560,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R-1.png" alt = '-'/> List Item 4 </li>
<li> <img className = 'h-3.5 w-4 display: inline' src = "https://static.wixstatic.com/media/e8ae4b_904fc5c4a144413ea5dd4a2b69059620~mv2.png/v1/fill/w_560,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R-1.png" alt = '-'/> List Item 5 </li>
</ul></h3>
<h5></h5>
<Footer Year='2023'/>
</>
)
}


export default pageName