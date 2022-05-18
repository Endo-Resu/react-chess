import {Colours} from "../Colours/Colours";
import logo from '../../assets/black-bishop.png'
import {Cell} from "../Cell/Cell";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure {
    colour: Colours;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(colour: Colours, cell: Cell) {
        this.colour = colour;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell) : boolean {
        return true
    }

    moveFigure(target: Cell) {

    }
}