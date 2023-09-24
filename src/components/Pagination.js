import React from "react";
import styled from "styled-components";

const Pagination = ({ className }) => {
  return (
    <div className={className}>
      <button className="prevBtn">Prev</button>
      <p className="page">1/500</p>
      <button className="nextBtn">Next</button>
    </div>
  );
};

export default styled(Pagination)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 35%;

  .prevBtn {
    color: #01b4e4;
    border-color: #01b4e4;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    width: 60px;
    height: 40px;
    margin: 20px 30px;
  }

  .nextBtn {
    color: #01b4e4;
    border-color: #01b4e4;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    width: 60px;
    height: 40px;
    margin: 20px 30px;
  }

  .page {
    margin: 30px 50px;
  }
`;
