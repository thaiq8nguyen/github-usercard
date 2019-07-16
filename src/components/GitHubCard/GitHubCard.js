import React from 'react'


const GitHubCard = ({avatar, name, login, bio, location, blog, following, followers}) => {
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <img src={avatar} alt="" width="230" height="230"/>
          </div>
          <div className="media-content">
            <div className="content">
              <h3 className="title">{name}</h3>
              <p className="subtitle has-text-grey-light">{login}</p>
              <p>{bio ? bio:""}</p>
              <div className="columns">
                <div className="column is-one-quarter">
                  <p className="has-text-grey">{location ? "Location": null}</p>
                  <p className="has-text-grey">{blog ? "Blog": null}</p>
                </div>
                <div className="column is-half">
                  <p>{location}</p>
                  <a href={blog}>{blog}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <footer className="card-footer">
        <p className="card-footer-item">Following: {following}</p>
        <p className="card-footer-item">Followers: {followers}</p>
      </footer>
    </div>
  )
}

export default GitHubCard


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
