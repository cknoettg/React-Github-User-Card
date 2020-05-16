import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
    constructor() {
        super();
        this.state={
            followers: []
        };
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/TheTrabin/followers')
        .then(response => {
            console.log("Follower data", response.data);
            console.log("Data for one follower", response.data[0]);
            console.log("Avatar for one follower", response.data[0].avatar_url);
            let followersArray = response.data.map(foll =>
                // axios.get(`https://api.github.com/users/${foll.login}`)
                // .then(followerInfo => 
                    <div>
                        <img src={foll.avatar_url} style={{width:200,height:200}} alt="friend" />
                        {/* <h3 className="name">{followerInfo.name}</h3> */}
                        <p className="username">{foll.login}</p>
                        {/* <p>Location: {followerInfo.location}</p>
                        <p>Profile: 
                        <a href={followerInfo.profile}> {followerInfo.profile} </a>
                        </p>
                        <p>Followers: {followerInfo.followers}</p>
                        <p>Following: {followerInfo.following}</p>
                        <p>Bio: {followerInfo.bio}</p> */}
                        {console.log(foll.avatar_url)}
                        {/* returns an array of prmoises */}
                    </div>                
                //)
            )
            this.setState({
                followers: followersArray
            });
        })
        .catch(err => {
            console.log("Failed to get follower", err);
        });
        
    }

    //loop through each follower? Outsource this
    // function to FollowerCard

    render() {
        return (
            <div className="follower-card">
                <h3>Followers</h3>
                <div className="card-info">
                    <div>{this.state.followers}</div>
                </div>
            </div>
        )
    };

}

export default Followers;