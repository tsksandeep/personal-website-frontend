import { css } from "emotion";

export const EducationComponentStyle = () => css`
  font-family: "Roboto", sans-serif;
  padding: 150px 0;

  .education {
    margin: 0 !important;
    max-width: 100% !important;
  }

  .education-heading {
    font-weight: 400 !important;
  }

  .role {
    font-weight: 500 !important;
    text-align: left;
  }

  .organization {
    float: left;
  }

  .role-description {
    text-align: left;
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
