import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc2OTA4ODZmODIxN2FiZjEyMGMyMjNhNWYxNDEyYiIsInN1YiI6IjY1ZGI4MTljY2FiZmU0MDE4NmQxYmI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_mMnvljsxe6imM9UF46pVV1eqxnSfeB5tUjaDtgbHM',
  },
};

const getMovies = async () => {
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getMovies;
