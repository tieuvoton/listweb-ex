const baseURL = "https://api.themoviedb.org/3/movie";
// API request example:https://api.themoviedb.org/3/movie/550?api_key=b95f73a43bb59aa4b0ca7ea43ad4cdcd
const API_Key = "api_key=b95f73a43bb59aa4b0ca7ea43ad4cdcd";
const IMG_BaseURL = "https://image.tmdb.org/t/p/w500";

// const movieCategoryUrl = `${baseURL}/${model.movieCategory}?${API_Key}&page=${model.currentPage}`

export const loadMovieList = () => {
  const movieCategoryUrl = `${baseURL}/popular?${API_Key}&page=1`;
  console.log("URL is ", movieCategoryUrl);
  return fetch(movieCategoryUrl).then((resp) => {
    return resp.json();
  });
};

// The same with getMovieList function.
// export const getMovieList = async () => {
//     const movieCategoryUrl = `${baseURL}/${initialState.movieCategory}?${API_Key}&page=${initialState.currentPage}`;
//     console.log('movieCategoryUrl is', movieCategoryUrl)
//     const resp = await fetch(movieCategoryUrl);
//     const data = resp.json();
//     return data;
// }

export const getMovieList = (movieCategory, currentPage) => {
  const movieCategoryUrl = `${baseURL}/${movieCategory}?${API_Key}`;
  console.log("URL is", movieCategoryUrl);
  return fetch(movieCategoryUrl).then((resp) => {
    return resp.json();
  });
};
