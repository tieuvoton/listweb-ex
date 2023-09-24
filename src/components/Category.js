import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as FetchedData from "../data/fetchedData";
import { useSelector, useDispatch } from "react-redux";
import { chooseCategoryAction } from "../actions";

const Category = ({ movieCategory, className }) => {
  const dispatch = useDispatch();

  const handleCategory = (e) => {
    const { value } = e.target;

    if (value === "Popular") {
      movieCategory = "popular";
    } else if (value === "Now Playing") {
      movieCategory = "now_playing";
    } else if (value === "Top Rated") {
      movieCategory = "top_rated";
    } else if (value === "Upcoming") {
      movieCategory = "upcoming";
    }
    console.log("movieCategory in category.js is", movieCategory);

    dispatch(chooseCategoryAction(movieCategory));
  };

  // console.log('31. movieCategory in category.js is', movieCategory)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     console.log('movieCategory in category.js is', movieCategory)
  //     dispatch(chooseCategoryAction(movieCategory));
  // }, [])

  // console.log('38. movieCategory in category.js is', movieCategory)
  return (
    <div className={className}>
      <h5>Category</h5>
      <select className="dropdownContainer" onChange={handleCategory}>
        <option value="Popular">Popular</option>
        <option value="Now Playing">Now Playing</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default styled(Category)`
  margin-right: 30px;
  font-weight: 200;
  .dropdownContainer {
    border-bottom: 1px solid #555;
    font-size: 1.2em;
    border-top: none;
    border-right: none;
    border-left: none;
  }
`;
