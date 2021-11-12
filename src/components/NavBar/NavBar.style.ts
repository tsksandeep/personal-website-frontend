import { css } from "emotion";

export const NavBarComponentStyle = () => css`
  button:focus,
  input:focus,
  input.form-control:focus {
    outline: none !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
  font-family: "Roboto", sans-serif !important;
  font-size: large;
  padding: 10px !important;

  .nav-bar-wrapper {
    margin-left: auto;
  }

  .nav-brand-item {
    padding-left: 3rem !important;
  }

  .nav-item {
    color: white !important;
    padding-right: 4rem !important;
  }

  .nav-item:hover {
    text-decoration: none;
  }

  .navbar-toggler {
    border: none !important;
  }

  @media (max-width: 1200px) and (min-width: 992px) {
    .nav-item {
      text-align: left;
      margin-left: 48px;
    }
  }

  @media (max-width: 991px) {
    .nav-bar-wrapper {
      margin: none;
    }

    .nav-brand-item {
      padding-left: 0rem !important;
    }

    .nav-item {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
      padding-right: 0rem !important;
      text-align: left;
    }
  }
`;
