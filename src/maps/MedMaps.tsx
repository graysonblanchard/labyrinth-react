import { SquareTypes } from "../components/Square";

const Wall = SquareTypes.Wall;
const Space = SquareTypes.Space;
const Goal = SquareTypes.Goal;
//const Player = SquareTypes.Player;


// --- Med solution: ---
// right up right right up up up left
// up right right up right right down down
// down left down right down down right right
// up up up right up up up left
// up left up right up right
export const MedMapsBackup: SquareTypes[][][] = [
    [
        [Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,/**/Space/**/],
        [Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall],
        [Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,/**/Space/**/,/**/Space/**/],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall],
        [Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,/**/Space/**/],
        [Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/],
        [Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Wall,Wall,/**/Space/**/,Wall,Wall,/**/Space/**/,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,/**/Space/**/,Wall,Wall,/**/Space/**/,Wall,Wall,/**/Space/**/],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ]
];

// Don't love it but it works...
export const MedMaps: SquareTypes[][][] = [
    [
        [Wall,/**/Space/**/,Space,Wall,Space,Wall,Space,Space,Wall,Space],
        [Space,Wall,Space,Wall,Space,Wall,/**/Space/**/,Wall,Wall,Wall],
        [Space,Wall,Wall,Space,Wall,Wall,Space,Wall,/**/Space/**/,Wall],
        [Wall,Space,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Space,/**/Space/**/],
        [Wall,Wall,Wall,Space,Wall,Space,/**/Space/**/,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Wall,Wall,Space,Space,/**/Space/**/],
        [Wall,Wall,Space,Space,Wall,Space,Wall,Wall,Wall,Wall],
        [Space,Wall,Space,Wall,Space,Wall,Wall,/**/Space/**/,/**/Space/**/,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Space,Wall,Wall,Goal]
    ],
    [
        [Space,Wall,Space,Wall,Wall,Wall,/**/Space/**/,Wall,Space,Wall],
        [Wall,/**/Space/**/,Wall,Wall,Wall,Space,Wall,Space,Wall,Space],
        [Space,Wall,Wall,Space,Space,Wall,Space,Wall,/**/Space/**/,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,/**/Space/**/,Wall],
        [Space,Wall,Wall,/**/Space/**/,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Space,Wall,Space,Space,/**/Space/**/,Wall,Wall,Wall,/**/Space/**/,/**/Space/**/],
        [Wall,Space,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall],
        [Space,Wall,Wall,Space,Wall,Space,Wall,Space,/**/Space/**/,Wall],
        [Wall,Wall,Wall,Space,Wall,Space,Space,Wall,/**/Space/**/,Goal]
    ],
    [
        [Space,Wall,Wall,Space,Wall,Space,Wall,/**/Space/**/,Wall,Space],
        [Wall,Space,/**/Space/**/,Wall,Wall,Space,Wall,Wall,Wall,Space],
        [Space,Space,Wall,Space,Wall,Space,Wall,Space,Wall,Space],
        [Wall,Space,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Space,/**/Space/**/],
        [Space,Wall,/**/Space/**/,Wall,Space,Space,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Space,Space,Wall,Space,Wall,Wall,Wall],
        [Space,Space,Wall,Space,Wall,/**/Space/**/,Wall,Wall,/**/Space/**/,Wall],
        [Wall,Space,Space,Wall,Wall,Wall,Wall,Wall,/**/Space/**/,Wall],
        [Space,Space,Wall,Space,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Space,Wall,Wall,/**/Space/**/,Goal]
    ],
    [
        [Wall,Space,Space,Space,Wall,Space,Wall,Wall,/**/Space/**/,Space],
        [Wall,Wall,Space,/**/Space/**/,Wall,Space,Wall,Space,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,/**/Space/**/,Wall,Wall,Wall,Wall],
        [Space,Wall,Wall,Space,Wall,Space,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Space,Wall,/**/Space/**/],
        [Space,Wall,/**/Space/**/,Wall,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Space,Wall,Space,Wall,Wall,/**/Space/**/,Wall,Space,Wall],
        [Wall,Space,Space,Space,Wall,Wall,Wall,/**/Space/**/,/**/Space/**/,Wall],
        [Space,Wall,Wall,Wall,Space,Wall,Space,Space,Wall,Wall],
        [Space,Wall,Space,Wall,Space,Wall,Space,Wall,Space,Goal]
    ],
    [
        [Space,Space,Wall,Space,Space,Wall,Space,Space,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Space,/**/Space/**/,Wall],
        [Space,Wall,Wall,/**/Space/**/,Space,Wall,/**/Space/**/,Wall,Space,Wall],
        [Wall,Wall,Space,Wall,Wall,Space,Wall,Space,Wall,Wall],
        [Wall,Space,Space,Wall,Space,Wall,Wall,Wall,Wall,Space],
        [Space,Space,Wall,/**/Space/**/,Space,Wall,/**/Space/**/,Wall,Wall,/**/Space/**/],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Space,Wall,Space],
        [Space,Wall,Space,Wall,Wall,Space,Wall,/**/Space/**/,Wall,Wall],
        [Space,Wall,Wall,Space,Space,Wall,Wall,/**/Space/**/,Wall,Wall],
        [Wall,Space,Wall,Wall,Space,Wall,Space,Wall,Wall,Goal]
    ]
];
 
// With the following map, my sample solve algorithm works
//export const MedMapsSolve: SquareTypes[][][] = [
//     [
//         [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
//     ],
//     [
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
//     ],
//     [
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
//     ],
//     [
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
//     ],
//     [
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall],
//         [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
//     ]
// ];