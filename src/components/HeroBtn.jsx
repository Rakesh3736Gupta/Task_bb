import React from "react";
import styled from "styled-components";

const HeroBtn = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="HeroBtn" onClick={onClick}>
        Hover me
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .HeroBtn {
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge #149cea;
    outline: none;
    background-color: transparent;
    color: white;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .HeroBtn::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: rgba(
      191,
      219,
      254,
      0.8
    ); /* Lighter blue overlay for top part */
    transition: 0.5s;
    transform-origin: center;
  }

  .HeroBtn::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: rgba(
      191,
      219,
      254,
      0.8
    ); /* Lighter blue overlay for bottom part */
    transition: 0.5s;
  }

  .HeroBtn:hover::before,
  .HeroBtn:hover::after {
    transform: scale(0);
  }

  .HeroBtn:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
`;

export default HeroBtn;
