const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planetEl.innerHTML = `<h1>PLANETS</h1>` 
planets.forEach(planetObj => {
    planetEl.innerHTML += `
    <h2>${planetObj}</h2>
    `
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

*/
// const upperEl = document.getElementById("upperPlanets")
// upperEl.innerHTML = `<h1>Uppercase Planets</>`
const upperCasePlanets = planets.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)
})
console.log(upperCasePlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

*/