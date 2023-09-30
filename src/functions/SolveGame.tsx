import { MoveDirection } from "../App";
import { SquareTypes } from "../components/Square";

function findNextMove(conglomerate: SquareTypes[][][], mapCount: number, moveCount: number, x: number, y: number): MoveDirection[] {
    let nextMove: MoveDirection;
    
    conglomerate[y][x][moveCount % mapCount] = SquareTypes.Wall;

    console.log('findNextMove start (current square position', x, y, ')');
    console.log('findNextMove start moveCount', moveCount);
    console.log('findNextMove start mapIndex', moveCount % mapCount);

    
    if(conglomerate[y + 1]) {
        console.log('test 1 - checking row', y + 1);
        if(conglomerate[y + 1][x]) {
            console.log('test 1 - square', x, y + 1);
            console.log('test 1 - type ', conglomerate[y + 1][x][moveCount % mapCount]);
            if(conglomerate[y + 1][x][moveCount % mapCount] === SquareTypes.Goal) {
                nextMove = MoveDirection.Up
                console.log('test 1 -', nextMove)
                console.log('goal reached')
                return [nextMove];
            }
            if(conglomerate[y + 1][x][moveCount % mapCount] === SquareTypes.Space) {
                nextMove = MoveDirection.Up
                // call it again with updated values
                console.log('test 1 -', nextMove);
                let currentMoveArray: MoveDirection[] = [nextMove]
                return currentMoveArray.concat(findNextMove(conglomerate, mapCount, moveCount + 1, x, y + 1));
            }
        }
    }
    
    if(conglomerate[y - 1]) {
        console.log('test 2 - checking row', y - 1);
        if(conglomerate[y - 1][x]) {
            console.log('test 2 - square', x, y - 1);
            console.log('test 2 - type ', conglomerate[y - 1][x][moveCount % mapCount]);
            if(conglomerate[y - 1][x][moveCount % mapCount] === SquareTypes.Goal) {
                nextMove = MoveDirection.Down
                console.log('test 2 -', nextMove);
                console.log('goal reached')
                return [nextMove];
            }
            if(conglomerate[y - 1][x][moveCount % mapCount] === SquareTypes.Space) {
                nextMove = MoveDirection.Down
                // call it again with updated values
                console.log('nextMove 2', nextMove);
                let currentMoveArray: MoveDirection[] = [nextMove]
                return currentMoveArray.concat(findNextMove(conglomerate, mapCount, moveCount + 1, x, y - 1));
            }
        }
    }
    
    if(conglomerate[y][x + 1]) {
        console.log('test 3 - checking column', y);
        console.log('test 3 - square', x + 1, y);
        console.log('test 3 - type ' + conglomerate[y][x + 1][moveCount % mapCount]);
        if(conglomerate[y][x + 1][moveCount % mapCount] === SquareTypes.Goal) {
            nextMove = MoveDirection.Right
            console.log('test 3 -', nextMove);
            console.log('goal reached')
            return [nextMove];
        }
        if(conglomerate[y][x + 1][moveCount % mapCount] === SquareTypes.Space) {
            nextMove = MoveDirection.Right
            // call it again with updated values
            console.log('test 3 -', nextMove);
            let currentMoveArray: MoveDirection[] = [nextMove];
            return currentMoveArray.concat(findNextMove(conglomerate, mapCount, moveCount + 1, x + 1, y));
        }
    } 
    
    if(conglomerate[y][x - 1]) {
        console.log('test 4 - checking column', y);
        console.log('test 4 - square', x - 1, y);
        console.log('test 4 - type ', conglomerate[y][x - 1][moveCount % mapCount]);
        if(conglomerate[y][x - 1][moveCount % mapCount] === SquareTypes.Goal) {
            nextMove = MoveDirection.Left
            console.log('test 4 -', nextMove);
            console.log('goal reached')
            return [nextMove];
        }
        if(conglomerate[y][x - 1][moveCount % mapCount] === SquareTypes.Space) {
            nextMove = MoveDirection.Left
            // call it again with updated values
            console.log('test 4-', nextMove);
            let currentMoveArray: MoveDirection[] = [nextMove];
            return currentMoveArray.concat(findNextMove(conglomerate, mapCount, moveCount + 1, x - 1, y));
        }
    }

    console.log('end findNextMove (current square position', x, y, ')');

    return [];
}

export function SolveGame(maps: SquareTypes[][][], startingPosition: number[]) {
    console.log('---------- solving game... ----------');

    let conglomerate: SquareTypes[][][] = [];
    let moveCount: number = 0;

    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[i].length; j++) {
            for(let k = 0; k < maps[i][j].length; k++) {
                if(conglomerate[j]) {
                    if(conglomerate[j][k]) {
                        conglomerate[j][k].push(maps[i][j][k]);
                    }
                    else {
                        conglomerate[j].push([maps[i][j][k]]);
                    }
                }
                else {
                    conglomerate.push([[maps[i][j][k]]]);
                }
            }
        }
    }

    let currentPosition = startingPosition;

    console.log('conglomerate', conglomerate)

    let movesList = findNextMove(conglomerate, maps.length, moveCount, currentPosition[1], currentPosition[0]);

    console.log('---------- end of solving ----------', movesList)
}