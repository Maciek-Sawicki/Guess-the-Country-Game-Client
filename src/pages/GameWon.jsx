import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GameWon = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { country, attempts } = location.state || {};

    const startNewGame = () => {
        navigate('/');  
    };

    useEffect(() => {
        if (!country) {
            startNewGame();
        }
    }, [country, navigate]);

    return (
        <div>
            {country ? (
                <>
                    <h1>Congratulations! You won!</h1>
                    <p>The country you guessed correctly is: {country}</p>
                    <p>It took you {attempts} attempts to guess the correct country.</p>
                </>
            ) : (
                null
            )}
            <button onClick={startNewGame}>Start New Game</button>
        </div>
    );
};

export default GameWon;
