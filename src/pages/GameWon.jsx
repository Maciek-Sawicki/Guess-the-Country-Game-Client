import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useLocation, useNavigate } from 'react-router-dom';

const GameWon = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { country, attempts } = location.state || {};

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const startNewGame = () => {
        navigate('/');
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!country) {
            startNewGame();
        }
    }, [country, navigate]);

    return (
        <div className="won-container">
            {country && (
                <>
                    <Confetti width={windowWidth} height={windowHeight} recycle={false} numberOfPieces={300} gravity={0.1} initialVelocityY={3} />
                    <h1>Congratulations! You won!</h1>
                    <p>The country you guessed correctly is: <span>{country}</span></p>
                    <p>It took you <span>{attempts}</span> attempts to guess the correct country.</p>
                </>
            )}
            <button onClick={startNewGame}>Start New Game</button>
        </div>
    );
};

export default GameWon;
