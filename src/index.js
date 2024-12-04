// Global variable
let temperature = 65;

// Get DOM elements
const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const landscape = document.getElementById('landscape');
const currentTempButton = document.getElementById("currentTempButton");

// Update temperature and related effects
const updateTemperature = () => {
  tempValue.textContent = `${temperature}°F`;

  // Change the temperature text color
  if (temperature >= 80) {
    tempValue.className = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temperature >= 70) {
    tempValue.className = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temperature >= 60) {
    tempValue.className = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temperature >= 50) {
    tempValue.className = 'green';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    tempValue.className = 'teal';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};
// founction

const increaseTemperature = () => {
    temperature += 1;
    updateTemperature();
}

const decreaseTemperature = () => {
    temperature -= 1;
    updateTemperature();
}

const getTemp = () => {
    axios
    .get('http://127.0.0.1:5000/location', {params: {q: 'seattle'}})
    .then((response) => {
        console.log(
            'The data given back by the API response is:',
            response.data);
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
            changeColor(tempF)
            temp.innerText = tempF;
        })
        .catch((error) => {
            console.log(
                'The error for #2 is:',
                error.response.data
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

// Add event listeners to the buttons

increaseTempControl.addEventListener('click', increaseTemperature);
decreaseTempControl.addEventListener('click', decreaseTemperature);
currentTempButton.addEventListener("click",getTemp);

const defaultCity = "Seattle";
document.getElementById("headerCityName").textContent = defaultCity;
