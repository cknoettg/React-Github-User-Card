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
            this.setState({
                followers: response.data
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
                <p>{console.log(this.state.followers)}</p>
                <img src={this.state.followers[0].avatar_url} alt="friend" />
                <div className="card-info">
                    {/* <h3 className="name">{this.state.followers[0].name}</h3> */}
                    {/* <p className="username">{this.state.followers.login}</p>
                    <p>Location: {this.state.followers.location}</p>
                    <p>Profile: 
                    <a href={this.state.followers.profile}> {this.state.followers.profile} </a>
                    </p>
                    <p>Followers: {this.state.followers.followers}</p>
                    <p>Following: {this.state.followers.following}</p>
                    <p>Bio: {this.state.followers.bio}</p> */}
                </div>
            </div>
        )
    };

}

export default Followers;