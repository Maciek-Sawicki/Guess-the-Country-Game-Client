import React from 'react';
import {
    formatPopulationHint,
    formatAreaHint,
    formatContinentHint,
    formatLocationHint,
    formatDistanceHint,
} from '../utils/hintsFormatter';

const FeedbackTable = ({ feedback, originalCountryName }) => {
    const feedbackData = [
        ['Population', formatPopulationHint(feedback.populationHint, feedback.population, originalCountryName)],
        ['Area', formatAreaHint(feedback.areaHint, feedback.area, originalCountryName)],
        ['Continent', formatContinentHint(feedback.continent)],
        ['Location Hint', formatLocationHint(feedback.location)],
        ['Distance', formatDistanceHint(feedback.distance)],
    ];

    return (
        <table>
            <thead>
                <tr><th>Hint</th><th>Details</th></tr>
            </thead>
            <tbody>
                {feedbackData.map(([hint, detail], index) => (
                    <tr key={index}>
                        <td>{hint}</td>
                        <td dangerouslySetInnerHTML={{ __html: detail }}></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FeedbackTable;
