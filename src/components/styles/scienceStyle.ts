import styled from "styled-components";

export const StyledScience = styled.div`
  background-color: rgb(30, 29, 34);

  .container {
    min-height: 100vh;
  }
`;
export const TextContainer = styled.div`
  h2 {
    color: white;
    text-align: center;
    padding-top: 40px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FirstItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 70px;
  }

  img {
    height: 350px;
  }
`;

export const Wrapper = styled.div`
  align-self: flex-start;
  padding-top: 50px;
  padding-left: 20px;

  p {
    align-self: flex-start;

    color: white;
    font-weight: 600;
    text-align: justify;
  }
`;
export const ButtonGroup = styled.div`
  height: 230px;
  padding-top: 10px;
  padding-bottom: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 991.98px) {
    align-items: center;
  }

  Button:nth-child(1) {
    background-color: rgb(168, 252, 168) !important;
    border: none !important;
    padding: 9px 20px;
    box-shadow: none !important;
    border-radius: 30px;
    width: 250px;
    color: rgb(60, 194, 60);
    font-weight: 600;
    font-size: 13px;

    @media (max-width: 991.98px) {
      width: 500px;
    }
    @media (max-width: 510px) {
      width: 300px;
    }
    @media (max-width: 420px) {
      width: 250px;
    }
    img {
      height: 30px;
      padding-right: 5px;
    }

    &:hover {
      background-color: rgb(168, 252, 168) !important;
    }
    &:active {
      border: none;
      box-shadow: none;
      background-color: rgb(168, 252, 168) !important;
      transform: scale(0.9);
      transition: ease-in-out 0 05s;
    }
  }

  Button:nth-child(2) {
    background-color: transparent !important;
    border: 1px solid rgb(15, 144, 16);
    padding: 9px 20px;
    box-shadow: none !important;
    border-radius: 30px;
    width: 250px;
    color: rgb(255, 255, 0);
    font-weight: 600;
    box-shadow: rgb(168, 252, 168) !important;
    font-size: 13px;

    @media (max-width: 991.98px) {
      width: 500px;
    }
    @media (max-width: 510px) {
      width: 300px;
    }
    @media (max-width: 420px) {
      width: 250px;
    }

    img {
      height: 30px;
      padding-right: 5px;
    }

    &:hover {
      background-color: transparent !important;
    }
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent !important;
      transform: scale(0.9);
      transition: ease-in-out 0 05s;
    }
  }
  Button:nth-child(3) {
    background-color: transparent !important;
    border: 1px solid white !important;
    padding: 9px 20px;
    box-shadow: none !important;
    border-radius: 30px;
    width: 250px;
    color: white;
    font-weight: 600;
    box-shadow: rgb(168, 252, 168) !important;
    font-size: 13px;

    @media (max-width: 991.98px) {
      width: 500px;
    }
    @media (max-width: 510px) {
      width: 300px;
    }
    @media (max-width: 420px) {
      width: 250px;
    }

    img {
      height: 30px;
      padding-right: 5px;
    }

    &:hover {
      background-color: transparent !important;
    }
    &:active {
      box-shadow: none;
      background-color: transparent !important;
      transform: scale(0.9);
      transition: ease-in-out 0 05s;
    }
  }
`;
export const SecondItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 70px;
  }

  img {
    height: 350px;
  }
`;

export const FirstTextWrapper = styled.div`
  text-align: flex-start;
  padding-top: 50px;

  @media (max-width: 991.98px) {
    text-align: center;
  }
  h2 {
    color: white;
    padding-left: 20px;
  }
  p {
    padding-top: 20px;
    padding-left: 20px;
    color: white;
    font-weight: 600;
    text-align: justify;
  }
`;
export const ThirdItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 70px;
  }

  img {
    height: 350px;
  }
`;
export const SecondTextWrapper = styled.div`
  text-align: flex-start;
  padding-top: 50px;

  @media (max-width: 991.98px) {
    text-align: center;
  }
  h2 {
    color: white;
    padding-left: 20px;
  }
  p {
    padding-top: 20px;
    padding-left: 20px;
    color: white;
    font-weight: 600;
    text-align: justify;
  }
`;
