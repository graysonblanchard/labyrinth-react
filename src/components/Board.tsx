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
    default:
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
          key={'square-' + i + '-' + j}
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
    default:
      console.warn('Undetected move');
      break;
  }
  
  const squareAtNewPosition = grid[(grid.length - 1) - newPosition[0]]
    ? (grid[(grid.length - 1) - newPosition[0]][newPosition[1]] ? grid[(grid.length - 1) - newPosition[0]][newPosition[1]] : undefined)
    : undefined;

  const isWall = squareAtNewPosition ? squareAtNewPosition.props.squareType === SquareTypes.Wall : false;
  const isOutOfBounds = newPosition[0] < 0 || newPosition[0] >= grid.length ||
                        newPosition[1] < 0 || newPosition[1] >= grid.length;

  return (isWall || isOutOfBounds) ? currentPosition : newPosition;
}

export function Board(props: IBoardProps) {
  const {difficulty, isGameStarted} = {...props};
  const [moveCount, setMoveCount] = useState<number>(0);
  const [playerPosition, setPlayerPosition] = useState<number[]>([0,0]);
  const [grid, setGrid] = useState(generateGrid(difficulty, playerPosition, moveCount));

  useEffect(() => {
    setGrid(generateGrid(difficulty, playerPosition, moveCount));
  }, [difficulty, playerPosition, moveCount]);

  useEffect(() => {
    if(isGameStarted === false) {
      setMoveCount(0);
      setPlayerPosition([0, 0]);
      setGrid(generateGrid(difficulty, [0,0], 0));
    }
  }, [difficulty, isGameStarted]);

  document.onkeydown = (e) => {
    if(isGameStarted && (e.key === Direction.Up || e.key === Direction.Down || e.key === Direction.Left || e.key === Direction.Right)) {
      let newPosition = handleMove(playerPosition, grid, e.key as Direction)

      if(newPosition !== playerPosition) {
        setPlayerPosition(newPosition);
        setMoveCount(moveCount + 1);
      }
    }
  }

  // TODO:
  // - FACTOR OUT LOGIC FROM HERE INTO APP.TSX

  return (
    <div className={`board ${props.difficulty}`}>
      {grid}
    </div>
  );
}