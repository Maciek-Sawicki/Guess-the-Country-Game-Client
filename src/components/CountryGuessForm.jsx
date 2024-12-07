import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../utils/api.js';

const CountryGuessForm = ({ onGuess }) => {
    const [userGuess, setUserGuess] = useState('');
    const [countries, setCountries] = useState([]); 
    const [filteredCountries, setFilteredCountries] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await fetchCountries();
                const countryNames = response.data.map(country => country.name); 
                setCountries(countryNames);
                setFilteredCountries(countryNames);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch countries');
                setLoading(false);
            }
        };

        getCountries();
    }, []);

    const handleInputChange = (e) => {
        const query = e.target.value;
        setUserGuess(query);

        if (query.length >= 3) {
            const filtered = countries.filter((country) =>
                country.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCountries(filtered);
        } else {
            setFilteredCountries([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const lowerCaseGuess = userGuess.toLowerCase();
        const matchedCountry = countries.find((country) => country.toLowerCase() === lowerCaseGuess);

        if (matchedCountry) {
            onGuess(matchedCountry);
            setUserGuess(''); 
        } else {
            alert("Country not found! Please try again."); 
        }
    };

    if (loading) {
        return <p>Loading countries...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter country name"
                value={userGuess}
                onChange={handleInputChange}
                autoFocus
            />
            <button type="submit">Submit Guess</button>
            
            {userGuess.length >= 3 && filteredCountries.length > 0 && (
                <ul>
                    {filteredCountries.map((country, index) => (
                        <li key={index}>{country}</li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default CountryGuessForm;