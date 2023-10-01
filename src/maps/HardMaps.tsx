import { SquareTypes } from "../components/Square";

const Wall = SquareTypes.Wall;
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
export const HardMapsBase: SquareTypes[][][] = [
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ]
];

export const HardMaps: SquareTypes[][][] = [
    [
        [Wall,Space,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Space],
        [Space,Space,Wall,Wall,Wall,Space,Wall,Space,Wall,Wall,Space,Wall],
        [Wall,Wall,Space,Space,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Space],
        [Space,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Space],
        [Wall,Space,Wall,Wall,Wall,Space,Wall,Space,Wall,Space,Wall,Goal]
    ],
    [
        [Space,Wall,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Space,Space],
        [Wall,Space,Space,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Wall],
        [Space,Wall,Space,Space,Wall,Wall,Wall,Space,Wall,Wall,Space,Wall],
        [Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Space,Space,Wall,Space],
        [Space,Wall,Wall,Space,Wall,Wall,Space,Wall,Space,Space,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Space,Wall,Space,Space,Wall,Wall,Space],
        [Wall,Space,Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Space],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Space],
        [Wall,Space,Wall,Wall,Wall,Space,Wall,Space,Wall,Space,Space,Wall],
        [Space,Wall,Space,Wall,Space,Wall,Wall,Wall,Wall,Space,Space,Wall],
        [Wall,Space,Wall,Space,Wall,Space,Space,Wall,Space,Wall,Space,Wall],
        [Wall,Space,Wall,Space,Space,Wall,Space,Wall,Space,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Space,Wall,Wall,Space,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Space,Wall,Space],
        [Wall,Space,Wall,Space,Space,Wall,Wall,Wall,Wall,Space,Space,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,Wall,Wall],
        [Space,Wall,Wall,Wall,Space,Wall,Wall,Space,Space,Wall,Wall,Wall],
        [Wall,Wall,Space,Space,Space,Wall,Space,Wall,Space,Wall,Wall,Space],
        [Wall,Wall,Space,Wall,Space,Space,Wall,Space,Wall,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Wall,Space,Space],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Space,Wall,Wall,Space,Space,Space,Wall,Space,Wall],
        [Space,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall],
        [Wall,Wall,Space,Wall,Space,Wall,Space,Space,Wall,Wall,Space,Goal]
    ],
    [
        [Wall,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall],
        [Space,Wall,Space,Wall,Space,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Space,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Space,Wall,Wall,Space,Wall,Wall,Space,Wall,Space,Wall,Space,Wall],
        [Wall,Wall,Space,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Space],
        [Space,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Space,Wall,Space,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Space],
        [Space,Space,Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,Wall,Space],
        [Wall,Wall,Space,Space,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall],
        [Space,Wall,Wall,Space,Space,Wall,Wall,Wall,Space,Wall,Wall,Goal]
    ],
    [
        [Space,Wall,Wall,Space,Wall,Space,Wall,Space,Wall,Space,Space,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Wall],
        [Space,Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Wall],
        [Wall,Wall,Space,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Space,Wall,Space,Space,Wall,Wall,Wall,Space],
        [Space,Wall,Wall,Space,Wall,Space,Wall,Wall,Wall,Space,Wall,Space],
        [Wall,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Space],
        [Space,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Wall,Space,Wall,Space,Wall,Wall,Wall,Space],
        [Space,Wall,Wall,Wall,Wall,Space,Space,Wall,Space,Space,Wall,Wall],
        [Wall,Space,Space,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Goal]
    ],
    [
        [Wall,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall],
        [Wall,Space,Space,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Space,Space],
        [Space,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Space,Wall,Space,Wall,Wall,Wall,Space],
        [Space,Space,Wall,Wall,Space,Space,Wall,Space,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Space,Wall,Wall,Wall],
        [Space,Space,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,Wall,Wall,Space,Wall,Wall,Space,Wall,Goal]
    ],
    [
        [Space,Wall,Space,Wall,Space,Space,Wall,Space,Wall,Space,Wall,Space],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,Space,Wall,Wall,Space,Wall,Wall,Wall,Space],
        [Wall,Wall,Space,Space,Wall,Space,Wall,Wall,Wall,Space,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Space,Wall],
        [Wall,Wall,Space,Space,Wall,Space,Space,Wall,Wall,Space,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Space,Space,Space,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,Space,Space,Wall,Space,Wall,Wall,Space,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Space,Wall,Space,Wall,Wall,Space,Wall],
        [Space,Wall,Space,Wall,Space,Wall,Space,Wall,Space,Wall,Wall,Goal]
    ]
];