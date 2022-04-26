import styled from "styled-components";

export const StyledTopbar = styled.div`
  min-height: 10vh;
  background-color: rgb(30, 29, 34);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-brand {
      img {
        height: 90px;
      }
    }
    .navbar-toggler {
      border: none;
    }

    .navbar-toggler:focus {
      box-shadow: none;
    }

    .navbar-toggler-icon {
      width: 40px;
      height: 40px;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
  }
`;
export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;

  @media (max-width: 991.98px) {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const IconContainer = styled.div`
  @media (max-width: 991.98px) {
    padding-bottom: 10px;
  }
  img {
    height: 40px;
    padding-left: 5px;
  }
`;
export const ButtonContainer = styled.div`
  padding-left: 20px;
  Button {
    background-color: rgb(231, 159, 66) !important;
    border: none !important;
    padding: 5px 25px;
    box-shadow: none !important;
    color: white;
    font-weight: 600;
    border-radius: 18px;

    &:hover {
      background-color: rgb(231, 159, 66) !important;
    }
    &:active {
      border: none;
      box-shadow: none;
      background-color: rgb(231, 159, 66) !important;
      transform: scale(0.9);
      transition: ease-in-out 0 05s;
    }
  }
`;
