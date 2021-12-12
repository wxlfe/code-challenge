import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import UserProfiles from './components/UserProfiles';

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfiles />
    </div>
  );
}

export default App;
