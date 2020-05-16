import React from 'react';
import './App.css';
import User from './components/User';
import Followers from './components/Followers';

function App() {
  return (
    <div className="App">
      <User />
      <Followers />
      {/* <FollowerCard /> */}
    </div>
  );
}

export default App;
