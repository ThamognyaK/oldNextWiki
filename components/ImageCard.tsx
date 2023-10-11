import React from 'react'




interface haha {
Title: string;
Image: string;
Description: string;
}




const ImageCard = ({Title, Image, Description}: haha) => {
return (
<div className="bg-white w-4/5 h-auto rounded-xl drop-shadow-2xl">
<div className="text-center font-bold py-2 mx-4">{Title}</div>
<img className="w-full h-auto" src={Image}/>
<div className="text-center py-2 mx-4 text-BGreen">{Description}</div>
</div>
)
}




export default ImageCard





