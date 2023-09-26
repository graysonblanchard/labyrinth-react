import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Difficulty } from './components/Board';
import { HighScores } from './components/HighScores';

function App() {
  const [diff, setDiff] = useState<Difficulty>(Difficulty.Easy);
  const [isNewGameStarted, setIsNewGameStarted] = useState<boolean>(false);
  const [isRetryGame, setIsRetryGame] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className='game-container'>
          <div className='title-and-highscores'>
            <h1 className='game-title'>Labyrinth</h1>
            <HighScores highScores={[{ name: 'grayson', score: 3 }]}/>
          </div>
          <Board
            difficulty={diff}
            isGameStarted={isNewGameStarted}
            isRetryGame={isRetryGame}
            retryCount={retryCount}
          />
          <div className='game-options'>
            {(isNewGameStarted || isRetryGame) &&
              <>
                <span className='retry-count'>Retries: {retryCount}</span>
                <button
                  className='btnPrimary'
                  onClick={() => {
                    setIsRetryGame(true);
                    setRetryCount(retryCount + 1)
                  }}
                  >
                  Retry
                </button>
                <button
                  className='btnPrimary'
                  onClick={() => {
                    setIsNewGameStarted(false);
                    setIsRetryGame(false);
                    setRetryCount(0);
                  }}
                  >
                  Quit
                  </button>
              </>
            }
            {!isNewGameStarted && !isRetryGame &&
              <>
                <div className='select-group'>
                  <span className='select-label'>Difficulty:</span>
                  <select className='select-difficulty' value={diff} onChange={(e) => { setDiff(e.target.value as Difficulty); }}>
                    <option value={Difficulty.Easy}>Easy</option>
                    <option value={Difficulty.Medium}>Medium</option>
                    <option value={Difficulty.Hard}>Hard</option>
                  </select>
                </div>
                <button className='btnPrimary' onClick={() => { setIsNewGameStarted(true) }}>Start</button>
              </>
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
