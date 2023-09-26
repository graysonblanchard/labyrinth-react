export interface IHighScore {
  name: string;
  score: number;
  date?: Date;
}

export interface IHighScoresProps {
  highScores: IHighScore[];
}

export function HighScores(props: IHighScoresProps) {
  const { highScores } = { ...props };

  return (
    <div className="high-scores">
        <span className="high-scores-title">High Scores:</span>
        <div className="high-scores-list">
            {highScores.slice(0, 9).map((highScore: IHighScore) => {
                return <span className="high-score">{highScore.name + ': ' + highScore.score}</span>
            })}
        </div>
    </div>
  );
}
