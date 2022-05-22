import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardComponent} from "./components/BoardComponent/BoardComponent";
import {Board} from "./models/Board/Board";
import {Player} from "./models/Player/Player";
import {Colours} from "./models/Colours/Colours";

export const App = () => {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colours.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colours.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer);
    }, [])
    
    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.colour === Colours.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <div className="app">
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
        </div>
    )
}
