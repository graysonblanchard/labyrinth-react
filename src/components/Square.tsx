export enum SquareTypes {
  Wall = 'wall',
  Space = 'space',
  Player = 'player',
  Goal = 'goal'
}

export interface ISquareProps {
  xCoor: number,
  yCoor: number,
  squareType: SquareTypes,
  className: string
}

export function Square(props: ISquareProps) {
  const {squareType, className} = {...props}

  return <div className={`${className} ${squareType}`} />
}