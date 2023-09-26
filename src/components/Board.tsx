import { useEffect, useState } from 'react';
import { Square } from './Square';
import { SquareTypes } from "./Square";
import { EasyMaps, MedMaps, HardMaps } from './Maps';

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum Direction {
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Right = 'ArrowRight'
}

export interface IBoardProps {
  difficulty: Difficulty;
  isGameStarted: boolean;
  isRetryGame: boolean;
  retryCount: number;
}

function generateGrid(difficulty: Difficulty, playerPosition: number[], moveCount: number) {
  let currentMap: SquareTypes[][] = [];

  switch (difficulty) {
    case Difficulty.Easy:
      currentMap = EasyMaps[moveCount % 3];
      break;
    case Difficulty.Medium:
      currentMap = MedMaps[moveCount % 3];
      break;
    case Difficulty.Hard:
      currentMap = HardMaps[moveCount % 3];
      break;
  }

  const mapRowSize = currentMap.length;
  const mapColumnSize = currentMap[0].length;

  let newGrid: React.ReactElement[][] = [];

  for(let i = mapRowSize - 1; i >= 0; i--) {
    let gridRow: React.ReactElement[] = [];

    for(let j = 0; j < mapColumnSize; j++) {
      let squareType = currentMap[i][j];
      if(playerPosition[0] === i && playerPosition[1] === j) {
        squareType = SquareTypes.Player
      }
      gridRow.push(
        <Square
          xCoor={j}
          yCoor={i}
          squareType={squareType}
          key={'square ' + i + '-' + j}
          className={'square ' + i + '-' + j}
        />)
    }

    newGrid.push(gridRow);
  }
  return newGrid;
}

function handleMove(currentPosition: number[], grid: React.ReactElement[][], direction: Direction) {
  let newPosition = currentPosition;

  switch (direction) {
    case Direction.Up:
      newPosition = [currentPosition[0] + 1, currentPosition[1]];
      break;
    case Direction.Down:
      newPosition = [currentPosition[0] - 1, currentPosition[1]];
      break;
    case Direction.Left:
      newPosition = [currentPosition[0], currentPosition[1] - 1];
      break;
    case Direction.Right:
      newPosition = [currentPosition[0], currentPosition[1] + 1];
      break;
  }
  
  const squareAtNewPosition = grid[(grid.length - 1) - newPosition[0]]
    ? (grid[(grid.length - 1) - newPosition[0]][newPosition[1]] ? grid[(grid.length - 1) - newPosition[0]][newPosition[1]] : undefined)
    : undefined;

  const isGoal = squareAtNewPosition ? squareAtNewPosition.props.squareType === SquareTypes.Goal : false;
  const isWall = squareAtNewPosition ? squareAtNewPosition.props.squareType === SquareTypes.Wall : false;
  const isOutOfBounds = newPosition[0] < 0 || newPosition[0] >= grid.length ||
                        newPosition[1] < 0 || newPosition[1] >= grid.length;

  if(isGoal)
    newPosition.push(-1);

  return (isWall || isOutOfBounds) ? currentPosition : newPosition;
}

export function Board(props: IBoardProps) {
  const {difficulty, isGameStarted, isRetryGame, retryCount} = {...props};
  const [moveCount, setMoveCount] = useState<number>(0);
  const [playerPosition, setPlayerPosition] = useState<number[]>([0,0]);
  const [grid, setGrid] = useState(generateGrid(difficulty, playerPosition, moveCount));
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    setGrid(generateGrid(difficulty, playerPosition, moveCount));
  }, [difficulty, playerPosition, moveCount]);

  useEffect(() => {
    if(!isGameStarted || isRetryGame) {
      setMoveCount(0);
      setIsGameOver(false);
      setPlayerPosition([0, 0]);
      setGrid(generateGrid(difficulty, [0,0], 0));
    }
  }, [difficulty, isGameStarted, isRetryGame, retryCount]);

  document.onkeydown = (e) => {
    if(isGameStarted && !isGameOver && (e.key === Direction.Up || e.key === Direction.Down || e.key === Direction.Left || e.key === Direction.Right)) {
      let newPosition = handleMove(playerPosition, grid, e.key as Direction);

      console.log('newPosition', newPosition);

      if(newPosition !== playerPosition) {
        setPlayerPosition(newPosition);
        setMoveCount(moveCount + 1);
      }
      if(newPosition.includes(-1)) {
        setIsGameOver(true);
      }
    }
  }

  // TODO:
  // - ADD WINNING MODAL
  // - MORE MENU OPTIONS?
  // - BETTER STYLES
  // - FACTOR OUT LOGIC FROM HERE INTO APP.TSX (!)
  // - CREATE DIFFERENT COMPONENTS TO BREAK THINGS UP FURTHER (!)
  // - ADD DB / API TO LEADERBOARD? (pass difficulty)

  return (
    <div className={`board ${props.difficulty}`}>
      {grid}
    </div>
  );
}