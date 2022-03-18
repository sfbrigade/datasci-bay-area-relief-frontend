import React from "react";
import {ReactComponent as YellowHalfCircle} from "../../assets/YellowHalfCircle.svg";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import ImageAvatars from "./ImageAvatars";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  position: relative;
`;

const StyledYellowHalfCircle = styled(YellowHalfCircle)`
  position: absolute;
  left: 0px;
  top: 50%;
  z-index: 0;
`;

const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  width: 433px;
  z-index: 1;
  margin-left: 12%;
`;

const AboutUs: React.FC = () => {
  return (
    <Container>
      <StyledYellowHalfCircle title="Yellow half circle"/>  
      <AboutDescription>
        <Typography variant="h3">About</Typography>
        <br />
        <br />
        <Typography>
          We are a group of volunteers invested in working together to improve
          the City and County of San Francisco, often using technology to
          support our efforts. By connecting people, organizations, resources,
          tools, and networks to build for San Francisco, we will all thrive.
        </Typography>
        <br />
        <Typography>
          The Data Science Working Group’s primary purpose is to efficiently
          assess, inspire, and tackle Code for San Francisco’s data science
          needs, as well as to help the City and other brigades with their
          data science needs whenever appropriate.
        </Typography>
        <ImageAvatars />

      </AboutDescription>
    </Container>
  );
};

export default AboutUs;
