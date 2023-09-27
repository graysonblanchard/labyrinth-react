import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Difficulty } from './components/Board';
import { HighScores, IHighScore } from './components/HighScores';

interface IBackendData {
  recordsets: IHighScore[][];
  recordset: IHighScore[];
  output: any;
  rowsAffected: number[];
}

function App() {
  const [diff, setDiff] = useState<Difficulty>(Difficulty.Easy);
  const [isNewGameStarted, setIsNewGameStarted] = useState<boolean>(false);
  const [isRetryGame, setIsRetryGame] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [highScores, setHighScores] = useState<IHighScore[]>();

  useEffect(() => {
    fetch('/highScores').then((res) => {
      return res.json();
    })
    .then((data: IBackendData) => {
      console.log('highScores response', data.recordset);
      setHighScores(data.recordset);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='game-container'>
          <div className='title-and-highscores'>
            <h1 className='game-title'>Labyrinth</h1>
            <HighScores highScores={highScores}/>
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
                    <option disabled value={Difficulty.Medium}>Medium</option>
                    <option disabled value={Difficulty.Hard}>Hard</option>
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
