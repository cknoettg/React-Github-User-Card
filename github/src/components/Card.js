// ICE
import React, { useState } from 'react';
import axios from 'axios';

class Card extends React.Component {
    // CCR
    // useState for Github data
    constructor() {
        super();
        this.state={
            name: "",
            login: "",
            location: ""
        };	
    }

    // GET request function for axios
    //use componentDidMount
    componentDidMount() {
        axios.get('https://api.github.com/users/cknoettg')
        .then(response => {
            console.log(response);
            this.setState({
                name: response.data.name,
                login: response.data.login,
                location: response.data.location
            });
        })
        .catch(err => {
            console.log(err);
        })
    }//end of getData

    
    //render method
    render() {
        return (
            [<p>{this.state.name}</p>,
            <p>{this.state.login}</p>,
            <p>{this.state.location}</p>]
        )
    };//end of render

}//end of Card

export default Card;