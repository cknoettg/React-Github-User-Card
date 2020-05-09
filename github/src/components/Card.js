// ICE
import React from 'react';
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
            bio: "",
            friends:[]
        };	
    }

    // GET request function for axios
    //use componentDidMount
    componentDidMount() {
        axios.get('https://api.github.com/users/cknoettg')
        .then(response => {
            console.log("User data", response);
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
            console.log("Failed to get user", err);
        }); //end of first axios call - my card
        axios.get('https://api.github.com/users/TheTrabin/followers')
        .then(res => {
            console.log("Follower logins", res.data)
            res.data.map(data=>{
                axios.get(`https://api.github.com/users/${data.login}`)
                .then(info => {
                    console.log("Friends data", info.data)
                    this.setState({
                      friends: info.data
                    }); //end setState
                }) // end then
                return this.state.friends;
            }) //end map
            
                // avatar_url: response.data.avatar_url,
                // name: response.data.name,
                // login: response.data.login,
                // location: response.data.location,
                // profile: response.data.url,
                // followers: response.data.followers,
                // following: response.data.following,
                // bio: response.data.bio
        }) //end then
        .catch(err => {
            console.log("Failed to get friends", err);
        }); //end of second axios call - follower data
    }//end of getData

    
    //render method
    render() {
        return (
            <div className="card">
                <img src={this.state.avatar_url} alt="me" />
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
                <div className="friends">
                    <p>{this.state.friends.name}</p>
                </div>
            </div>
        )
    };//end of render

}//end of Cards

export default Card;