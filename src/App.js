import React from "react";
import { render } from "react-dom";
import "bulma/css/bulma.min.css";
import NavBar from "./components/NavBar/NavBar";
import GitHubProfile from "./components/GitHubProfile/GitHubProfile";

const App = () => {
    return (
        <div>
            <NavBar/>
            <div className="section">
            <div className="container">     
                <GitHubProfile/>
            </div>
            </div>
            
            
            
        </div>
    )
}

render(<App/>, document.getElementById("app"));
