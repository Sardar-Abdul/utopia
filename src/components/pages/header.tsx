import React from "react";
import { StyledHeader, ButtonContainer } from "../styles/headerStyles";
import { Container, Button } from "react-bootstrap";
import chat from "../../assets/images/chat.png";
import header from "../../assets/images/header.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={header} className="img-fluid" alt="Responsive " />
        <ButtonContainer>
          <Button>
            <img src={chat} className="img-fluid" alt="Responsive " />
            Discord
          </Button>
        </ButtonContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
