import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: rgb(30, 29, 34);

  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 767.98px) {
      min-height: 70vh;
    }
    @media (max-width: 420px) {
      min-height: 40vh;
    }
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 50px;
  Button {
    background-color: rgb(85, 98, 234) !important;
    border: none !important;
    padding: 7px 20px;
    box-shadow: none !important;
    border-radius: 18px;
    color: white;
    font-weight: 600;

    img {
      height: 25px;
      padding-right: 5px;
    }

    &:hover {
      background-color: rgb(85, 98, 234) !important;
    }
    &:active {
      border: none;
      box-shadow: none;
      background-color: rgb(85, 98, 234) !important;
      transform: scale(0.9);
      transition: ease-in-out 0 05s;
    }
  }
`;
