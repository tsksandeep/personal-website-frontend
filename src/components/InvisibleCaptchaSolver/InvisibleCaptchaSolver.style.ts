import { css } from "emotion";

export const InvisibleCaptchaSolverStyle = () => css`
  font-family: "Roboto", sans-serif;
  padding: 200px 0 100px 0;

  .robot-image-wrapper {
    .robot {
      width: 200px;
      height: 200px;
    }
  }
  .app-name {
    margin: 50px 0;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 4px;
  }
`;
