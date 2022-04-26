import React from "react";

//StyledComponents
import {
  StyledTopbar,
  Wrapper,
  IconContainer,
  ButtonContainer,
} from "../styles/topbarStyle";

//assets
import discord from "../../assets/images/discord.png";
import twitter from "../../assets/images/twitter.png";
import boat from "../../assets/images/boat.png";
import logo from "../../assets/images/logo.png";

//Bootstrap
import { Navbar, Container, Button } from "react-bootstrap";

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="img-fluid" alt="Responsive " />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Wrapper>
              <IconContainer>
                <a href="https://discord.com/" target="_blank" rel="noreferrer">
                  <img src={discord} className="img-fluid" alt="Responsive " />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <img src={twitter} className="img-fluid" alt="Responsive " />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={boat} className="img-fluid" alt="Responsive " />
                </a>
              </IconContainer>
              <ButtonContainer>
                <Button>Dashboard</Button>
              </ButtonContainer>
            </Wrapper>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledTopbar>
  );
};

export default Topbar;
