import * as FetchedData from "./data/fetchedData";

export const LOAD_MOVIE_SUCCESS = "LOAD_MOVIE_SUCCESS";
export const CHOOSE_CATEGORY_SUCCESS = "CHOOSE_CATEGORY_SUCCESS";
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY";
export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const TOGGLE_LIKED = "TOGGLE_LIKED";

export const loadMovieSuccess = (movieListData) => {
  return {
    type: LOAD_MOVIE_SUCCESS,
    payload: movieListData
  };
};

export const loadMovieAction = () => {
  return (dispatch) => {
    FetchedData.loadMovieList().then((movieListData) => {
      dispatch(loadMovieSuccess(movieListData));
      // console.log('load data in actions is', movieListData.results)
    });
  };
};

export const toggleLikedAction = (clikedId) => {
  return {
    type: TOGGLE_LIKED,
    payload: { clikedId }
  };
};

export const chooseCategorySuccess = (movieListData, movieCategory) => {
  return {
    type: CHOOSE_CATEGORY_SUCCESS,
    payload: {
      movieListData,
      movieCategory
    }
  };
};

export const chooseCategoryAction = (movieCategory) => {
  return (dispatch) => {
    // console.log('movieCategory in action.js is', movieCategory);
    FetchedData.getMovieList(movieCategory).then((movieListData) => {
      dispatch(chooseCategorySuccess(movieListData, movieCategory));
      console.log("data with category in action.js is", movieListData);
    });
  };
};

export const prevPageSuccess = (currentPage, totalPages) => {
  return {
    type: PREV_PAGE,
    payload: { currentPage, totalPages }
  };
};

export const nextPageSuccess = (
  movieListData,
  movieCategory,
  currentPage,
  totalPages
) => {
  return {
    type: NEXT_PAGE,
    payload: { movieListData, movieCategory, currentPage, totalPages }
  };
};

export const nexePageAction = (movieCategory, currentPage, totalPages) => {
  currentPage += 1;
  return (dispatch) => {
    FetchedData.getMovieList(movieCategory, currentPage, totalPages).then(
      (movieListData) => {
        console.log("category in actions.js is", movieCategory);
        console.log(
          "data with currentPage in action.js is",
          movieListData.results
        );
        console.log("currentPage in action.js is", currentPage);

        dispatch(
          nextPageSuccess(movieListData, movieCategory, currentPage, totalPages)
        );
      }
    );
  };
};
