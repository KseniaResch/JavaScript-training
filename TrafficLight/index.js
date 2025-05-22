
const workingTimeOfTrafficLight = 10000; //ms
let timer = document.getElementById("timer");
let  colorSwitched =  document.getElementById("timer");

const switchColor= (color) => {
   colorSwitched.style.color = color;
}

const switchOn = (id) => {
    let light = document.getElementById(id);
    light.style.opacity = 1; 
}

const switchOff = (id) => {
    let light = document.getElementById(id);
    light.style.opacity = 0.5;
  
}

let counter = workingTimeOfTrafficLight / 1000;

const startCounter = () => {
    timer.textContent = counter;
    const intervalId =  setInterval(() => {
        counter--;
         if (counter === 3) {
            switchOn("yellow");
        }
        if (counter === 0) {
            clearInterval(intervalId);
            counter = workingTimeOfTrafficLight / 1000;
            switchOff("yellow");
        }
         timer.textContent = counter;
    }, 1000);
}

const start = () => {
    switchOn("red");
    switchColor("red");
    startCounter();

    setTimeout(() => {
        switchOff("red");
        switchColor("green");
        switchOn("green");
        startCounter();         
    }, workingTimeOfTrafficLight);

    setTimeout(() => {
        switchOff("green");
    }, workingTimeOfTrafficLight * 2);
        
}

start();
setInterval(start, workingTimeOfTrafficLight * 2 )