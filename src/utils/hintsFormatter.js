export const formatPopulationHint = (populationHint, population, userGuess) => {
    return (
        `Target country's population is <strong>${populationHint}</strong> than ${userGuess}. ` +
        `${userGuess}: <strong>${population.toLocaleString()}</strong>`
    );
};

export const formatAreaHint = (areaHint, area, userGuess) => {
    return (
        `Target country's area is <strong>${areaHint}</strong> than ${userGuess}. ` +
        `${userGuess}: <strong>${area.toLocaleString()}</strong> km²`
    );
};

export const formatContinentHint = (continent) => {
    return continent === 'MATCH'
        ? `<span style="color: green; font-weight: bold;">Correct</span>`
        : `<span style="color: red; font-weight: bold;">Incorrect</span>`;
};

export const formatLocationHint = (location) => {
    const latitudeHint =
        location.latitudeHint === 'SAME_LATITUDE' ? '' : `Move <strong>${location.latitudeHint}</strong>`;
    const longitudeHint =
        location.longitudeHint === 'SAME_LONGITUDE' ? '' : `Move <strong>${location.longitudeHint}</strong>`;
    return latitudeHint || longitudeHint
        ? `${latitudeHint} ${longitudeHint}`.trim()
        : `<strong>Same location</strong>`;
};

export const formatDistanceHint = (distance) => {
    return `Distance from target country: <strong>${distance.toFixed()} km</strong>.`;
};
