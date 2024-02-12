const favs = {
    artist: "Céline Dion",
    food: "pho",
    animal: "wombat",
    number: 37
};

// 1. Change 'favs' values to your own using dot notation.
favs.artist = "Tate McRae";
// 2. Add at least 2 additional favorites (e.g. movie, tv show, videogame) to the object `favs` using dot notation.
favs.color = "blue";
favs.season = "spring";
// 3. Be sure to click 'Run' to see your changes.



// CHALLENGE
// Look up object destructuring - you can also go to this link: https://www.w3schools.com/react/react_es6_destructuring.asp
//  - See if you can save the properties of the object intro separate variables using this.




// DON'T CHANGE THIS CODE
for (let key in favs) {
    let para = document.createElement("p");
    para.innerHTML = `${key}: ${favs[key]}`
    document.querySelector(".favs").appendChild(para)
}