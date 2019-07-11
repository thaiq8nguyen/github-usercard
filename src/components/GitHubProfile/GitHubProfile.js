import React, {useState, useEffect} from 'react'

import GitHubCard from "../GitHubCard/GitHubCard";
import FollowerList from "../FollowerList/FollowerList";
const GitHubProfile = ({user}) => {
    
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
                    {
                        user.login 
                        ? <FollowerList handle={user.login}/>
                        : <div className="card">
                            <div className="card-content">
                                <p>The GitHub's user does not have any followers</p>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default GitHubProfile
