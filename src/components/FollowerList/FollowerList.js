import React, { useState, useEffect } from 'react'
import GitHubAPI from "../../utils/GitHubAPI";
import GitHubCard from "../GitHubCard/GitHubCard";

const FollowerList = ({handle}) => {
    
    const [followers, setFollowers] = useState([]);
    const [user, setUser] = useState("");
    const [showModal, setModal] = useState(false);

    useEffect(() => {
    
        GitHubAPI.getFollowers(handle)
        .then((response) => {
          setFollowers(response.data);
          
        })
        .catch(error => {
            console.log(error);
        })
      },[handle])
    
    
    const getUser = (username) => {
        
        GitHubAPI.getUser(username)
        .then((response) => {
            setUser(response.data);
            setModal(true)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const closeModal = () => {
        setUser("")
        setModal(false)
    }

    return (
        <div>
            <div className="card">
                <header className="card-header has-background-info">
                    <h2 className="card-header-title has-text-white">Followers</h2>
                </header>
                <div className="card-content">
                    {followers.map(follower => (
                        <div className="media" key={follower.id}>
                            <div className="media-left">
                                <a href="#" onClick={() => getUser(follower.login)}>
                                <figure className="image is-48x48">
                                    <img src={follower.avatar_url} alt=""/>
                                </figure>
                                </a>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>{follower.login}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProfileModal 
                avatar={user.avatar_url}
                name={user.name} 
                login={user.login} 
                bio={user.bio} 
                location={user.location}
                blog={user.blog}
                following={user.following}
                followers={user.followers}
                showModal={showModal}
                closeModal={closeModal}
            />
        </div>
        
    )
}

const ProfileModal = ({avatar, name, login, bio, location, blog, following, followers, showModal, closeModal}) => {
    
    const modalClass = showModal ? "modal is-active" : "modal"
    return (
        <div className={modalClass}>
            <div className="modal-background"></div>
            <div className="modal-content">
            <GitHubCard 
                    avatar={avatar}
                    name={name} 
                    login={login} 
                    bio={bio} 
                    location={location}
                    blog={blog}
                    following={following}
                    followers={followers}
                    />
            </div>
            
            <a href="#" className="modal-close" onClick={closeModal}></a>
            
        </div>
    )
}

export default FollowerList
