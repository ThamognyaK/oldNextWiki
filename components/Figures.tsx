import React from 'react'




interface proppity {
imageSource: string;
figureLegend: string;
}
const Figures = ({imageSource, figureLegend}: proppity) => {
return (
<>
<h3 className = 'flex justify-center pt-4 pb-2'>
<img src={imageSource} className=" mx-15 w-2/3 h-auto rounded-xl border-solid border-BGreen border-2 hover:drop-shadow-lg" />
</h3>
<h3 className = 'text-Avocado italic text-center pt-2 pb-4'>{figureLegend}</h3>
</>
)
}




export default Figures;