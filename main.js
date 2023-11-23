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
  
  const updateElement = (element, content) => document.querySelector(element).textContent = content;
  
  const updateWeatherUI = (data) => {
    updateElement('.weather-main .city-weather', `Weather in ${data.location.name}`);
    updateElement('.weather-main .region', data.location.region);
    updateElement('.weather-main .country', data.location.country);
    updateElement('.weather-main .lat', data.location.lat);
    updateElement('.weather-main .lon', data.location.lon);
    updateElement('.weather-main .tz_id', data.location.tz_id);
    updateElement('.weather-main .localtime_epoch', data.location.localtime_epoch);
    updateElement('.weather-main .localtime', data.location.localtime);
  
    const elements = [
      '.last_updated', '.temp_c', '.temp_f', '.is_day', '.wind_mph', '.wind_kph', '.wind_degree', '.wind_dir', '.pressure_mb', '.pressure_in',
      '.precip_mm', '.precip_in', '.humidity', '.cloud', '.feelslike_c', '.feelslike_f', '.vis_km', '.vis_miles', '.uv', '.gust_mph', '.gust_kph'
    ];
  
    elements.forEach((element, index) => updateElement(`.second-main ${element}`, data.current[elements[index].substring(1)]));
  
    const airQualityElements = ['.co', '.no2', '.o3', '.so2', '.pm2_5', '.pm10', '.us-epa-index', '.gb-defra-index'];
    airQualityElements.forEach((element, index) => updateElement(`.second-main .air_quality ${element}`, data.current.air_quality[airQualityElements[index].substring(1)]));
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

