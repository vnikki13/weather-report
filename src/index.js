// Initialize temperature
let temperature = 50;

// Get DOM elements
const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const landscape = document.getElementById('landscape');

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

// Add event listeners to the buttons
increaseTempControl.addEventListener('click', () => {
  temperature += 1;
  updateTemperature();
});

decreaseTempControl.addEventListener('click', () => {
  temperature -= 1;
  updateTemperature();
});

// Initialize the temperature display when the page loads
updateTemperature();
