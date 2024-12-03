
const COLORS = ["green","red","orange","yellow","teal"]
const changeColor = (temperature) =>{
    const element = document.getElementById("temperatureSection");
    if(temperature >= 80){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('red');
        landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    }
    else if(temperature >= 70 && temperature <=79){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('orange');
        landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    }
    else if(temperature >= 60 && temperature <=69){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('yellow');
        landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    }
    else if(temperature >= 50 && temperature <=59){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('green');
        landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    else {
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('teal');
        landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
}


const increaseTemp = () =>{
    const element = document.getElementById("tempValue");
    value = parseInt(element.textContent) || 0;
    changeColor(value)
    element.innerText = (value + 1);
    
}

const decreaseTemp = () => {
    const element = document.getElementById("tempValue");
    value = parseInt(element.textContent) || 0;
    changeColor(value)
    element.innerText = (value - 1);
}


const increment = document.getElementById("increaseTempControl");
const decrement = document.getElementById("decreaseTempControl");
const landscape = document.getElementById('landscape');

increment.addEventListener("click", increaseTemp);
decrement.addEventListener("click",decreaseTemp);