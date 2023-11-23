const API_KEY = '8f04ad68e552443abca121216232311';
const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
  'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const fetchWeatherData = (country) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&aqi=yes&q=${country}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(`Weather data for ${country}:`, data);
      updateWeatherCard(country, data);
    })
    .catch(error => console.error(`There was a problem fetching the weather data for ${country}:`, error));
};

const updateWeatherCard = (country, data) => {
  const weatherContainer = document.getElementById('weather-container');

  const weatherCard = document.createElement('div');
  weatherCard.classList.add('card');

  const weatherElement = document.createElement('div');
  weatherElement.classList.add('weather');

  weatherElement.innerHTML = `
    <h2 class="city">Weather in ${country}</h2>
    <h1 class="temp">${data.current.temp_c}°C</h1>
    <div class="flex">
      <img src="${data.current.condition.icon}" alt="" class="icon" />
      <div class="description">${data.current.condition.text}</div>
    </div>
    <div class="humidity">Humidity: ${data.current.humidity}%</div>
    <div class="wind">Wind speed: ${data.current.wind_kph} km/h</div>
    <div class="wind-details">
      Wind Direction: ${data.current.wind_dir}<br>
      Wind Degree: ${data.current.wind_degree}<br>
      Wind Gust: ${data.current.gust_kph} km/h<br>
      Wind Pressure: ${data.current.pressure_mb} mb<br>
    </div>
  `;

  weatherCard.appendChild(weatherElement);
  weatherContainer.appendChild(weatherCard);
};


countries.forEach(country => {
  fetchWeatherData(country);
});


