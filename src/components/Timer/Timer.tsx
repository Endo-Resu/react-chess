import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../../models/Player/Player";
import {Colours} from "../../models/Colours/Colours";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

export const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.colour === Colours.WHITE ? decrementWhiteTimer : decrementBlackTimer;

        timer.current = setInterval(callback, 1000)
    }
    
    function decrementBlackTimer() {
        setBlackTime(prevState => prevState - 1)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prevState => prevState - 1)
    }

    const handleRestart = () => {
        setBlackTime(300);
        setWhiteTime(300);
        restart()
    }

    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart Game</button>
            </div>
            <h3>Черные - {blackTime}</h3>
            <h3>Белые - {whiteTime}</h3>
        </div>
    );
};
