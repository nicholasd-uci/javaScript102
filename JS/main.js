// ARRAY of My Favorites
let favorites = ['The Mask', 'I will survive', 'skyrim', 'pizza']
// ARRAY of User Favorites - keep this empty
let uFavorites = []

uFavorites.push(prompt('What is your favorite movie?'))
if (uFavorites[0] === favorites[0]) {
    alert(`Hey, That's my favorite too!`)
}

uFavorites.push(prompt('What is your favorite song?'))
if (uFavorites[1] === favorites[1]) {
    alert(`Hey, That's my favorite too!`)
}

uFavorites.push(prompt('what is your favorite game?'))
if (uFavorites[2] === favorites[2]) {
    alert(`Hey, That's my favorite too!`)
}

uFavorites.push(prompt('what is your favorite food?'))
if (uFavorites[3] === favorites[3]) {
    alert(`Hey, That's my favorite too!`)
}

console.log(`
My Favorites
------------
Movie: ${favorites[0]}
Song: ${favorites[1]}
Game: ${favorites[2]}
Food: ${favorites[3]}
------------
`)

console.log(`
Your Favorites
------------ 
Movie: ${uFavorites[0]}
Song: ${uFavorites[1]}
Game: ${uFavorites[2]}
Food: ${uFavorites[3]}
------------
`)

// Method ONE
// This is how you grab an Element from the Front-End and make it compatible with JS
// document.getElementById('myFavs').innerHTML = `
//     <p>My Favorite Movie: ${favorites[0]}</p>
//     <p>My Favorite Song: ${favorites[1]}</p>
//     <p>My Favorite Game: ${favorites[2]}</p>
//     <p>My Favorite Food: ${favorites[3]}</p>
// `
// document.getElementById('yourFavs').innerHTML = `
//     <p>My Favorite Movie:${uFavorites[0]}</p>
//     <p>My Favorite Song: ${uFavorites[1]}</p>
//     <p>My Favorite Game: ${uFavorites[2]}</p>
//     <p>My Favorite Food: ${uFavorites[3]}</p>
// `

// METHOD TWO
// This is how you create an element to render onto the HTML using JS
// NOTE ** after all of this you have to append the (ELEMENT) to the "HTML PAGE"
let myFavsElem = document.createElement('div')
myFavsElem.id = 'myFavs'
myFavsElem.innerHTML = `
<p>My Favorite Movie: ${favorites[0]}</p>
<p>My Favorite Song: ${favorites[1]}</p>
<p>My Favorite Game: ${favorites[2]}</p>
<p>My Favorite Food: ${favorites[3]}</p>
`

let yourFavsElem = document.createElement('div')
yourFavsElem.id = 'yourFavs'
yourFavsElem.innerHTML = `
<p>My Favorite Movie:${uFavorites[0]}</p>
<p>My Favorite Song: ${uFavorites[1]}</p>
<p>My Favorite Game: ${uFavorites[2]}</p>
<p>My Favorite Food: ${uFavorites[3]}</p>
`
// Appending Elements to the page
document.getElementById('favs').append(myFavsElem)
document.getElementById('favs').append(yourFavsElem)