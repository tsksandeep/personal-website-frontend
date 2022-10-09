import { css } from "emotion";

export const EducationComponentStyle = () => css`
  font-family: "Consolas", sans-serif;
  padding: 100px 0 0 0;

  .education {
    margin: 0 !important;
    max-width: 100% !important;
  }

  .education-heading {
    font-weight: 600 !important;
  }

  .role {
    font-weight: 600 !important;
    text-align: left;
  }

  .organization {
    float: left;
  }

  .role-description {
    text-align: left;
    font-weight: 400;
  }

  .bold {
    font-weight: bold !important;
  }

  @media (max-width: 768px) {
    .custom-period {
      text-align: left;
    }
  }
`;
