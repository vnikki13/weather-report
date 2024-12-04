// Global variable
const state = {
    temperature: 65,
    defaultCityName: "Seattle"
}

document.getElementById("headerCityName").textContent = state.defaultCityName;

// Get DOM elements
const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const landscape = document.getElementById('landscape');
const cityNameInput = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');
const cityNameReset = document.getElementById('cityNameReset');
const currentTempButton = document.getElementById("currentTempButton");
const skySelect = document.getElementById('skySelect');
const skyDisplay = document.getElementById('sky');

// Update temperature and related effects
const updateTemperature = () => {
  tempValue.textContent = `${state.temperature}°F`;

  // Change the temperature text color
  if (state.temperature >= 80) {
    tempValue.className = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.temperature >= 70) {
    tempValue.className = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.temperature >= 60) {
    tempValue.className = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temperature >= 50) {
    tempValue.className = 'green';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    tempValue.className = 'teal';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};
// founction

const increaseTemperature = () => {
    state.temperature += 1;
    updateTemperature();
}

const decreaseTemperature = () => {
    state.temperature -= 1;
    updateTemperature();
}

const updateCityName = (event) => {
    const newCityName = event.target.value.trim(); 
    headerCityName.textContent = newCityName || state.defaultCityName;
}

const resetCityName = () => {
    cityNameInput.value = "";
    headerCityName.textContent = state.defaultCityName;
}

const getTemp = () => {
    const cityName = cityNameInput.value.trim() || state.defaultCityName;
    axios
    .get('http://127.0.0.1:5000/location', {params: {q: cityName}})
    .then((response) => {
        console.log(
            'The data given back by the API response is:',
            response.data);

        if (!response.data[0] || !response.data[0].lat || !response.data[0].lon) {
                throw new Error('Invalid location data: Missing latitude or longitude');
        }

        axios.get('http://127.0.0.1:5000/weather',
            {params:{
                lat: response.data[0].lat,
                lon: response.data[0].lon
            }}
            
        )
        .then((result) => {
            const tempK = result.data.main.temp
            const tempF = Math.round((tempK - 273.15) * 9/5 + 32);
            console.log('Result #2: ', tempF)
            state.temperature = tempF;
            updateTemperature();
        })
        .catch((error) => {
            console.log(
                'The error for #2 is:',
                error.response || error.message
            );
        })
    })
    .catch((error) => {
        console.log(
            'The error given back by the API response is:',
            error.response.data
        );
    });    
};

// Sky options
const changeSky = () => {
    const sky = skyDisplay;
    switch (skySelect.value) {
        case "sunny":
            sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
            break;
        case "cloudy":
            sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️";
            break;
        case "rainy":
            sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
            break;
        case "snowy":
            sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
            break;
    }
};

// Add event listeners to the buttons

increaseTempControl.addEventListener('click', increaseTemperature);
decreaseTempControl.addEventListener('click', decreaseTemperature);
cityNameInput.addEventListener('input', updateCityName);
cityNameReset.addEventListener('click', resetCityName);
currentTempButton.addEventListener("click",getTemp);
skySelect.addEventListener('change', changeSky);


