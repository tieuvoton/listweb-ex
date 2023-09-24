import React from "react";
import MovieList from "../containers/MovieList";
import { useSelector } from "react-redux";
// import styled from 'styled-components';

const h1Style = {
  textAlign: "center"
};

const Favorite = () => {
  const movieListState = useSelector((state) => {
    // console.log("state is", state.movie);
    return state.movie;
  });

  const { likedMovie } = movieListState;

  return (
    <div>
      <h1 style={h1Style}>Favorite Movies</h1>
      <MovieList movieList={likedMovie} />
    </div>
  );
};

export default Favorite;
