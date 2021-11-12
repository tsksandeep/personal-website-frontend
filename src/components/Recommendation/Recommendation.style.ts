import { css } from "emotion";

export const RecommendationComponentStyle = () => css`
  font-family: "Roboto", sans-serif;
  padding: 150px 0;

  .recommendation-heading {
    font-size: 2rem;
  }

  #recommendation-section .intro {
    margin-bottom: 50px;
  }

  #recommendation-section .description {
    margin: 0;
  }

  .recommendation-box {
    font-size: 24px;
    font-weight: lighter;
    font-style: italic;
    padding: 15px 15px 75px 15px;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.075);
    color: white;
  }

  .recommendation-box .description {
    font-size: 17px;
  }

  .recommendation-author {
    margin-top: -50px;
  }

  .recommendation-author-circle {
    padding: 5px;
    background-color: white;
    height: 115px;
    width: 115px;
  }

  .recommendation-author-name {
    margin-top: 10px;
  }

  #recommendation-section .item {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    .recommendation-heading {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    .recommendation-box {
      margin: 10px;
    }
  }
`;
