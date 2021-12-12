import { useState } from 'react';
import './App.css';

import HomeHeader from './components/HomeHeader';
import UserProfiles from './components/UserProfiles';

function App() {
  const [filter, setFilter] = useState('');
  return (
    <div className="App">
      <HomeHeader setFilter={setFilter} />
      <UserProfiles filter={filter} />
    </div>
  );
}

export default App;
