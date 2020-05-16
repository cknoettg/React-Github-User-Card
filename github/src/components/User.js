// ICE
import React from 'react';
import axios from 'axios';

class User extends React.Component {
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
                <img src={this.state.user.avatar_url} style={{width:200,height:200}} alt="me" />
                <div className="card-info">
                    <h3 className="name">{this.state.user.name}</h3>
                    <p className="username">{this.state.user.login}</p>
                    <p>Location: {this.state.user.location}</p>
                    <p>Profile: 
                    <a href={this.state.user.profile}> {this.state.user.profile} </a>
                    </p>
                    <p>Followers: {this.state.user.followers}</p>
                    <p>Following: {this.state.user.following}</p>
                    <p>Bio: {this.state.user.bio}</p>
                </div>
            </div>
        )
    };//end of render

}//end of User

export default User;