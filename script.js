import { movies } from "./movies.js";


const input = document.getElementById('input');
const wrapper = document.getElementById('wrapper');

function renderList(items) {
  wrapper.innerHTML = '';
  items.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add();

    div.innerHTML = `

  <div class="card h-[368px] rounded-xl w-[244px] bg-[#333333] " style="box-shadow: 0px 0px 15px 0px #00000080;">
    <figure class="px-4 pt-4">
      <img src="1200x675mf.jpg.png" alt="Movie Poster" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title text-lg pt-[24px] pb-[11px] text-white">${movie.Title}</h2>
      <p class="text-sm text-gray-300 pb-[11px]">${movie.imdb_rating} &nbsp;&nbsp; ${movie.movie_year} &nbsp;&nbsp; ${movie.runtime}min</p>
      <p class="text-sm text-gray-400 flex flex-wrap justify-center max-w-[90%] mx-auto pb-[11px]">${movie.Categories}</p>
      <div class="card-actions mt-2">
        <button class="btn bg-[#5CB85C] w-[75px] h-[35px] rounded text-white btn-sm">More info</button>
      </div>
    </div>
  </div>
    `;

    wrapper.appendChild(div);
  });
}

renderList(movies);
input.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const filteredMovies = movies.filter((mov) => {
    return String(mov.Title).toLowerCase().includes(searchValue);
  });

  renderList(filteredMovies);
});

const btnaZ = document.getElementById('it')
const btnzA = document.getElementById('itvacha')
btnaZ.addEventListener('click', () => {
  const sorted = [...movies].sort((a, b) =>
    String(a.Title).localeCompare(String(b.Title))
  );
  renderList(sorted);
});

btnzA.addEventListener('click', () => {
  const sorted = [...movies].sort((a, b) =>
    String(b.Title).localeCompare(String(a.Title))
  );
  renderList(sorted);
});

const music = document.getElementById('music')
const Doc = document.getElementById('Doc')
const anim = document.getElementById('anim')
const drama = document.getElementById('drama')
const fam = document.getElementById('fam')
const Sport = document.getElementById('Sport')

music.addEventListener('click', () => {
  const filtered = movies.filter(movie =>
    movie.Categories.toLowerCase().includes("music".toLowerCase())
  );
  renderList(filtered);
});

Doc.addEventListener('click', () => {
  const filtered = movies.filter(movie =>
    movie.Categories.toLowerCase().includes("documentary".toLowerCase())
  );
  renderList(filtered);
});

anim.addEventListener('click', () => {
  const filtered = movies.filter(movie =>
    movie.Categories.toLowerCase().includes("animation".toLowerCase())
  );
  renderList(filtered);
});

drama.addEventListener('click', () => {
  const filtered = movies.filter(movie =>
    movie.Categories.toLowerCase().includes("drama".toLowerCase())
  );
  renderList(filtered);
});

fam.addEventListener('click', () => {
  const filtered = movies.filter(movie =>
    movie.Categories.toLowerCase().includes("family".toLowerCase())
  );
  renderList(filtered);
});

Sport.addEventListener('click', () => {
  const filtered = movies.filter(movie =>
    movie.Categories.toLowerCase().includes("sport".toLowerCase())
  );
  renderList(filtered);
});


const twentyten = document.getElementById('twentyten')
const twentyfiv = document.getElementById('twentyfiv')

twentyten.addEventListener('click' , ()=> {
  const ten = movies.filter(fen => fen.movie_year >= 2010 && fen.movie_year <= 2015)
  const sorted = [...ten].sort((a, b) => a.movie_year - b.movie_year);
  renderList(sorted);
})

twentyfiv.addEventListener('click' , ()=> {
  const ten = movies.filter(fen => fen.movie_year >= 2015 && fen.movie_year <= 2025)
  const sorted = [...ten].sort((a, b) => a.movie_year - b.movie_year);
  renderList(sorted);
})