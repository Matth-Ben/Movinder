const API_TOKEN = "58dbb9f741411b16f34ad7620adab7dd"

export function getFilms() {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key' + API_TOKEN + '&language=fr'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
