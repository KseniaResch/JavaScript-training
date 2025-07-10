
//1.function to generate a circle
//2. write function for unique color
//3. 

const amountOfcirclesArray = 4 ;
const circleSize = 100 //px

const container = document.getElementById("container")
/*document.addEventListener("mousemove", (event123)=> {
    console.log("mousemove", event123)
})

 


const click = () => {document.addEventListener("mousedown", (event)=> {
    console.log("mousedown", event)
})
 document.addEventListener("mouseup", (event)=> {
    console.log("mouseup", event)
})}*/

const doubleClick = (event) => {
    console.log("doubleClick", event);
    let cord = container.getBoundingClientRect();  // Gets the position and size of the container relative to the viewport
    console.log(cord);
  let clientX = event.clientX - cord.left - circleSize / 2; // calculates X position relative to container
  let clientY = event.clientY - cord.top - circleSize / 2;// calculates Y position relative to container
    createCircle(clientX, clientY);
}

document.addEventListener("dblclick", doubleClick);

// const randomColor = () => {
//  Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;   

// }


const createCircle = (coordinateLeft, coordinateTop) => {
   const element = document.createElement("div")
   element.className = "circle";
   element.style.backgroundColor = getRandomColor();
   element.style.top = coordinateTop + "px";
   element.style.left = `${coordinateLeft}px`;
   element.style.width = circleSize + "px";
   element.style.height = circleSize + "px";


   container.appendChild(element)
}

const getRandomColor = (randomColor) => {
 return "#"+ Math.floor(Math.random()*16777215).toString(16);
  
}


const drawCircles = (amountOfcirc) => {
   for(let i = 1; i <= amountOfcirc; i++){
        createCircle()
    }  
}

drawCircles(amountOfcirclesArray);


const deleteCircle = () => {


}

//random color - hex
//if double click om the existing circle -delete circle
//if new circle outside of container - forbidden -inform user
//

