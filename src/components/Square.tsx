export enum SquareTypes {
  Wall = 'wall',
  Space = 'space',
  Player = 'player',
  Goal = 'goal'
}

export interface ISquareProps {
  xCoor: number,
  yCoor: number,
  squareType: SquareTypes
}

export function Square(props: ISquareProps) {
  const {squareType} = {...props}

  return <div className={`square ${squareType}`} />
}