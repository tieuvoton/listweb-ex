import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Logout from "./Logout";
import webLogo from "../webLogo.svg";
import { Link, Route, Switch } from "react-router-dom";
import Favorite from "./Favorite";
import Rated from "./Rated";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <ul className="navbar">
        <li>
          <img src={webLogo} className="App-logo" alt="logo" />
        </li>
        <li>
          <Link className="home" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="favorite" to="/favorite">
            FAVORITE
          </Link>
        </li>
        <li>
          <Link className="rated" to="/rated">
            RATED
          </Link>
        </li>
      </ul>
      <Login />
      {/* <Logout/>             */}
    </div>
  );
};

export default styled(Header)`
  width: 100%;
  height: 120px;
  color: #fff;
  background-color: #3f51b5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .navbar {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .navbar li {
    margin: 20px;
    font-size: 1.5em;
    font-weight: 500;
  }
  .navbar li::after {
    content: "";
    display: block;
    width: 0;
    height: 5px;
    background-color: #01b4e4;
  }

  .navbar li:hover::after {
    opacity: 100;
    width: 100%;
  }

  .navbar img {
    height: 80px;
  }

  .home {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .favorite {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .rated {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;
