import React, { useState } from 'react';

const CountryGuessForm = ({ onGuess }) => {
    const [userGuess, setUserGuess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userGuess.trim()) {
            onGuess(userGuess);
            setUserGuess('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter country name"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
            />
            <button type="submit">Submit Guess</button>
        </form>
    );
};

export default CountryGuessForm;
