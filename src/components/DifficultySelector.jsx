import React, { useState } from 'react';

const DifficultySelector = ({ onSelect }) => {
    const [levelDescription, setLevelDescription] = useState('');
    const difficulties = [
        { name: 'EASY-EUROPE', description: 'Easy level, focused on European countries.' },
        { name: 'EASY', description: 'Easy level, countries with population over 50 milions.' },
        { name: 'HARD', description: 'Hard level, challenging countries with complex geography.' },
        { name: 'EXPERT', description: 'Expert level, the most difficult countries with dependent teritories.' },
    ];

    const handleMouseEnter = (description) => {
        setLevelDescription(description);
    };

    const handleMouseLeave = () => {
        setLevelDescription('');
    };

    return (
        <div className="difficulty-container">
            <h3>Select Difficulty:</h3>
            {difficulties.map((level) => (
                <button
                    key={level.name}
                    onClick={() => onSelect(level.name)}
                    onMouseEnter={() => handleMouseEnter(level.description)} 
                    onMouseLeave={handleMouseLeave}
                >
                    {level.name}
                </button>
            ))}
            
            <div className="level-description-container">
                <div className="level-description">{levelDescription}</div>
            </div>
        </div>
    );
};

export default DifficultySelector;
