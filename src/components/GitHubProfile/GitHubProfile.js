import React, {useState, useEffect} from 'react'
import GitHubAPI from "../../utils/GitHubAPI";
import GitHubCard from "../GitHubCard/GitHubCard";
import FollowerList from "../FollowerList/FollowerList";
const GitHubProfile = () => {
    const [user, setUser] = useState("")
    useEffect(() => {
    
        GitHubAPI.getUser("thaiq8nguyen")
        .then((response) => {
          setUser(response.data)
        })
      }, [])
    return (
        <div className="section">
            <div className="columns">
                <div className="column">
                    <GitHubCard 
                    avatar={user.avatar_url}
                    name={user.name} 
                    login={user.login} 
                    bio={user.bio} 
                    location={user.location}
                    blog={user.blog}
                    following={user.following}
                    followers={user.followers}
                    />
                </div>
                <div className="column">
                    <FollowerList/>
                </div>
            </div>
        </div>
    )
}

export default GitHubProfile
