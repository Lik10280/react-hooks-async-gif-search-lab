import { useState } from "react";
function GifSearch({search}){
     const[userSearch, setUserSearch]= useState("")

    function handleSearch(event){
         setUserSearch(event.target.value)
     }

    function handleSubmit(event){
        event.preventDefault()
        search(userSearch)
     }
    return(
        <div>
        { <form onSubmit={handleSubmit}>
            <label>
                Enter Giphy name
                <input type="text" name="name" value={userSearch} onChange={handleSearch}/>
            </label>
            <button type="submit" value="Submit">Search Gifs</button>
            </form> }
        </div>
    )
}
export default GifSearch;