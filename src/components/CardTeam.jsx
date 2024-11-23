import React from "react";
import styled from "styled-components";

const Card = ({ name, position, experience, image }) => {
  return (
    <StyledWrapper>
      <div className="card-client">
        <div className="user-picture">
          <img src={image} alt={name} className="user-image" />
        </div>
        <p className="name-client">
          {name}
          <span>{position}</span>
        </p>
        <p className="experience">{experience}</p>
        <div className="social-media">
          {/* Social media icons */}
          {/* Add your social media links here */}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-client {
    background: #555;
    width: 13rem;
    padding: 20px;
    border: 4px solid #fff;
    box-shadow: 0 6px 10px #212121;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease;
  }

  .card-client:hover {
    transform: translateY(-10px);
  }

  .user-picture {
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    border: 4px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .user-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name-client {
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
  }

  .name-client span {
    display: block;
    font-weight: 200;
    font-size: 16px;
  }

  .experience {
    margin-top: 10px;
    font-weight: 300;
    font-size: 14px;
  }

  .social-media a {
    margin-right: 15px;
  }

  /* Add more styles if needed */
`;

export default Card;
