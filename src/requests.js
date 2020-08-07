const API_KEY = "26582f465df2030d07df96916ddce286";

const requests = {
fetchTrending: `/trending/all/week?api_key=26582f465df2030d07df96916ddce286&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=26582f465df2030d07df96916ddce286&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=26582f465df2030d07df96916ddce286&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;