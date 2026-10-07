const GEOCODING_API =
    "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API =
    "https://api.open-meteo.com/v1/forecast";


async function getWeather() {

    const city = document
        .getElementById("cityInput")
        .value
        .trim();

    const errorMessage =
        document.getElementById("errorMessage");


    if (city === "") {

        errorMessage.textContent =
            "Please enter a city name.";

        return;
    }


    errorMessage.textContent =
        "Loading weather...";


    try {

        /* Find City */

        const locationResponse = await fetch(
            `${GEOCODING_API}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );


        if (!locationResponse.ok) {
            throw new Error("Location unavailable");
        }


        const locationData =
            await locationResponse.json();


        if (
            !locationData.results ||
            locationData.results.length === 0
        ) {

            throw new Error("City not found");
        }


        const location =
            locationData.results[0];


        /* Get Weather */

        const weatherResponse = await fetch(
            `${WEATHER_API}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max&timezone=auto`
        );


        if (!weatherResponse.ok) {
            throw new Error("Weather unavailable");
        }


        const weatherData =
            await weatherResponse.json();


        displayWeather(
            location,
            weatherData
        );


        displayForecast(weatherData);


        displayTravelSuggestion(
            weatherData.current.weather_code,
            weatherData.current.temperature_2m
        );


        errorMessage.textContent = "";


    } catch (error) {

        console.error(
            "Weather Error:",
            error
        );


        if (error.message === "City not found") {

            errorMessage.textContent =
                "City not found. Please enter a valid city.";

        } else {

            errorMessage.textContent =
                "Unable to get weather information.";
        }
    }
}


/* Display Current Weather */

function displayWeather(
    location,
    data
) {

    document.getElementById("cityName").textContent =
        `${location.name}, ${location.country}`;


    document.getElementById("temperature").textContent =
        `${Math.round(data.current.temperature_2m)} °C`;


    document.getElementById("condition").textContent =
        getWeatherCondition(
            data.current.weather_code
        );


    document.getElementById("humidity").textContent =
        `${data.current.relative_humidity_2m} %`;


    document.getElementById("windSpeed").textContent =
        `${data.current.wind_speed_10m} km/h`;


    document.getElementById("feelsLike").textContent =
        `${Math.round(data.current.apparent_temperature)} °C`;


    document.getElementById("weatherIcon").textContent =
        getWeatherIcon(
            data.current.weather_code
        );
}


/* Weather Icon */

function getWeatherIcon(code) {

    if (code === 0) {
        return "☀️";
    }

    if (code === 1 || code === 2) {
        return "🌤️";
    }

    if (code === 3) {
        return "☁️";
    }

    if (
        code === 45 ||
        code === 48
    ) {
        return "🌫️";
    }

    if (
        code >= 51 &&
        code <= 57
    ) {
        return "🌦️";
    }

    if (
        code >= 61 &&
        code <= 67
    ) {
        return "🌧️";
    }

    if (
        code >= 71 &&
        code <= 77
    ) {
        return "❄️";
    }

    if (
        code >= 80 &&
        code <= 82
    ) {
        return "🌧️";
    }

    if (
        code >= 95 &&
        code <= 99
    ) {
        return "⛈️";
    }

    return "🌤️";
}


/* Weather Condition */

function getWeatherCondition(code) {

    if (code === 0) {
        return "Clear sky";
    }

    if (code === 1 || code === 2) {
        return "Partly cloudy";
    }

    if (code === 3) {
        return "Cloudy";
    }

    if (
        code === 45 ||
        code === 48
    ) {
        return "Foggy";
    }

    if (
        code >= 51 &&
        code <= 57
    ) {
        return "Drizzle";
    }

    if (
        code >= 61 &&
        code <= 67
    ) {
        return "Rain";
    }

    if (
        code >= 71 &&
        code <= 77
    ) {
        return "Snow";
    }

    if (
        code >= 80 &&
        code <= 82
    ) {
        return "Rain showers";
    }

    if (
        code >= 95 &&
        code <= 99
    ) {
        return "Thunderstorm";
    }

    return "Unknown";
}


/* Forecast */

function displayForecast(data) {

    const container =
        document.getElementById(
            "forecastContainer"
        );


    container.innerHTML = "";


    const days =
        data.daily.time.slice(0, 5);


    days.forEach(
        (date, index) => {

            const temperature =
                Math.round(
                    data.daily.temperature_2m_max[index]
                );


            const weatherCode =
                data.daily.weather_code[index];


            const icon =
                getWeatherIcon(
                    weatherCode
                );


            const condition =
                getWeatherCondition(
                    weatherCode
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "forecast-card";


            card.innerHTML = `
                <h3>Day ${index + 1}</h3>
                <div>${icon}</div>
                <p>${temperature} °C</p>
                <small>${condition}</small>
            `;


            container.appendChild(card);
        }
    );
}


/* Travel Suggestions */

function displayTravelSuggestion(
    weatherCode,
    temperature
) {

    const suggestion =
        document.getElementById(
            "travelSuggestion"
        );


    let title = "";
    let message = "";


    if (
        weatherCode === 0 &&
        temperature >= 20 &&
        temperature <= 35
    ) {

        title =
            "☀️ Great Weather for Travel";

        message =
            "Perfect weather for sightseeing, outdoor activities, photography and exploring local attractions.";

    } else if (
        weatherCode === 1 ||
        weatherCode === 2 ||
        weatherCode === 3
    ) {

        title =
            "☁️ Good Weather for Exploring";

        message =
            "The weather is comfortable for sightseeing. Enjoy outdoor places and local attractions.";

    } else if (
        weatherCode >= 51 &&
        weatherCode <= 67
    ) {

        title =
            "🌧️ Rainy Weather";

        message =
            "Consider indoor attractions such as museums, shopping malls, cafes and restaurants. Carry an umbrella.";

    } else if (
        weatherCode >= 95
    ) {

        title =
            "⛈️ Travel Carefully";

        message =
            "Thunderstorms may make outdoor activities unsafe. Consider postponing outdoor travel.";

    } else if (
        temperature > 35
    ) {

        title =
            "🌡️ Very Hot Weather";

        message =
            "Avoid long outdoor activities during peak afternoon hours. Stay hydrated and carry sun protection.";

    } else {

        title =
            "🌍 Travel Recommendation";

        message =
            "Check the local weather conditions before planning outdoor activities.";
    }


    suggestion.innerHTML = `
        <h3>${title}</h3>
        <p>${message}</p>
    `;
}


/* Press Enter to Search */

document
    .getElementById("cityInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {
                getWeather();
            }

        }
    );