// ICE
import React, { useState } from 'react';

class Card extends React.Component {
// CCR
// useState for Github data
constructor() {
    super();
    this.state={
	    name: "Hello World"
	};	
}


// GET request function for axios
//convert this to class method
let myObj = axios.get('https://api.github.com/users/cknoettg')
  .then(response => {
    cards.appendChild(cardCreator(response.data));
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })

  //render method
  render() {
      return (
          <h1>Github User Data</h1>
      );
  }//end of render

}//end of Card

export default Card;