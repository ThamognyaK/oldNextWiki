import React from 'react'

interface bippidy {
citationText: string;
doi: string;
}
const Sources = ({citationText, doi}: bippidy) => {
return (
<>
<h3> {citationText}
<a href = {doi} className = "bg-newtallow max-w-lg w-full lg:max-w-full lg:flex flex text-left font-medium text-DMagenta hover:underline mx-15 py-0 pb-4"> {doi} </a>
</h3>
</>
)
}

export default Sources;