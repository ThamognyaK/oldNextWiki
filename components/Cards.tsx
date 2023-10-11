import React from 'react'




interface proppity {
cardTitle: string;
paragraph: string;
}
const Cards = ({cardTitle, paragraph}: proppity) => {
return (
<div className="w-full lg:flex flex drop-shadow-2xl">
<div className="border-r border-b border-l bg-tallow rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal">
<div className="mb-8">
<div className=" text-BGreen font-bold text-xl w-full mb-2 text-center">{cardTitle}</div>
<p className=" text-DGreen text-base text-center mx-4"> {paragraph}</p>
</div>
</div>
</div>
)
}




export default Cards;