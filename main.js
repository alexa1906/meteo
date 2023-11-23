const API_KEY = '8f04ad68e552443abca121216232311';
const countries = [

    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras',
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
    'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
    'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia (formerly Macedonia)',
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda',
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const fetchWeatherData = (country) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&aqi=yes&q=${country}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      throw error;
    });
};

const updateElement = (element, content) => {
  if (element instanceof Element) {
    element.textContent = content;
  } else {
    document.querySelector(element).textContent = content;
  }
};

const updateWeatherUI = (data) => {
  const weatherMainElements = {
    '.weather-main .city-weather': `Weather in ${data.location.name}`,
    '.weather-main .region': `Region: ${data.location.region}`,
    '.weather-main .country': `Country: ${data.location.country}`,
    '.weather-main .lat': `Latitude: ${data.location.lat}`,
    '.weather-main .lon': `Longitude: ${data.location.lon}`,
    '.weather-main .tz_id': `Time Zone: ${data.location.tz_id}`,
    '.weather-main .localtime_epoch': `Local Time Epoch: ${data.location.localtime_epoch}`,
    '.weather-main .localtime': `Local Time: ${data.location.localtime}`
  };

  for (const [element, content] of Object.entries(weatherMainElements)) {
    updateElement(element, content);
  }

  const elements = {
    '.second-main .last_updated': `Last Updated: ${data.current.last_updated}`,
    '.second-main .temp_c': `Tempreature °C: ${data.current.temp_c}`,
    '.second-main .temp_f': `Tempreature °F: ${data.current.temp_f}`,
    '.second-main .is_day': `Day: ${data.current.is_day}`,
    '.second-main .wind_mph': `Wind mph: ${data.current.wind_mph}`,
    '.second-main .wind_kph': `Wind kph: ${data.current.wind_kph}`,
    '.second-main .wind_degree': `Wind Degree: ${data.current.wind_degree}`,
    '.second-main .pressure_mb': `Pressure Milibar: ${data.current.pressure_mb}`,
    '.second-main .pressure_in': `Pressure: ${data.current.pressure_in}`,
    '.second-main .precip_mm': `Precipitation Milibar: ${data.current.precip_mm}`,
    '.second-main .precip_in': `Precipitation: ${data.current.precip_in}`,
    '.second-main .humidity': `Humidity: ${data.current.humidity}`,
    '.second-main .cloud': `Cloud: ${data.current.cloud}`,
    '.second-main .feelslike_c': `Feelslike °C:${data.current.feelslike_c}`,
    '.second-main .feelslike_f': `Feelslike °F:${data.current.feelslike_f}`,
    '.second-main .vis_km': `Visability Kilometers${data.current.vis_km}`,
    '.second-main .vis_miles': `Visability Miles: ${data.current.vis_miles}`,
    '.second-main .uv': `UV: ${data.current.uv}`,
    '.second-main .gust_mph': `Mph: ${data.current.gust_mph}`,
    '.second-main .gust_kph': `Kph: ${data.current.gust_kph}`,
    '.second-main .wind_dir': `Wind Direction: ${data.current.wind_dir}`,
  };

  for (const [element, content] of Object.entries(elements)) {
    updateElement(element, content);
  }

  const airQualityElements = {
    '.second-main .air_quality .o3': `o3: ${data.current.air_quality.o3}`,
    '.second-main .air_quality .co': `Co: ${data.current.air_quality.co}`,
    '.second-main .air_quality .no2': `No2: ${data.current.air_quality.no2}`,
    '.second-main .air_quality .so2': `So2: ${data.current.air_quality.so2}`,
    '.second-main .air_quality .pm2_5': `Suspended particles 2.5: ${data.current.air_quality.pm2_5}`,
    '.second-main .air_quality .pm10': `Suspended particles 2.5: ${data.current.air_quality.pm10}`,
    '.second-main .air_quality .us-epa-index': `AQI: ${data.current.air_quality.us_epa_index}`,
    '.second-main .air_quality .gb-defra-index': `DAQI: ${data.current.air_quality.gb_defra_index}`,
  };

  for (const [element, content] of Object.entries(airQualityElements)) {
    updateElement(element, content);
  }
};

const searchAndUpdateWeather = () => {
  const searchInput = document.querySelector('.search-bar');
  const searchTerm = searchInput.value;

  if (countries.includes(searchTerm)) {
    fetchWeatherData(searchTerm)
      .then(data => updateWeatherUI(data))
      .catch(error => console.error('Error updating UI:', error));
  } else {
    console.error('Country not found');
  }
};

const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', searchAndUpdateWeather);

