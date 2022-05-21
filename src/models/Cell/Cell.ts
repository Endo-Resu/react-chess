import {Colours} from "../Colours/Colours";
import {Figure} from "../figures/Figure";
import {Board} from "../Board/Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly colour: Colours;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x:number, y:number, colour: Colours, figure: Figure | null) {
        this.x = x;
        this.y =y;
        this.colour = colour;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.figure = this.figure;
            this.figure = null;
        }
    }
}