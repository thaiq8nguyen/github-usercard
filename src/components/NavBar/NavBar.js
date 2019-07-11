import React from 'react'
import GitHubLogo from "../../assets/images/githublogo.png";
const NavBar = () => {

    const logoStyles = {
        marginLeft: "5px"
    }

    return (
        <nav className="navbar has-background-info">
            <div className="navbar-brand">
                <div className="level">
                    <div className="level-left">
                        <img src={GitHubLogo} alt="a GitHub Logo" className="image is-32x32" style={logoStyles}/>
                        <a href="" className="navbar-item has-text-white is-size-3">GitHub Profile Services</a>
                    </div>
                
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar
