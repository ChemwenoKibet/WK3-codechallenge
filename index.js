function getDisplayFilm(){
    //fetch film info
    fetch('http://localhost:3000/films')
    .then((res) => res.json())
    .then(renderFirstMovie)
}
getDisplayFilm()