import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { HighScores, IHighScore } from './components/HighScores';

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum MoveDirection {
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Right = 'ArrowRight'
}

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
  const [moveCount, setMoveCount] = useState<number>(0);

  useEffect(() => {
    let localStorageRetry = localStorage.getItem("retryCount") ? JSON.parse(localStorage.getItem("retryCount") as string)[diff] : 0;
    setRetryCount(localStorageRetry);
  }, [diff]);

  useEffect(() => {
    fetch('/highScores').then((res) => {
      return res.json();
    })
    .then((data: IBackendData) => {
      console.log('highScores get res', data.recordset);
      setHighScores(data.recordset);
    });
  }, []);

  function submitScore() {
    console.log('score submitted');

    const request = {
      name: username,
      score: retryCount,
      moves: moveCount,
      difficulty: diff
    }

    fetch('/highScores', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => {
      return res.json();
    })
    .then((data: IBackendData) => {
      console.log('highScores post res', data.recordset);
      setHighScores(data.recordset);
    });
    resetGame();
  }

  function setLocalStorageRetry(value: number, diff: Difficulty) {
    let currentStorage = localStorage.getItem("retryCount")
      ? JSON.parse(localStorage.getItem("retryCount") as string)
      : {
          easy: 0,
          medium: 0,
          hard: 0
        };

    console.log('original currentStorage', currentStorage);

    switch (diff) {
      case Difficulty.Easy:
        currentStorage.easy = value;
        break;
      case Difficulty.Medium:
        currentStorage.medium = value;
        break;
      case Difficulty.Hard:
        currentStorage.hard = value;
      break;
    }

    console.log('updated currentStorage', currentStorage);

    localStorage.setItem("retryCount", JSON.stringify(currentStorage));
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
            <div className='winning-modal-close' onClick={() => { resetGame(); setRetryCount(0); }} />
            <h1>You win!</h1>
            <div className='winning-modal-scores'>Score: {retryCount} retries</div>
            <div className='winning-modal-prompt'>
              <input placeholder='Enter name...' id='username' maxLength={18} value={username} onChange={(e) => { setUsername(e.target.value)}} />
              <button className='winning-modal-submit btnPrimary' onClick={() => { submitScore(); }}>Submit</button>
            </div>
          </div>
        </div>
      }
      <header className="App-header">
        <div className='game-container'>
          <div className='title-and-highscores'>
            <h1 className='game-title'>Labyrinth</h1>
            <HighScores highScores={highScores} difficulty={diff} />
          </div>
          <Board
            difficulty={diff}
            isGameStarted={isNewGameStarted}
            isRetryGame={isRetryGame}
            retryCount={retryCount}
            triggerGameOver={(moveCount: number) => {
              setTimeout(() => {
                setShowModal(true);
                setMoveCount(moveCount);
                setLocalStorageRetry(0, diff);
              }, 200);
            }}
          />
          <div className='game-options'>
            {(isNewGameStarted || isRetryGame) &&
              <>
                <span className='retry-count'>Retries: {retryCount}</span>
                <button className='btnPrimary' onClick={() => { setIsRetryGame(true); setRetryCount(retryCount + 1); setLocalStorageRetry(retryCount + 1, diff); }}>
                  Retry
                </button>
                <button className='btnPrimary' onClick={() => { resetGame(); }}>
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
