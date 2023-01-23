import axios from '../utils/axios';

const API_KEY = "d3c00761eff125b45afbcd52d8235bc7";

export const getPopularMovies = (page) => {
  return axios.get(`movie/popular?api_key=${API_KEY}&page=${page}&include_adult=false`);
};

export const getMovieDetails = (id) => {
  return axios.get(`movie/${id}?api_key=${API_KEY}&include_adult=false`);
};

export const getSearchMovies = (searchQuery, page) => {
  return axios.get(`search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}&include_adult=false`);
};

export const getMoviesOfSelectedYear = (year, page) => {
  return axios.get(`discover/movie?api_key=${API_KEY}&primary_release_year=${year}&page=${page}&include_adult=false`);
};

export const getMoviesOfSelectedGenre = (genre, page) => {
  return axios.get(`discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}&include_adult=false`);
};

export const getGenre = () => {
  return axios.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);
}