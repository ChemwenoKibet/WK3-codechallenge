// // Working solution
// fetches info for the first film and displays it.
fetch("http://localhost:3000/films")
  .then((res) => res.json())
  .then((data) => {
    const object = data.find((obj) => obj.id == 1);
    // console.log(object);

    //displays first film poster
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");
    imageElement.src = object.poster;
    imageElement.alt = "Film poster";
    imageElement.class = "d-inline-block align-text-top";
    imageElement.width = "300";
    imageElement.height = "400";
    posterDiv.appendChild(imageElement);

    // displays title of first film
    const titleAndRuntimeDiv = document.getElementById("titleAndRuntime");
    let paraElement = document.createElement("p");

    paraElement.innerText = object.title;
    paraElement.class = "movie-title text-white";
    titleAndRuntimeDiv.appendChild(paraElement);

    // displays runtime of first film
    let paraElementTwo = document.createElement("p");

    paraElementTwo.innerText = `Runtime: ${object.runtime} minutes`;
    paraElementTwo.class = "time text-info";
    titleAndRuntimeDiv.appendChild(paraElementTwo);

    //displays description of film
    const detailsDiv = document.getElementById("moreDetails");
    let paraElementThree = document.createElement("p");

    paraElementThree.innerText = `Description: ${object.description}`;
    paraElementThree.class = "description";
    detailsDiv.appendChild(paraElementThree);

    //displays showtime of film
    let showtimeBtn = document.createElement("button");

    showtimeBtn.innerText = `${object.showtime}`;
    showtimeBtn.class = "btn btn-outline-secondary";
    showtimeBtn.style.color = "green";
    showtimeBtn.type = "button";
    detailsDiv.appendChild(showtimeBtn);

    // displays available tickets tickets

    let availableTickets = object.capacity - object.tickets_sold;
    // console.log(availableTickets);

    let availTicketSpan = document.createElement("span");

    availTicketSpan.innerText = `${availableTickets} remaining minutes`;
    detailsDiv.appendChild(availTicketSpan);

    let breakElement = document.createElement("br");
    detailsDiv.appendChild(breakElement);
    detailsDiv.appendChild(breakElement);

    // button for buying ticket
    let ticketBtn = document.createElement("button");

    ticketBtn.innerText = "Buy Tickets";
    ticketBtn.id = "ticketBtn";
    ticketBtn.class = "btn btn-success";
    ticketBtn.type = "button";
    detailsDiv.appendChild(ticketBtn);

    // event listener
    // when you click on ticketBtn, the available tickets values ought to decrease to zero.
    // added an alert to notify user that there are no more tickets when the tickets = 0

    ticketBtn.addEventListener("click", () => {
      if (availableTickets === 1) {
        //alert("No more tickets available");
        ticketBtn.innerText = "SOLD OUT";
        availTicketSpan.innerText = "";

      } else {
        --availableTickets;
        
        availTicketSpan.innerText = `${availableTickets} remaining minutes`;
      }
    });
  });

//--------------------------------------------------------------------------------------------------//
// Second deliverable.
// access the required endpoints
function getMovies() {
  // fetch data
  fetch("http://localhost:3000/films")
    .then((resp) => resp.json())
    .then(renderMovies);
}
getMovies();

// render all movies
function renderMovies(movies) {
  movies.forEach(movieDetails);
}

// displays the full list of movies from our endpoint on the left side
const listElement = document.getElementById("titles");

function movieDetails(films) {
  let li = document.createElement("li");
  li.innerText = films.title;
  listElement.appendChild(li);
}