// 1. Create an object called `mythicalCreature`
//  - Add a name property and give it a value of whatever you want to call it.
//  - Add more properties to the object. 
//  - Include color, special abilities, where it lives, and any other information you'd like to include.
//  - Once complete, run your code.

let mythicalCreature = {
  name: "Expedia",
  color: "blue",
  specialAblilities: "find travel",
  home: "internet",
  age: 37
}





// DON'T CHANGE THIS CODE
function addToScreen(obj) {
    for (const key in obj) {
        let para = document.createElement("p")
        para.innerHTML = `${key}: ${obj[key]}`
        document.querySelector('.display').appendChild(para)
    }
}
addToScreen(mythicalCreature);