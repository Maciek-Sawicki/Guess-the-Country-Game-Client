import React, { useState } from 'react';
import CountryGuessForm from './CountryGuessForm';
import FeedbackTable from './FeedbackTable';

const Game = () => {
    const [feedback, setFeedback] = useState(null); // Stan dla podpowiedzi i wyników

    const handleGuess = (guess) => {
        // Wywołaj funkcję z API, aby sprawdzić zgadywanie
        // Przykład: setFeedback(response.data.feedback);
    };

    return (
        <div className="game-page">
            <h2>Guess the Country!</h2>
            <CountryGuessForm onGuess={handleGuess} />
            {feedback && <FeedbackTable feedback={feedback} />}
        </div>
    );
};

export default Game;
