// InforCard.js
import React from "react";
import styled from "styled-components";

const InforCard = ({ imageUrl, title, description, link }) => {
  return (
    <StyledWrapper>
      <div className="InforCard">
        <div className="bg" />
        <div className="blob" />
        <div className="content">
          <i
            className="icon"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></i>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link} className="text-blue-500 font-bold">
            Read more
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .InforCard {
    position: relative;
    width: 300px; /* Increased width */
    height: 350px; /* Increased height */
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 15px 15px 45px #bebebe, -15px -15px 45px #ffffff;
    margin: 0 auto;
  }

  .bg {
    position: absolute;
    top: 10px; /* Added padding */
    left: 10px;
    width: 280px; /* Adjusted to fit increased card size */
    height: 330px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
    z-index: 2;
  }

  .blob {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 3;
    text-align: center;
    color: black;
    font-weight: bold;
    padding: 0 1rem; /* Added padding for content */
  }

  .icon {
    background-size: contain;
    background-repeat: no-repeat;
    width: 72px; /* Increased icon size */
    height: 72px;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .content h2 {
    font-size: 1.5em; /* Adjusted font size */
    margin-bottom: 0.3em;
  }

  .content p {
    font-size: 1em;
    font-weight: normal;
    margin-bottom: 1em;
  }

  .content a {
    font-size: 0.9em;
    color: #0073e6;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default InforCard;
