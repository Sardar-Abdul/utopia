import React from "react";
import { StyledFooter, ButtonContainer } from "../styles/footerStyles";
import { Container, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import chat from "../../assets/images/chat.png";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <img src={logo} className="img-fluid" alt="Responsive " />
        <ButtonContainer>
          <Button>
            <img src={chat} className="img-fluid" alt="Responsive " />
          </Button>
          <Button>
            <img src={chat} className="img-fluid" alt="Responsive " />
          </Button>
        </ButtonContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
