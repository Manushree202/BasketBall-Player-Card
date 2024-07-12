import React from 'react';
import BasketballPlayerCard from './Components/BasketballPlayerCard.js';
import './App.css';

function App() {
  const playerStats = {
    pointsPerGame: 27.4,
    assistsPerGame: 8.1,
    reboundsPerGame: 19.5
  };

  return (
    <div className="App">
      <header className="App-header">
        <BasketballPlayerCard
          name="Dirk Nowitzki"
          image="/DirkNowitzki.jpg"
          position="Power Forward and Center"
          stats={playerStats}
        />
      </header>
    </div>
  );
}

export default App;

