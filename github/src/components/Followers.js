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
            console.log("User data", response);
            this.setState({
                user: response.data
            });
        })
        .catch(err => {
            console.log("Failed to get user", err);
        });
        
    }

    render() {
        return (
            <div className="follower-card">
                <img src={this.state.avatar_url} alt="friend" />
                <div className="card-info">
                    <h3 className="name">{this.state.name}</h3>
                    <p className="username">{this.state.login}</p>
                    <p>Location: {this.state.location}</p>
                    <p>Profile: 
                    <a href={this.state.profile}> {this.state.profile} </a>
                    </p>
                    <p>Followers: {this.state.followers}</p>
                    <p>Following: {this.state.following}</p>
                    <p>Bio: {this.state.bio}</p>
                </div>
            </div>
        )
    };

}

export default Followers;