import React from 'react'




interface proppity {
imageSource: string;
figureLegend: string;
}
const AccordionFigure = ({imageSource, figureLegend}: proppity) => {
return (
<>
<p className=' flex justify-center pt-4 pb-2'>
<img src={imageSource} className="mx-15 w-2/3 h-auto rounded-xl border-solid border-gray-800 border-2 drop-shadow-2xl" /></p>
<p className = 'text-lavender italic text-center text-sm pt-2 pb-4'>{figureLegend}</p>
</>
)
}


export default AccordionFigure;



