import { css } from "emotion";

export const SkillsComponentStyle = () => css`
  font-family: "Roboto", sans-serif;
  padding: 150px 0;

  .heading {
    margin-bottom: 50px;
  }

  .skills-heading {
    font-size: 2rem;
  }

  .special-skill-item {
    padding: 20px;
    border-radius: 10px !important;
  }

  .special-skill-item:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
    z-index: 1;
  }

  .skills-topic {
    text-align: left;
    padding-top: 10px;
  }

  .progress {
    height: 8px;
  }

  .ion-icons {
    height: 50px !important;
    width: 50px !important;
  }

  @media (max-width: 768px) {
    .custom-skill-col {
      margin: 40px 10px;
    }
    .skills-heading {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 578px) {
    .special-skill-item:hover {
      transform: none;
    }
  }
`;
