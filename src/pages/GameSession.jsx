import React, { useState, useEffect } from 'react';
import { fetchCountries, startGame, makeGuess } from '../utils/api';
import { useNavigate } from 'react-router-dom'; 
import CountryGuessForm from '../components/CountryGuessForm';
import FeedbackTable from '../components/FeedbackTable';
import DifficultySelector from '../components/DifficultySelector';

const GameSession = () => {
    const [difficulty, setDifficulty] = useState(null); 
    const [countries, setCountries] = useState([]); 
    const [feedback, setFeedback] = useState(null);
    const [originalCountryName, setOriginalCountryName] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        if (difficulty) {
            const initGame = async () => {
                try {
                    await startGame(difficulty); 
                    const { data } = await fetchCountries(); 
                    setCountries(data); 
                } catch (error) {
                    console.error('Error initializing the game:', error);
                }
            };
            initGame();
        }
    }, [difficulty]);

    const handleGuess = async (guess) => {
        try {
            const { data } = await makeGuess(guess);
            console.log(guess);

            const matchingCountry = countries.find(
                (country) => country.name.toLowerCase() === guess.toLowerCase()
            );

            if (data.message) {
                navigate('/game-won', { state: { country: data.message, attempts: data.attempts } });
                return;
            }
    
            setFeedback(data.feedback);
            if (matchingCountry) {
                setOriginalCountryName(matchingCountry.name);
            } else {
                setOriginalCountryName('Country not found');
            }
    
        } catch (error) {
            console.error('Error handling guess:', error);
        }
    };

    return (
        <div>
            {!difficulty ? (
                <DifficultySelector onSelect={setDifficulty} />
            ) : (
                <div>
                    <h2>Difficulty: {difficulty}</h2>
                    <CountryGuessForm onGuess={handleGuess} />
                    {feedback && (
                        <FeedbackTable
                            feedback={feedback}
                            originalCountryName={originalCountryName}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default GameSession;
