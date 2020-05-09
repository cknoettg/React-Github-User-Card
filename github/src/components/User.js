// ICE
import React from 'react';
import axios from 'axios';

class Card extends React.Component {
    // CCR
    // state for Github data
    constructor() {
        super();
        this.state={
            user: []
        };	
    }

    // GET request function for axios
    //use componentDidMount
    componentDidMount() {
        axios.get('https://api.github.com/users/cknoettg')
        .then(response => {
            console.log("User data", response);
            this.setState({
                user: response.data
            });
        })
        .catch(err => {
            console.log("Failed to get user", err);
        });
        
    }//end of componentDidMount

    
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
            </div>
        )
    };//end of render

}//end of User

export default Card;