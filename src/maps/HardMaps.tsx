import { SquareTypes } from "../components/Square";

//const Wall = SquareTypes.Wall;
const Space = SquareTypes.Space;
const Goal = SquareTypes.Goal;
//const Player = SquareTypes.Player;


// --- Solution: ---
// up up right down right up
// up up right right up up
// right right down down down right
// up up up up up up
// left left left up right right
// down right down right down right 
// right up right up left up right up
export const HardMaps: SquareTypes[][][] = [
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ],
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ],
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ],
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ],
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ],
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ],
    [
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space],
        [Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Space,Goal]
    ]
];