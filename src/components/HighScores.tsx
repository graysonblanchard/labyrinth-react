import * as React from 'react';
import { MoonLoader } from 'react-spinners';

export interface IHighScore {
  Id: number;
  Name: string;
  Score: number;
  Date?: Date;
}

export interface IHighScoresProps {
  highScores: IHighScore[] | undefined;
}

export function HighScores(props: IHighScoresProps) {
  const { highScores } = { ...props };

  return (
    <div className="high-scores">
        <span className="high-scores-title">High Scores:</span>
        {!highScores &&
          <MoonLoader
            size={40}
            color='#fff8e7'
            className='moon-loader'
          />
        }
        {highScores && 
          <div className="high-scores-list">
              {highScores.slice(0, 9).map((highScore: IHighScore) => {
                return (
                  <div className="high-score" key={'highScore-' + highScore.Id}>
                      <span className='high-score-name'>{highScore.Name}</span>
                      <span className='high-score-score'>{highScore.Score}</span>
                    </div>
                  ) 
                })}
          </div>
        }
    </div>
  );
}
