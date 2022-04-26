import styled from "styled-components";

export const StyledFooter = styled.div`
  min-height: 20vh;
  background-color: rgb(30, 30, 34);

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media (max-width: 767.98px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767.98px) {
    width: 70%;
  }

  Button {
    background-color: rgb(85, 98, 234) !important;
    border: none !important;
    padding: 7px 20px;
    box-shadow: none !important;
    border-radius: 18px;
    width: 100px;
    color: white;
    font-weight: 600;
    margin-left: 30px;

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
