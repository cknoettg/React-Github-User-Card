import React from 'react';
import Followers from './Followers';

class FollowerCard extends React.Component {
    constructor() {
        super();
        this.state={
            myFollowers: {}
        };
    }

    //when we do our render, do this.state.myFollowers.map ((element, index) => {
    // return <Followers key="index" value="element">
    //})
}

export default FollowerCard;