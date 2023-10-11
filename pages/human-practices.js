import {useRef} from 'react';

export default function HPPage() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/humanpractices.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/humanpracticesphone.png";
    const handleClick = (elID) => {
    const element = document.getElementById(elID)
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
  };
  

  return (
    <div>
        <img class="wideTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={wideTitleScreenUrl}/>
        {/* <img class="narrowTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={narrowTitleScreenUrl}/> */}
        <div class="row">
            <div class="contentsBar">
                <div style={{position: "sticky", top:"100px"}}class="column">
                    <h1 style={{marginBottom: '20px'}}>Contents</h1>
                    <button class="contentsButton" onClick={() => handleClick("header1")}>
                        Header1
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header2")}>
                        Header2
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header3")}>
                        Header3
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header4")}>
                        Header4
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header5")}>
                        Header5
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header6")}>
                        Header6
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header7")}>
                        Header6
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header8")}>
                        Header6
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header9")}>
                        Header6
                    </button>
                </div>
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            </div>
            <div style={{paddingTop:"60px"}}class="text">

                <h1 id="header1"><b>Introduction</b></h1>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Thailand-RIS&apos; Human Practices team planned and carried out three interactive experiences based on genetic engineering in plants as a possible solution to reduce climate induced stress. This was done in order to connect and engage with both our school (Ruamrudee International School) community and the greater Thai community.
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;In Thailand, GM crops are a growing and viable contributor to sustainable practices in food security and the economy. Because of this, the team must understand their impacts on the community and pair this with the implications of our project. To do this, we conducted two surveys about GMOs — one directed to farmers and one directed to the general public — to glean the general awareness of synthetic biology among producers (farmers) and consumers (buyers and distributors of products for local and international markets). Looking at the results, we noticed several misconceptions:
                    </p>

                        <h2><u>General Survey:</u></h2>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/introduction/01-in.png"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Our goal in Human Practices was to address these misconceptions for a more balanced and progressive understanding of the potential behind genetic engineering in relation to healthy crop production. In addition to visiting the communities who participated in the surveys, we also took inspiration from the results to create awareness workshops for both middle and elementary school-aged students so that stereotypes regarding GMOs can be minimized in future Thai generations. 
                            </p>
                                <b/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;All these projects were based on data collected using the sample population of 222 people who filled out the general survey T-RIS sent out.
                            </p>
                <h1 id="header2"><b>Chanthaburi Community Outreach</b></h1>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Chanthaburi is one of seven provinces in eastern Thailand, located on the Gulf of Thailand bordering Cambodia&apos;s Battambang and Pailin provinces. Chanthaburi is well known for its impact on the Thai economy through agriculture — namely durian production. It is the largest producer of durians in Thailand, generating more than tens of billions of baht for Thailand annually. Its land is highly suitable for growing durian, taking five to seven years for a young durian tree to grow mature enough to produce the delicious fruit we enjoy. 
                                </p>
                            <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/01-ch.jpg"/>
                                <h5>
                                    <i>Image of the durian farm</i> 
                                </h5>
                            <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/02-ch.jpg"/>
                                <h5>
                                    <i>Team Thailand-RIS&apos; Human Practices Team touring the durian farm.</i> 
                                </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The human practices team made two trips to Chanthaburi: the first was to conduct interviews with stakeholders and the second was to present our project and the potential benefits of genetic modification to local durian farmers and business leaders as well as political leaders. These trips were conducted according to data collected from this survey, which was sent across Thailand&apos;s agricultural provinces. We were able to do this with the help of the Mahachok Fruits, which is owned by Mr. Phatthanaphon — the father of one of our Human Practices co-leaders, Jacky. Mahachok Fruits is a business that engages with the agricultural industry. Using their connections within the community, the Human Practices team was able to more efficiently send this survey to a wider audience. 
                            </p>
                            
                <h1 id="header2">header2</h1>
                <h1 id="header3">header3</h1>
                <h1 id="header4">header4</h1>
                <h1 id="header5">header5</h1>
                <h1 id="header6">header6</h1>


            </div>
        </div>
    </div>
   
  );
}
