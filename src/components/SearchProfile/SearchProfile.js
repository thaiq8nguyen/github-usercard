import React, { useState } from 'react'
import GitHubAPI from "../../utils/GitHubAPI";

const SearchProfile = ({onResult}) => {
    
    const [query, setQuery] = useState("");
    

    const handleChangeInput = (event) => {
        setQuery(event.target.value);
    }
    const search = (event) => {
        event.preventDefault();
        GitHubAPI.getUser(query)
        .then(response => {
            //setResult(response.data)
            onResult(response.data)
            
        })

    }
    return (
        <div className="container">
            <form action="" onSubmit={search}>
                <div className="field">
                    <label htmlFor="" className="label">Profile Name</label>
                    <div className="control">
                        <input type="text"className="input" placeholder="Enter a GitHub's handle" onChange={handleChangeInput}/>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-info" onClick={search} type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchProfile
