import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameSession from './pages/GameSession';
import GameWon from './pages/GameWon'; 


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game-session" element={<GameSession />} />
                <Route path="/game-won" element={<GameWon />} />
            </Routes>
        </Router>
    );
};

export default App;
