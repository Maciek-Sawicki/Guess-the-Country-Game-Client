import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
});

export const startGame = (difficulty) => api.post('/start-game', { difficulty });
export const fetchCountries = () => api.get('/countries');
export const makeGuess = (userGuess) => api.post('/guess', { userGuess });
export const getSessionData = () => api.get('/session-data');
