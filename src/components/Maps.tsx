import { SquareTypes } from "./Square";

const Wall = SquareTypes.Wall;
const Space = SquareTypes.Space;
const Goal = SquareTypes.Goal;
//const Player = SquareTypes.Player;

export const EasyMaps: SquareTypes[][][] = [
    [
        [Wall,Wall,Space,Space,Wall,Space,Wall,Space],
        [Space,Wall,Wall,Wall,Space,Space,Wall,Wall],
        [Wall,Space,Space,Wall,Wall,Wall,Space,Space],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Space,Wall,Wall,Space,Space,Space],
        [Space,Wall,Wall,Wall,Space,Space,Wall,Wall],
        [Space,Wall,Space,Space,Wall,Wall,Space,Wall],
        [Wall,Wall,Space,Wall,Space,Space,Wall,Goal]
    ],
    [
        [Wall,Space,Wall,Wall,Wall,Wall,Space,Wall],
        [Space,Space,Wall,Wall,Space,Wall,Space,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Space,Wall,Space],
        [Space,Wall,Wall,Wall,Space,Wall,Wall,Space],
        [Wall,Space,Wall,Space,Wall,Wall,Space,Space],
        [Wall,Space,Wall,Wall,Space,Space,Wall,Wall],
        [Space,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Space,Wall,Wall,Space,Wall,Space,Space],
        [Space,Wall,Space,Wall,Space,Space,Wall,Space],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Space,Space,Wall,Space,Wall],
        [Wall,Wall,Space,Wall,Wall,Space,Wall,Wall],
        [Space,Wall,Wall,Space,Wall,Space,Wall,Space],
        [Wall,Wall,Space,Wall,Wall,Wall,Space,Space],
        [Wall,Space,Wall,Wall,Space,Wall,Wall,Goal]
    ]
];

export const MedMaps: SquareTypes[][][] = [
    [
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ],
    [
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Space,Wall,Wall],
        [Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Wall,Goal]
    ]
];
 
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