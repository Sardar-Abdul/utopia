import React from "react";
import { StyledRoadmap, TextWrapper } from "../styles/roadmapStyle";
import img2 from "../../assets/images/img2.png";
import { Container } from "react-bootstrap";

const Roadmap: React.FC = () => {
  return (
    <StyledRoadmap>
      <Container>
        <TextWrapper>
          <h2>ROADMAP</h2>
          <p>Loading Data for Roadmaps ...</p>
        </TextWrapper>
        <img src={img2} className="img-fluid" alt="Responsive " />
      </Container>
    </StyledRoadmap>
  );
};

export default Roadmap;
