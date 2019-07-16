import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import GitHubAPI from "./utils/GitHubAPI";
import "bulma/css/bulma.min.css";
import NavBar from "./components/NavBar/NavBar";
import GitHubProfile from "./components/GitHubProfile/GitHubProfile";
import SearchProfile from "./components/SearchProfile/SearchProfile";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const App = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
    
        GitHubAPI.getUser("thaiq8nguyen")
        .then((response) => {
          setProfile(response.data);
          
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    
    const handleSearchResult = (profile) => {
        setProfile(profile);

    }

    return (
        <div>
            <NavBar/>
            <div className="section">
                <div className="hero is-light">
                    <div className="hero-body">
                    <SearchProfile onResult={handleSearchResult}/>
                    </div>
                    
                </div>
            <div className="container">
                
                {profile 
                ? <GitHubProfile user={profile}/>
                : "No Data"
                }
            </div>
            </div>
            
            
            
        </div>
    )
}

render(<App/>, document.getElementById("app"));
