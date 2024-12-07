import React from 'react';

const DifficultySelector = ({ onSelect }) => {
    const difficulties = ['EASY-EUROPE', 'EASY', 'HARD', 'EXPERT'];

    return (
        <div>
            <h3>Select Difficulty:</h3>
            {difficulties.map((level) => (
                <button key={level} onClick={() => onSelect(level)}>
                    {level}
                </button>
            ))}
        </div>
    );
};

export default DifficultySelector;


