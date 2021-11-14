import { css } from "emotion";

export const IntroComponentStyle = () => css`
  font-family: "Roboto", sans-serif;
  padding: 200px 0 100px 0;

  .avatar {
    width: 200px;
    height: auto;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .about-me {
    margin: 50px 0;
    font-size: 24px;
  }

  .avatar-name {
    background: -webkit-linear-gradient(
      0deg,
      #ef178e 10%,
      #7e47c5 50%,
      #01ccc9 90%
    );
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    font-size: 32px;
  }

  .know-me-already {
    font-size: 18px !important;
    position: relative;
    top: 2px;
    margin-right: 10px;
  }
`;
