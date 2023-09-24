import React, { useEffect } from "react";
import Pagination from "./Pagination";
import Category from "./Category";
import MovieList from "../containers/MovieList";
import { useSelector, useDispatch } from "react-redux";
import * as FetchedData from "../data/fetchedData";
import { loadMovieAction, chooseCategoryAction } from "../actions";
import styled from "styled-components";

const PageandCtgrContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieAction());
  }, []);

  const movieListState = useSelector((state) => {
    // console.log('state is', state.movieList)
    return state.movieList;
  });
  console.log("movieListState in home.js is", movieListState);

  const {
    movieListData,
    movieCategory,
    currentPage,
    totalPages
  } = movieListState;
  console.log("movieCategory in home.js is", movieCategory);
  console.log("movieListData in Home.js is", movieListData);
  //   console.log('currentPage after state is', currentPage)

  return (
    <div>
      <PageandCtgrContainer>
        <Pagination
          movieCategory={movieCategory}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        <Category
          movieCategory={movieCategory}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </PageandCtgrContainer>
      <MovieList movieListData={movieListData} />
    </div>
  );
};

export default Home;
