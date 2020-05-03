// ICE
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';

class Card extends React.Component {
    // CCR
    // useState for Github data
    constructor() {
        super();
        this.state={
            avatar_url: "",
            name: "",
            login: "",
            location: "",
            profile: "",
            followers: "",
            following: "",
            bio: ""
        };	
    }

    // GET request function for axios
    //use componentDidMount
    componentDidMount() {
        axios.get('https://api.github.com/users/cknoettg')
        .then(response => {
            console.log(response);
            this.setState({
                avatar_url: response.data.avatar_url,
                name: response.data.name,
                login: response.data.login,
                location: response.data.location,
                profile: response.data.url,
                followers: response.data.followers,
                following: response.data.following,
                bio: response.data.bio
            });
        })
        .catch(err => {
            console.log(err);
        })
    }//end of getData

    
    //render method
    render() {
        return (
            <div class="card">
                <img src={this.state.avatar_url} />
                <div class="card-info">
                    <h3 class="name">{this.state.name}</h3>
                    <p class="username">{this.state.login}</p>
                    <p>Location: {this.state.location}</p>
                    <p>Profile: 
                    <Router> 
                    <Link href={this.state.profile}> {this.state.profile}</Link>
                    </Router>
                    </p>
                    <p>Followers: {this.state.followers}</p>
                    <p>Following: {this.state.following}</p>
                    <p>Bio: {this.state.bio}</p>
                </div>
            </div>
        )
    };//end of render

}//end of Cards

export default Card;