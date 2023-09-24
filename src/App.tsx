import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Difficulty } from './components/Board';

function App() {
  const [diff, setDiff] = useState<Difficulty>(Difficulty.Easy);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <Board
          difficulty={diff}
          isGameStarted={isGameStarted}
        />
        <div className='game-options'>
          {isGameStarted &&
            <button className='btnPrimary' onClick={() => { setIsGameStarted(false) }}>Quit</button>
          }
          {!isGameStarted &&
            <>
              <div className='select-group'>
                <span className='select-label'>Difficulty:</span>
                <select className='select-difficulty' onChange={(e) => { setDiff(e.target.value as Difficulty); }}>
                  <option value={Difficulty.Easy}>{Difficulty.Easy}</option>
                  <option value={Difficulty.Medium}>{Difficulty.Medium}</option>
                  <option value={Difficulty.Hard}>{Difficulty.Hard}</option>
                </select>
              </div>
              <button className='btnPrimary' onClick={() => { setIsGameStarted(true) }}>Start</button>
            </>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
