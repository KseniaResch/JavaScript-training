
//1.function to generate a circle
//2. write function for unique color
//3.

const amountOfcirclesArray = 4 ;
const circleSize = 100 //px
const circleRadius = circleSize / 2;

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
    
  let circleX = event.clientX - cord.left - circleRadius; // calculates X position relative to container
  let circleY = event.clientY - cord.top - circleRadius;// calculates Y position relative to container
  const clientX = event.clientX - cord.left;
  const clientY =  event.clientY - cord.top;
  console.log("clientX", event.clientX - cord.left)
  console.log("clientY", event.clientY - cord.top)
  
  if (event.target.classList.contains("circle")) {
    return; // deletes an already existing circle
  }
   console.log(111, circleX)
   console.log(222, container.clientWidth)
  if (
    clientX < circleRadius ||
    clientY < circleRadius || 
    clientX + circleRadius > container.clientWidth ||
    clientY + circleRadius > container.clientHeight

    ) {
    console.log("forbidden")
    // container.style.border = "2px red solid"
    // setTimeout(() => {
    //     container.style.border = "1px black solid" 
    // }, 300)
    throwErrow("Circle can't be placed outside of the box");
    return;
  }
 
  createCircle(circleX, circleY);
}

document.addEventListener("dblclick", doubleClick);

// const randomColor = () => {
//  Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;

// }

// let clientX = 0;
// let clientY = 0;
// const OutOfContainer = clientX < 0 ||
//  clientY < 0 ||
//   clientX + circleSize > container.clientWidth ||
//    clientY + circleSize > clientHeight;

const createCircle = (coordinateLeft, coordinateTop) => {
   const element = document.createElement("div")
   element.className = "circle";
   element.style.backgroundColor = getRandomColor();
   element.style.top = coordinateTop + "px";
   element.style.left = `${coordinateLeft}px`;
   element.style.width = circleSize + "px";
   element.style.height = circleSize + "px";
//    if (isOutBounds) {
//     warningEL.textContent = "Circle cant be placed outside of container"

//    }
   element.addEventListener('dblclick', () => {
    element.remove();
   });


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



const dragCircle = (event) => {
    console.log("event", event)
    if (event.target.className !== "circle"){
        return
    }
    
    container.addEventListener("mousemove",(event1) => {
        console.log(event1)
  let cord = container.getBoundingClientRect();  // Gets the position and size of the container relative to the viewport   
  let circleX = event1.clientX - cord.left - circleRadius; // calculates X position relative to container
  let circleY = event1.clientY - cord.top - circleRadius;// calculates Y position relative to container
        event.target.style.top = circleY;
        event.target.style.left = circleX;
        
    })
}

container.addEventListener("mousedown", dragCircle)

const throwErrow = (message = "Something went wrong") => {
    container.style.border = "2px red solid";
    setTimeout(() => {
         alert(message)
        container.style.border = "1px black solid"
    }, 100);
   ; 
    throw new Error (message);
}





// create errorfunction 
// all the random created circles must have random positions and not touch each other
// draganddropfunction : 3 events - press / loose/ change coordinate: mousedown/mousemove/mouseup /REMOVE EVENTListner




