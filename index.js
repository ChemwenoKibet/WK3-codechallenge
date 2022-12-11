function getDisplayFilm(){
    //fetch film info
    fetch('http://localhost:3000/films')
    .then((res) => res.json())
    .then(renderFirstMovie) //hoisted function
    
}
getDisplayFilm()

function renderFirstMovie(firstMovie){
    firstMovie.find(((element) => element.id === "1"))
    firstFilm(firstMovie.find(((element) => element.id === "1")))
}