import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc2OTA4ODZmODIxN2FiZjEyMGMyMjNhNWYxNDEyYiIsInN1YiI6IjY1ZGI4MTljY2FiZmU0MDE4NmQxYmI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_mMnvljsxe6imM9UF46pVV1eqxnSfeB5tUjaDtgbHM',
  },
};

export const getTrendingMovies = async () => {
  try {
    const movies = await axios({
      ...options,
      url: `https://api.themoviedb.org/3/trending/all/day`,
    });
    return movies.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMovieById = async id => {
  try {
    const movie = await axios({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${id}`,
    });
    return movie.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCast = async id => {
  try {
    const cast = await axios({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    });
    return cast.data.cast;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReviews = async id => {
  try {
    const reviews = await axios({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    });
    return reviews.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findMoviesByName = async query => {
  try {
    const movie = await axios({
      ...options,
      url: `https://api.themoviedb.org/3/search/movie?query=${query}`,
    });
    return movie.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};
