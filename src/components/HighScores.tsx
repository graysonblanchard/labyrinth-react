import React, { useEffect, useState }from 'react';
import { MoonLoader } from 'react-spinners';
import { Difficulty } from '../App';

export interface IHighScore {
  Id: number;
  Name: string;
  Score: number;
  Moves: number;
  Difficulty: Difficulty;
  Date?: Date;
}

export interface IHighScoresProps {
  highScores: IHighScore[] | undefined;
  difficulty: Difficulty;
}

export function HighScores(props: IHighScoresProps) {
  const { highScores, difficulty } = { ...props };
  const [ pageStartCount, setPageStartCount ] = useState<number>(0);
  const [ isEndOfPagination, setIsEndOfPagination ] = useState<boolean>(false);

  useEffect(() => {
    if(highScores) {
      if((pageStartCount + 9) > highScores.filter((score: IHighScore) => { return score.Difficulty === difficulty }).length) {
          setIsEndOfPagination(true);
        }
      else
        setIsEndOfPagination(false);
    }
  }, [highScores, difficulty, pageStartCount]);

  return (
    <div className="high-scores">
        <span className="high-scores-title">High Scores</span>
        {!highScores &&
          <MoonLoader
            size={40}
            color='#fff8e7'
            className='moon-loader'
          />
        }
        {highScores && 
          <>
            <div className='high-scores-col-names'>
              <span className='high-scores-name'>Name</span>
              <span className='high-scores-retries'>Retries</span>
            </div>
            <div className="high-scores-list">
                {highScores
                  .filter((score: IHighScore) => { return score.Difficulty === difficulty })
                  .slice(pageStartCount, pageStartCount + 10)
                  .map((highScore: IHighScore, index: number) => {
                    return (
                      <div className="high-score" key={'highScore-' + highScore.Id}>
                        <span className='high-score-index'>{(index + pageStartCount + 1) + '. '}</span>
                        <span className='high-score-name'>{highScore.Name}</span>
                        <span className='high-score-score'>{highScore.Score}</span>
                      </div>
                    ) 
                })}
                <button className={'btnPagination prev ' + ((pageStartCount <= 0) ? 'disabled' : '')} onClick={() => {
                  if(pageStartCount > 0)
                    setPageStartCount(pageStartCount - 10);
                }}>{'<'}</button>
                <button className={'btnPagination next ' + (isEndOfPagination ? 'disabled' : '')} onClick={() => {
                  if(!isEndOfPagination) {
                    setPageStartCount(pageStartCount + 10);
                  }
                }}>{'>'}</button>
            </div>
          </>
        }
    </div>
  );
}
