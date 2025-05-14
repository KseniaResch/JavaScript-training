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

const start = () => {
    switchOn("red");

    setTimeout(() => {
     switchOn("yellow");   
    }, 7000);
    

    setTimeout(() => {
        switchOff("red");
        switchOff("yellow")
    }, 10000);
}

start();