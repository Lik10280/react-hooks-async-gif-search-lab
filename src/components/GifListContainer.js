import React from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";
import { useState, useEffect } from "react";

function GifListContainer (){
    const[gif, setGif] = useState([])
    const[search, setSearch] = useState("")
    // provide personal API key to a variable
    const apiKey= "M1ERXfrsAHT7xM2SOyp3YhkSdFFdGxbX";

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(({data}) => {
            const gifs = data.slice(0,3).map((gif)=>({url: gif.images.original.url }));
            setGif(gifs);
        })

    }, [search])


    return(
        <>
            <GifSearch search={setSearch} />
            <GifList gifs={gif}/>
        </>
    )
}

export default GifListContainer;