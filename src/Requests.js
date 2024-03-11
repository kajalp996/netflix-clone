const key = `7d6fca90799cec19a3870d8cde73c625`;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
