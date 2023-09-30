import { SquareTypes } from "../components/Square";

const Wall = SquareTypes.Wall;
const Space = SquareTypes.Space;
const Goal = SquareTypes.Goal;
//const Player = SquareTypes.Player;


// --- Solution: ---
// up up right right up up,
// left up left up right right,
// right right up right down down,
// down down right up right up
// down up up
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