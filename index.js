//fetch data
fetch("http://localhost:3000/films")
.then((response) => response.json())
.then((data) => {
    const firstFilm = data.find((obj) => obj.id == 1);
    //console.log(firstFilm);

    //display the poster
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");
})