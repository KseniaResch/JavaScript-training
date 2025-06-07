
//1.function to generate a circle
//2. write function for unique color
//3. 
const container = document.getElementById("container")
document.addEventListener("mousemove", (event123)=> {
    console.log("mousemove", event123)
})

document.addEventListener("mousedown", (event)=> {
    console.log("mousedown", event)
})
document.addEventListener("mouseup", (event)=> {
    console.log("mouseup", event)
})
const createCircle = () => {
   const element = document.createElement("div")
   element.className = "circle";
   element.style.backgroundColor = "blue";
   container.appendChild(element)
}
createCircle();
createCircle();
createCircle();
createCircle();