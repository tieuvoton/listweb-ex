import * as Actions from "./actions";
// import * as FetchedData from '../data/fetchedData';

export const initialState = {
  movieListData: [],
  likedMovie: [],
  movieCategory: "popular",
  currentPage: 1,
  totalPages: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_MOVIE_SUCCESS: {
      return {
        ...state,
        movieListData: action.payload
      };
    }

    case Actions.TOGGLE_LIKED: {
      const { clikedId } = action.payload;
      const newList = {
        liked: false,
        ...action.payload
      };
      const likedList = state.movieListData.map((data) => {
        if (data.id === clikedId) {
          return {
            ...state,
            likedMovie: [...newList, !newList.liked]
          };
        } else {
          return state;
        }
      });
    }
    // case Actions.NEXT_PAGE: {
    //     const {page, totalPages} = action.payload;
    //     return {
    //         ...state,
    //         page: state.currentPage + 1,
    //         totalPages: totalPages
    //     }

    // }

    // case Actions.PREV_PAGE: {

    // }

    case Actions.CHOOSE_CATEGORY_SUCCESS: {
      // console.log("action in reducer.js", action.payload);
      return {
        ...state,
        movieListData: action.payload.movieListData,
        movieCategory: action.payload.movieCategory
      };
    }

    default:
      return state;
  }
};

export default reducer;
