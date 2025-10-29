

let timer = document.getElementById("timer");
let  colorSwitched =  document.getElementById("timer");

const duration = {
  red: 5000,
  yellow: 3000,
  green: 5000,
};


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



// const startCounter = () => {
//     timer.textContent = counter;
//     const intervalId =  setInterval(() => {
//         counter--;
//          if (counter === 3) {
//             switchOn("yellow");
//         }
//         if (counter === 0) {
//             clearInterval(intervalId);
//             counter = workingTimeOfTrafficLight / 1000;
//             switchOff("yellow");
//         }
//          timer.textContent = counter;
//     }, 1000);
// }

const  startWorkOfLight = (mainColor, workingTimeOfTrafficLight) => { // main color red or green ; workingTime = 5000 or 3000
    return new Promise((resolve, reject) => { // after the code was read promise is returned
    switchOn(mainColor); // red or green turns on
    switchColor(mainColor);// the number on the timer becomes red or green
   let counter = workingTimeOfTrafficLight / 1000 // counter strats from 5 because 5000ms
   timer.textContent = counter;// displays the number of counter on the timer
    const intervalId = setInterval(() =>{ // repeats the counter decrease after 1000 ms
        counter --; // number on the timer descreses -1
        timer.textContent = counter; // displays the new number
        if (counter === 3){
            switchOn("yellow")
        } 
        if (counter === 0) {
            clearInterval(intervalId) // clears interval to prevent counting < 0
            switchOff("yellow")
            switchOff(mainColor)
           resolve(); // the reuslt of promise is returned we can for to the next element in while loop
        } 
    },1000);
 });
};

const start = async () => {
      while (true) {
          await startWorkOfLight('blue', duration.green);
          await startWorkOfLight('green', duration.green);
          await startWorkOfLight('red', duration.red);
      }
    };

    start();