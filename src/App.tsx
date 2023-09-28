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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    fetch('/highScores').then((res) => {
      return res.json();
    })
    .then((data: IBackendData) => {
      console.log('highScores response', data.recordset);
      setHighScores(data.recordset);
    });
  }, []);

  function submitScore() {
    console.log('score submitted');

    const request = {
      name: username,
      score: retryCount
    }

    fetch('/highScoresPost', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => {
      console.log("highScoresPost res", res)
      return res.json();
    })
    .then((data: IBackendData) => {
      console.log('highScoresPost response', data.recordset);
      setHighScores(data.recordset);
    });
    resetGame();
  }

  function resetGame() {
    setShowModal(false);
    setIsNewGameStarted(false);
    setIsRetryGame(false);
  }

  return (
    <div className="App">
      {showModal &&
        <div className='winning-modal'>
          <div className='winning-modal-background'></div>
          <div className='winning-modal-window'>
            <div className='winning-modal-close' onClick={() => { resetGame(); }} />
            <h1>You win!</h1>
            <div className='winning-modal-scores'>Score: {retryCount} retries</div>
            <div className='winning-modal-prompt'>
              <input placeholder='Enter name...' id='username' maxLength={12} value={username} onChange={(e) => { setUsername(e.target.value)}} />
              <button className='winning-modal-submit btnPrimary' onClick={() => { submitScore(); }}>Submit</button>
            </div>
          </div>
        </div>
      }
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
            triggerGameOver={() => {
              setTimeout(() => {
                setShowModal(true);
              }, 200);
            }}
          />
          <div className='game-options'>
            {(isNewGameStarted || isRetryGame) &&
              <>
                <span className='retry-count'>Retries: {retryCount}</span>
                <button className='btnPrimary' onClick={() => { setIsRetryGame(true); setRetryCount(retryCount + 1)}}>
                  Retry
                </button>
                <button className='btnPrimary' onClick={() => { setIsNewGameStarted(false); setIsRetryGame(false); setRetryCount(0); }}>
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
                <button className='btnPrimary' onClick={() => { setIsNewGameStarted(true); }}>Start</button>
              </>
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
