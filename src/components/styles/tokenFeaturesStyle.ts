import styled from "styled-components";

export const StyledTokenFeatures = styled.div`
  background-color: rgb(30, 29, 34);

  .container {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 420px) {
      height: 30vh;
    }

    h2 {
      color: white;
      text-align: center;
    }

    p {
      color: white;
      text-align: center;
      padding-top: 20px;
      font-size: 20px;
    }
  }
`;
