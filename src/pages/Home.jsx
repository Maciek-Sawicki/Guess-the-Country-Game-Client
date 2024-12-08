import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        navigate('/game-session');
    };

    return (
        <div className="home-page">
            <h2>Welcome to </h2>
            <h1>Guess the Country Game!</h1>
            <button onClick={handleStartGame} className="start-game-button">
                Start Game
            </button>
        </div>
    );
};

export default Home;
