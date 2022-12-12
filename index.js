//fetch data
fetch("http://localhost:3000/films")
.then((response) => response.json())
.then((data) => {
    const firstFilm = data.find((obj) => obj.id == 1);
    //console.log(firstFilm);

    //display the poster
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");

    imageElement.src = firstFilm.poster;
    imageElement.alt = "Poster image";
    imageElement.width = "300";
    imageElement.height = "400";
    posterDiv.appendChild(imageElement);

    //display first film
    const titleAndRuntime = document.getElementById("titleAndRuntime");
    let paraTitle = document.createElement("p")
    let paraRuntime = document.createElement("p")

    paraTitle.innerText = firstFilm.titile;
    paraRuntime.innerText = `${firstFilm.runtime} minutes`;
    titleAndRuntime.appendChild(paraTitle);
    titleAndRuntime.appendChild(paraRuntime);

    const moreDetails = document.getElementById("moreDetails");
    let paraDescription = document.createElement("p");
    let showtimeBtn = document.createElement("button");
})