
const COLORS = ["green","red","orange","yellow","teal"]
const changeColor = (temperature) =>{
    const element = document.getElementById("temperatureSection");
    if(temperature >= 80){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('red')
    }
    else if(temperature >= 70 && temperature <=79){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('orange')
    }
    else if(temperature >= 60 && temperature <=69){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('yellow')
    }
    else if(temperature >= 50 && temperature <=59){
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('green')
    }
    else {
        element.classList.forEach((className) => COLORS.includes(className) ? element.classList.remove(className) : className )
        element.classList.add('teal')
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
    element.innerText = (value + 1);
}


const increment = document.getElementById("increaseTempControl");
const decrement = document.getElementById("decreaseTempControl");

increment.addEventListener("click", increaseTemp);
decrement.addEventListener("click",decreaseTemp);