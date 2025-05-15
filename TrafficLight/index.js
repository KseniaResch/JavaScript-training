/*let redlight = document.getElementById("red");

console.dir(redlight)

redlight.style.opacity = 1;
redlight.style.opacity= 0.5;*/

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

const start = () => {
    switchOn("red");

    setTimeout(() => {
     switchOn("yellow");   
    }, yellowAfterRed);
    

    setTimeout(() => {
        switchOff("red");
        switchOff("yellow");
        switchOn("green");

    }, greenAfterYellow);

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