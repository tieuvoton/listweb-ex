import React from "react";
import styled from "styled-components";
import { IoHeartOutline, IoHeart, IoStar } from "react-icons/io5";
import MovieList from "../containers/MovieList";
// import img from '../img.jpg';

const MovieCard = ({
  id,
  imgSrc,
  title,
  rateNum,
  liked,
  className,
  onToggleHeart
}) => {
  return (
    <div className={className}>
      <img className="img" src={imgSrc} alt="movie image" />
      <h4 className="title">{title}</h4>
      <div className="rateAndLike">
        <div className="rate">
          <IoStar className="star" />
          <p className="rateNumber">{rateNum}</p>
        </div>
        <span className="liked" onClick={() => onToggleHeart(id)}>
          {liked ? <IoHeart color="red" /> : <IoHeartOutline />}
        </span>
        {/* <span class={`liked ? 'IoHeart' : 'IoHeartOutline'`}></span> */}
        {/* <span class="{liked ? "IoHeart" : "IoHeartOutline"}" id="clicked-${id}" onclick="turnRed(${id})"></span> */}
        {/* <IoHeartOutline className="liked"  /> */}
      </div>
    </div>
  );
};

export default styled(MovieCard)`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;
  margin: 30px;

  .img {
    width: 100%;
    height: auto;
  }

  .title {
    height: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 1em;
    padding-top: 5px;
    cursor: pointer;
  }

  .title:hover {
    color: #01b4e4;
  }

  .rateAndLike {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
  }

  .rate {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .star {
    color: #f5c518;
    padding-right: 5px;
  }

  .rateNumber {
    margin-top: 0;
  }
`;
