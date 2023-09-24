import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import * as FetchedData from "../data/fetchedData";
import { useSelector, useDispatch } from "react-redux";
import { toggleLikedAction, chooseCategoryAction } from "../actions";

const Container = styled.div`
  margin: 10px 40px 20px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
`;

const MovieList = ({ movieListData, movieCategory, currentPage }) => {
  // const [movieListData, setMovieListData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // console.log('movieListData in movielist is', movieListData)
  const dispatch = useDispatch();

  const handleHeart = (clikedId) => {
    console.log("Liked clicked, id is", clikedId);
    dispatch(toggleLikedAction(clikedId));
  };

  const handleCategory = (movieCategory) => {
    console.log("in handleCategory moviecategory = ", movieCategory);
    dispatch(chooseCategoryAction(movieCategory));
  };
  // const dispatch = useDispatch();

  // useEffect (() => {
  //     // FetchedData.getMovieList()
  //     // .then((data) => {
  //     //     setMovieListData(data.results)

  //     //     console.log('data in movieList is',data)
  //     //     console.log('movieListData is ',movieListData )
  //     // })
  //     dispatch(chooseCategoryAction(movieCategory));
  // },[])

  const IMG_BaseURL = "https://image.tmdb.org/t/p/w500";
  if (movieListData.results == undefined) {
    return (
      <Container>
        {movieListData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imgSrc={`${IMG_BaseURL}${movie.poster_path}`}
              rateNum={movie.vote_average}
              liked={movie.liked}
              onToggleHeart={handleHeart}
              onToggleCategory={handleCategory}
            />
          );
        })}
      </Container>
    );
  } else {
    return (
      <Container>
        {movieListData.results.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imgSrc={`${IMG_BaseURL}${movie.poster_path}`}
              rateNum={movie.vote_average}
              liked={movie.liked}
              onToggleHeart={handleHeart}
              onToggleCategory={handleCategory}
            />
          );
        })}
      </Container>
    );
  }
};

export default MovieList;
