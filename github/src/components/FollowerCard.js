import React from 'react';
import Followers from './Followers';

class FollowerCard extends React.Component {
    constructor() {
        super();
        this.state={
            myFollowers: []
        };
    }

    //or do I need to do all this?
    // maybe I can just have one loop, and add each
    // Follower
    
    //add followers data to state   

    //setState using ComponentDidMount
    componentDidMount() {
        this.setState({
            myFollowers: Followers.followers        
        });
    }

    //when we do our render, do this.state.myFollowers.map ((element, index) => {
    // return <Followers key="index" value="element">
    //})
}

export default FollowerCard;