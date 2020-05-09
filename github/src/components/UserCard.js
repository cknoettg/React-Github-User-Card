import React from 'react';
import User from './User';

class FollowerCard extends React.Component {
    constructor() {
        super();
        this.state={
            myUser: {}
        };
    }

    render() {
        <User user={this.state.myUser} />
    }

}

export default FollowerCard;