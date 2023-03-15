import { css } from "emotion";

export const IntroComponentStyle = () => css`
  font-family: "Consolas", sans-serif;
  padding: 150px 0 100px 0;

  .avatar {
    width: 200px;
    height: auto;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .about-me {
    margin: 50px 0 30px 0;
    font-size: 24px;
  }

  .about-intro-heading {
    font-size: 30px;
  }

  .about-intro {
    padding-top: 20px;
    font-size: 18px;
    text-align: center;
    max-width: 1100px;
    margin: 0 auto;
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
