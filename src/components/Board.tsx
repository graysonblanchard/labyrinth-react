import React, { useEffect, useState } from 'react';
import { Square } from './Square';
import { SquareTypes } from "./Square";
import { EasyMaps, MedMaps, HardMaps } from './Maps';
import { Difficulty, MoveDirection } from '../App';
//import { SolveGame } from '../services/SolveGame';

export interface IBoardProps {
  difficulty: Difficulty;
  isGameStarted: boolean;
  isRetryGame: boolean;
  retryCount: number;
  triggerGameOver(moveCount: number): any;
}

function generateGrid(difficulty: Difficulty, playerPosition: number[], moveCount: number) {
  let currentMap: SquareTypes[][] = [];

  switch (difficulty) {
    case Difficulty.Easy:
      //SolveGame(EasyMaps, playerPosition);
      currentMap = EasyMaps[moveCount % 3];
      break;
    case Difficulty.Medium:
      //SolveGame(MedMaps, playerPosition);
      currentMap = MedMaps[moveCount % 5];
      break;
    case Difficulty.Hard:
      //SolveGame(HardMaps, playerPosition);
      currentMap = HardMaps[moveCount % 7];
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

function handleMove(currentPosition: number[], grid: React.ReactElement[][], direction: MoveDirection) {
  let newPosition = currentPosition;

  switch (direction) {
    case MoveDirection.Up:
      newPosition = [currentPosition[0] + 1, currentPosition[1]];
      break;
    case MoveDirection.Down:
      newPosition = [currentPosition[0] - 1, currentPosition[1]];
      break;
    case MoveDirection.Left:
      newPosition = [currentPosition[0], currentPosition[1] - 1];
      break;
    case MoveDirection.Right:
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
  const {difficulty, isGameStarted, isRetryGame, retryCount, triggerGameOver} = {...props};
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
    if(isGameStarted && !isGameOver && (e.key === MoveDirection.Up || e.key === MoveDirection.Down || e.key === MoveDirection.Left || e.key === MoveDirection.Right)) {
      let newPosition = handleMove(playerPosition, grid, e.key as MoveDirection);

      if(newPosition !== playerPosition) {
        setPlayerPosition(newPosition);
        setMoveCount(moveCount + 1);
      }
      if(newPosition.includes(-1)) {
        setIsGameOver(true);
        triggerGameOver(moveCount);
      }
    }
  }

  // TODO:
  // - FACTOR OUT LOGIC FROM HERE INTO APP.TSX (!)
  // - CREATE DIFFERENT COMPONENTS TO BREAK THINGS UP FURTHER (!)
  //
  // - merge init into main branch, use main for deployment
  // - include move count to high scores?
  // - merge retryCount & localStorage to one variable?
  //
  // - for yuga -> end of game modal (only board has awareness)

  return (
    <div className={`board ${props.difficulty}`}>
      {grid}
    </div>
  );
}