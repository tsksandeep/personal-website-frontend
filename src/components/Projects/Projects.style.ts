import { css } from "emotion";

export const ProjectsComponentStyle = () => css`
  font-family: "Consolas", sans-serif;
  padding: 100px 0;

  .projects-heading {
    font-size: 2rem;
  }

  .project-card-wrapper {
    height: 100%;
    padding: 20px 10px;
  }

  .project-card-no-image {
    border-radius: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-card-heading {
    text-transform: uppercase;
  }

  .project-creator-circle {
    width: 70px;
    height: auto;
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    .projects-heading {
      font-size: 1.4rem;
    }
  }
`;
