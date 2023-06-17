const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const allmovie = document.querySelector("#allmovie");
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data.results);
  // console.log(data)
};
const showMovies = (data) => {
  allmovie.innerHTML = "";
  data.forEach((item) => {
    let movie = document.createElement("div");
    movie.classList.add("movie");
    movie.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="">
            <div class="tittle">
                <h2 id="tittle">${item.original_title}</h2>
                <p id="reldate">${item.release_date}</p>
                <p id="descr">${item.overview}</p>
            </div>
            `;
    allmovie.appendChild(movie);
    // console.log(item)
  });
  // console.log(data)
};

const search = document.querySelector("#search");
search.addEventListener("keyup", function () {
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});
function clearall() {
  // let clear= document.querySelector('#clear')

  search.value = "";
  // console.log('mmm')
}
getMovies(APIURL);
