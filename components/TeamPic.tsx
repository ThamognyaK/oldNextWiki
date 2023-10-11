import React from 'react'

interface boop {
    Name: string;
    About: string;
    Fact: string;
    FavOnion: string;
    ImageURL: string;
  }
const TeamPic = ({Name, About, Fact, FavOnion, ImageURL}: boop) => {
    return (
<div className="grid grid-rows place-items-center rounded-2xl bg-Avocado w-3/4 h-auto my-9 drop-shadow-xl">
    <div className="relative w-full h-auto overflow-hidden bg-cover bg-no-repeat">
    <img src={ImageURL} className="w-full h-auto rounded-2xl"/>
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-Avocado bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-80 rounded-2xl">
    <div className="text-white font-bold text-2xl my-3 text-center">{Name}</div>
    <p className="text-center text-white mx-6 my-3"><a className="font-bold">About: </a>{About}</p>
    <p className="text-center text-white mx-6 my-3"><a className="font-bold">Fun Fact: </a>{Fact}</p>
    <p className="text-center text-white mx-6 my-3"><a className="font-bold">Favorite Dish with Onions: </a>{FavOnion}</p>
    </div>
    </div>
</div>
    )
}

export default TeamPic