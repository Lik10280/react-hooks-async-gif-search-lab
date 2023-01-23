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
                Giphy name
                <input type="text" name="name" value={userSearch} onChange={handleSearch}/>
            </label>
            <button type="submit" value="Submit">Search</button>
            </form> }
        </div>
    )
}
export default GifSearch;