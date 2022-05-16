const apiKey = 'fd083c3a4802e990c5a585b2c9dd199e';

const getCurrentWeatherEndpoint = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

const getForecastEndpoint = (city) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};