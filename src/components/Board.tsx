import { useState } from 'react';
import { Square } from './Square';
import { SquareColor } from "./Square";

export interface IBoardProps {

}

const GridColumnSize: number = 8;
const GridRowSize: number = 8;

export function Board(props: IBoardProps) {
  const [flipColors, setFlipColors] = useState<boolean>(false);

  function getGrid(gridRowSize: number, gridColumnSize: number) {
    let gridRows: any[] = [];
    for(let i = gridRowSize - 1; i >= 0; i--) {
      for(let j = 0; j < gridColumnSize; j++) {
        const squareColor = ((i + j) % 2 === 0) ? (flipColors ? SquareColor.white : SquareColor.black) : (flipColors ? SquareColor.black : SquareColor.white);
        gridRows.push(<Square x={j} y={i} color={squareColor}/>)
      }
    }
  
    return gridRows;
  }

  return (
    <div className="board">
      {getGrid(GridRowSize, GridColumnSize)}
      <button className='btnFlipColor' onClick={() => { setFlipColors(!flipColors) }}>Flip Color</button>
    </div>
  );
}