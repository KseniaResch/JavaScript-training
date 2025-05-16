/*let redlight = document.getElementById("red");

console.dir(redlight)

redlight.style.opacity = 1;
redlight.style.opacity= 0.5;*/
let timer = document.getElementById("timer");
let countdownGO = 3;
let countdownSTOP = 3;
let countdownGoInterval;// why do i need two????
let countdownStopInterval;


const countdownGo = () =>{
    timer.textContent = countdownGO;
    countdownGO--;
        if (countdownGO < 0) {
        clearInterval(countdownGoInterval);
        timer.textContent = "GO!"
        
    }
}

const countdownStop = () =>{
    timer.textContent = countdownSTOP;
    countdownSTOP--;
        if (countdownSTOP < 0) {
        clearInterval(countdownStopInterval);
        timer.textContent = "STOP!"
        
    }
}

const beginCountdownGO = () => {
  countdownGO = 3;// why do i need to reset the variable???
  timer.textContent = countdownGO;
  countdownGoInterval = setInterval(countdownGo, 1000); 
};

const beginCountdownStop = () => {
  countdownSTOP = 3;
  timer.textContent = countdownSTOP;
  countdownStopInterval = setInterval(countdownStop, 1000); 
};

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

let yellowAfterRed = 7000;
let greenAfterYellow = 10000;
let yellowAfterGreen = 17000;
let switchOffGreen = 20000;
let timerStartGo = 6000;
let timerStartStop= 16000;

const start = () => {
    switchOn("red");

    setTimeout(() => {
     switchOn("yellow");   
    }, yellowAfterRed);

    setTimeout(() => {
     switchColor("green");
     beginCountdownGO()   
    }, timerStartGo);
    

    setTimeout(() => {
        switchOff("red");
        switchOff("yellow");
        switchOn("green");
    }, greenAfterYellow);

    setTimeout(() => {
     switchColor("red");
     beginCountdownStop()   
    }, timerStartStop);

     setTimeout(() => {
     switchOn("yellow");   
    }, yellowAfterGreen);

    setTimeout(() => {
     switchOff("green")
     switchOff("yellow")
    }, switchOffGreen);

}




start();
setInterval(start, 20000)