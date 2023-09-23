import * as React from "react";

export enum SquareColor {
  white = 'white',
  black = 'black'
}

export interface ISquareProps {
  x: number,
  y: number,
  color: SquareColor;
}

export function Square(props: ISquareProps) {
  const { x, y, color } = {...props}
  return <div className={`square ${color}`}>
    {x + ', ' + y}
  </div>;
}