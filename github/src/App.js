import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

function App() {
  return (
    <div className="App">
      <UserCard />
      <FollowerCard />
    </div>
  );
}

export default App;
