import React, {FC, useEffect, useState} from "react";
import {Board} from "../../models/Board/Board";
import {CellComponent} from "../CellComponent/CellComponent";
import {Cell} from "../../models/Cell/Cell";
import {Player} from "../../models/Player/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
            updateBoard();
        } else {
            if (cell.figure?.colour === currentPlayer?.colour)
            setSelectedCell(cell);
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }
    
    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }
    
    return (
        <>
            <h2>Текущий игрок {currentPlayer?.colour}</h2>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                click={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </>
    )
}