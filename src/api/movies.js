import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc2OTA4ODZmODIxN2FiZjEyMGMyMjNhNWYxNDEyYiIsInN1YiI6IjY1ZGI4MTljY2FiZmU0MDE4NmQxYmI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_mMnvljsxe6imM9UF46pVV1eqxnSfeB5tUjaDtgbHM',
  },
};

const getMoviesCollection = async () => {
  try {
    const response = await axios({
      ...options,
      url: 'https://api.themoviedb.org/3/trending/all/day',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getTrendingMovies = async () => {
  try {
    const collection = await getMoviesCollection();
    return collection.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMovieById = async id => {
  try {
    const movies = await getTrendingMovies();
    return movies.find(movie => movie.id === Number(id));
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

// export const cancelRequest = () => {
//   abortController.abort();
// };
