import { css } from "emotion";

export const FooterComponentStyle = () => css`
  input:focus,
  textarea:focus,
  button:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  font-family: "Consolas", sans-serif;
  padding-top: 100px;

  .contact-heading {
    font-size: 2rem;
    margin-bottom: 50px;
  }

  #contact li {
    display: inline-block;
  }

  .fontawesome-icons-custom {
    padding: 0;
  }

  .fontawesome-icons-custom li {
    padding-right: 20px;
  }

  #contact li i:hover {
    color: #e74c3c;
  }

  .address-custom {
    text-align: left;
    font-size: 20px;
    padding-top: 35px;
  }

  #form-name,
  #form-email,
  #form-message {
    border: #189efe 1px solid;
    color: white;
    margin-bottom: 15px;
  }

  #custom-response {
    height: 30px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
    padding-top: 3px;
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
  }

  .btn-resume {
    width: 230px;
    margin-top: 10px;
    background-color: #189efe;
    border: 1px solid #189efe;
    border-radius: 5px;
  }

  .btn-resume:hover {
    color: #189efe;
    background-color: #fff;
    border: 1px solid #189efe;
  }

  .btn-send {
    width: 100px;
    margin-top: 5px;
    background-color: #189efe;
    border: 1px solid #189efe;
    border-radius: 5px;
  }

  .btn-send:hover {
    width: 100px;
    margin-top: 5px;
    color: #189efe;
    background-color: #fff;
    border: 1px solid #189efe;
  }
  .alert {
    padding: 0;
    background-image: linear-gradient(to right, #f39c12, red);
    border: 0;
    text-align: center;
    display: none;
  }

  #footer-bottom {
    background-color: #f2f3f481;
    margin-top: 100px;
    padding: 30px 0 10px 0;
  }

  #footer-copyrights {
    text-align: left;
  }

  #footer-menu li {
    display: inline-block;
  }

  .footer-menu-item {
    margin-left: 20px;
    color: black;
  }

  #footer-menu a:hover {
    color: #189efe;
    text-decoration: none;
  }

  .icon {
    color: black;
  }

  @media (max-width: 768px) {
    .footer-top {
      margin-bottom: 50px;
    }

    #footer-copyrights {
      text-align: center;
    }

    .footer-menu-items {
      text-align: center;
      padding: 0;
    }

    .footer-menu-item {
      margin-left: 0px;
      margin-right: 15px;
    }
    .address-custom {
      font-size: 18px;
    }
    .contact-heading {
      font-size: 1.4rem;
    }
  }
`;
