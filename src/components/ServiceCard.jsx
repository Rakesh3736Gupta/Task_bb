import React from "react";
import styled from "styled-components";

const SerCard = ({ title, description, icon }) => {
  return (
    <StyledWrapper>
      <div className="SerCard">
        <div className="SerCard-icon">
          {/* Render the icon (image or emoji) */}
          {icon.endsWith(".gif") ||
          icon.endsWith(".png") ||
          icon.endsWith(".jpg") ? (
            <img src={icon} alt={title} className="icon" />
          ) : (
            <span className="icon">{icon}</span>
          )}
        </div>
        <div className="SerCard-details">
          <p className="text-title">{title}</p>
          <p className="text-body">{description}</p>
        </div>
        <button className="SerCard-button">More info</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .SerCard {
    width: 100%;
    max-width: 300px;
    height: auto;
    max-height: 400px;
    border-radius: 20px;
    background: #ffffff; /* Set background to white */
    position: relative;
    padding: 1.5rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .SerCard-icon {
    text-align: center;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .icon {
    width: 60px;
    height: 60px;
  }

  .SerCard-details {
    color: black;
    gap: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 2;
    text-align: center;
  }

  .SerCard-button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(30px); /* Start hidden just below the card */
    width: 80%;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    background-color: #008bf8;
    color: #fff;
    border: none;
    border-radius: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition for visibility */
    box-shadow: 0 4px 12px rgba(0, 139, 248, 0.3);
    cursor: pointer;
  }

  .SerCard-button:hover {
    background-color: #007acc; /* Darken color on button hover */
  }

  .text-body {
    color: rgb(134, 134, 134);
  }

  .text-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .SerCard:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .SerCard:hover .SerCard-button {
    opacity: 1;
    transform: translateX(-50%) translateY(0); /* Slide up from below to the bottom of the card */
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .SerCard {
      max-width: 100%;
      height: auto;
    }

    .icon {
      width: 50px;
      height: 50px;
    }

    .text-title {
      font-size: 1.2em;
    }

    .text-body {
      font-size: 0.9em;
    }

    .SerCard-button {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .SerCard {
      padding: 1rem;
    }

    .icon {
      width: 40px;
      height: 40px;
    }

    .text-title {
      font-size: 1.1em;
    }

    .text-body {
      font-size: 0.85em;
    }

    .SerCard-button {
      opacity: 1; /* Make button always visible on mobile */
      transform: translateX(-50%) translateY(0); /* Remove slide-up effect */
      font-size: 0.8rem;
      position: absolute;
      bottom: 10px; /* Position it at the bottom */
    }
  }
`;

export default SerCard;
