
//1.function to generate a circle
//2. write function for unique color
//3. 

const amountOfcirclesArray = 5 ;

const container = document.getElementById("container")
document.addEventListener("mousemove", (event123)=> {
    console.log("mousemove", event123)
})

 


const click = () => {document.addEventListener("mousedown", (event)=> {
    console.log("mousedown", event)
})
 document.addEventListener("mouseup", (event)=> {
    console.log("mouseup", event)
})}

const doubleClick 


const createCircle = () => {
   const element = document.createElement("div")
   element.className = "circle";
   element.style.backgroundColor = "blue";
   container.appendChild(element)
}

const drawCircles = (amountOfcircles) => {
     if (doubleClick){
    for(let i = 0; i <= amountOfcircles; i++){
        createCircle()
    }
     }
}

drawCircles();