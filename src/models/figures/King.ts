import {Figure, FigureNames} from "./Figure";
import {Colours} from "../Colours/Colours";
import {Cell} from "../Cell/Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {

    constructor(colour: Colours, cell: Cell) {
        super(colour, cell);
        this.logo = colour === Colours.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }
}