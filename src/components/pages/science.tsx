import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  StyledScience,
  TextContainer,
  ItemContainer,
  FirstItem,
  Wrapper,
  SecondItem,
  ThirdItem,
  FirstTextWrapper,
  SecondTextWrapper,
  ButtonGroup,
} from "../styles/scienceStyle";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import flask from "../../assets/images/flask.png";
import virus from "../../assets/images/virus.png";
import robot from "../../assets/images/robot.png";

const Science: React.FC = () => {
  return (
    <StyledScience>
      <Container>
        <TextContainer>
          <h2>SCIENCE & STUFF</h2>
        </TextContainer>
        <ItemContainer>
          <FirstItem>
            <img src={image1} className="img-fluid" alt="Responsive " />
            <Wrapper>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ButtonGroup>
                <Button>
                  <img src={flask} className="img-fluid" alt="Responsive " />
                  SERUM RELEASED
                </Button>
                <Button>
                  <img src={virus} className="img-fluid" alt="Responsive " />
                  VIRUS ISOLATED
                </Button>
                <Button>
                  <img src={robot} className="img-fluid" alt="Responsive " />
                  METABEARS IN QUEUE
                </Button>
              </ButtonGroup>
            </Wrapper>
          </FirstItem>
          <SecondItem>
            <img src={image2} className="img-fluid" alt="Responsive " />
            <FirstTextWrapper>
              <h2>BEAR LABS SERUM</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </FirstTextWrapper>
          </SecondItem>
          <ThirdItem>
            <img src={image3} className="img-fluid" alt="Responsive " />
            <SecondTextWrapper>
              <h2>BEAR LABS SERUM</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </SecondTextWrapper>
          </ThirdItem>
        </ItemContainer>
      </Container>
    </StyledScience>
  );
};

export default Science;
