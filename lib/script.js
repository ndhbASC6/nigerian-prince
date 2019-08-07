let randomGifs;
let randomLocation;
const fakeSubmit = document.getElementById("fake-submit");

const url1 = "https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches";

fetch(url1)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    const data = myJson;
    randomLocation = getLocation(Array.from(data));
    makeScam();
    // console.log(randomLocation);
});

const url2 = "https://api.giphy.com/v1/gifs/random?api_key=LgP9mUVYrFsD98YSN1wbGhEr4bj9xF2o&tag=&rating=PG-13";

fetch(url2)
.then(function(response){
    return response.json();
})
.then(function(myJson) {
    const data = myJson;
    randomGifs = data.data.image_original_url;
    makePicture();
});

const getLocation = arr => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function makeScam() {
    // evnt.preventDefault();
    // access api for info
    const location = document.querySelector("#location-api");
    const locationText = document.createElement("p");
    locationText.innerHTML = randomLocation.business + " sells " + randomLocation.item + " in " + randomLocation.location_1_city + " " + randomLocation.location_1_state;
    location.appendChild(locationText);
    // put info in tags and append
}

function makePicture() {
    const gif = document.createElement("img");
    gif.src = randomGifs;
    const picture = document.querySelector("#gif-api");
    picture.appendChild(gif);
}

// database-Api

// Gif-Api


// const url3 ="https://uselessfacts.jsph.pl/random.json";
// fetch(url3)
// .then(function(response){
//     return response.json();
// })
// .then(function(myJson) {
//     const data = myJson;
//     randomFact = Array.from(data);
//     console.log(randomFact);
// });


// bitly_url