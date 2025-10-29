
//1.function to generate a circle
//2. write function for unique color
//3.

const amountOfcirclesArray = 4;
const circleSize = 100; //px
const circleRadius = circleSize / 2;
const positions = [];
const placedCircles = [];
const maxAttemptsOfCircles = 100;
const container = document.getElementById("container")



const isOverlapping =  (x,y)=> {
     for (const circle of placedCircles) {
         const dx = x - circle.x;// diffrences in the positions of the existing circle and an inspiring circle
          const dy = y - circle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);// calculates distance betweeen two points
        
         
                if (distance < circleSize) {
                    return true
                }       
            }
           return false;
        }


const doubleClick = (event) => {
    console.log("doubleClick", event);
    let cord = container.getBoundingClientRect();  // Gets the position and size of the container relative to the viewport
    console.log(cord);
    
  let circleX = event.clientX -cord.left - circleRadius; // calculates X position relative to container
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
    throwErrow("Circle can't be placed outside of the box");
    return;
  }
 
  createCircle(circleX, circleY);
}

document.addEventListener("dblclick", doubleClick);



const createCircle = (coordinateLeft, coordinateTop) => {
    const centerX = coordinateLeft + circleRadius;
    const centerY = coordinateTop + circleRadius;
    if(isOverlapping(centerX, centerY)){
        throwErrow("Circles can`t overlap")
        return ;

        
    }
   
   const element = document.createElement("div")
   element.className = "circle";
   element.style.backgroundColor = getRandomColor();
   element.style.top = coordinateTop + "px";
   element.style.left = `${coordinateLeft}px`;
   element.style.width = circleSize + "px";
   element.style.height = circleSize + "px";
   


   element.addEventListener('dblclick', () => {
    element.remove();


    let indexOfElement = placedCircles.findIndex((item) => {
        if( item.id === element.style.backgroundColor) {
          return true   
        } else {
            return false
        }
       
    })

    if (indexOfElement !== -1) {
        placedCircles.splice( indexOfElement, 1)
    }
    console.log(placedCircles);
    console.dir(element);
   });


   container.appendChild(element);
   placedCircles.push({ x: centerX, y: centerY, id: element.style.backgroundColor}); 
}



const getRandomColor = (randomColor) => {
 return "#"+ Math.floor(Math.random()*16777215).toString(16);

}

function generateRandomPosition(containerWidth, containerHeight) {
  const x = Math.random() * (containerWidth - circleSize);
  const y = Math.random() * (containerHeight - circleSize);
  return { x, y };
}


const drawCircles = (amountOfcirc) => {
    for (let i = 0; i < amountOfcirc; i++) {
        let tries = 0;
        let placed = false;
        

        while (tries < maxAttemptsOfCircles && !placed) {
            let x = Math.random() * (container.clientWidth - circleSize);
            let y = Math.random() * (container.clientHeight - circleSize);

            if (!isOverlapping(x + circleRadius, y + circleRadius)) {
                createCircle(x, y);
                placed = true;
            }
            tries++;
        }

        if (!placed) {
            throwErrow("Could not place all circles without overlap");
        }
    }
};


drawCircles(amountOfcirclesArray);


const dragCircle = (event) => {
    //console.log("event", event)
    if (event.target.className !== "circle"){
        return
    }
    const onMouseMove = (mousemoveEvent) => {
        let cord = container.getBoundingClientRect();  // Gets the position and size of the container relative to the viewport   
        let circleX = mousemoveEvent.clientX - cord.left - circleRadius; // calculates X position relative to container
        let circleY = mousemoveEvent.clientY - cord.top - circleRadius;// calculates Y position relative to container
        mousemoveEvent.target.style.top = circleY;
        mousemoveEvent.target.style.left = circleX;
    }


    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };


     document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}


function init() {
    container.addEventListener("mousedown", dragCircle)
}

init();


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




