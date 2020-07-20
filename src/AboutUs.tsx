import React from "react";
import styled from "styled-components";
import { ReactComponent as About } from "./assets/About.svg";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;

  height: 1024px;
`;

const AboutSection = styled.div`
  flex: 1 1 0;
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 433px;
  text-align: left;
`;

const ImageSection = styled.div`
  flex: 1 1 0;
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutImg = styled(About)`
  display: flex;
  flex-direction: column;
  width: 568px;
  height: 568px;
  left: 720px;
  top: 128px;
`;

const AboutHeader = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: Bree Serif,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  padding: 0 0 23px;
  margin: 0;
`;

const AboutParagraph = styled.p`
  position: static;
  width: 433px;
  height: 168px;
  left: 0;
  top: 0;

  font-family: Source Sans Pro,sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #000000;

  flex: none;
  order: 0;
  align-self: center;
  text-align: justify;
  margin: 0;
  padding: 0 0 23px;
`;

const AboutUs: React.FC = () => {
  return (
    <div className="AboutUsContainer">
      <Container>
        <AboutSection>
          <AboutDescription>
            <AboutHeader>About</AboutHeader>
            <AboutParagraph>
              We are a group of volunteers invested in working together to
              improve the City and County of San Francisco, often using
              technology to support our efforts. By connecting people,
              organizations, resources, tools, and networks to build for San
              Francisco, we will all thrive.
            </AboutParagraph>
            <AboutParagraph>
              The Data Science Working Group’s primary purpose is to efficiently
              assess, inspire, and tackle Code for San Francisco’s data science
              needs, as well as to help the City and other brigades with their
              data science needs whenever appropriate.
            </AboutParagraph>
          </AboutDescription>
        </AboutSection>
        <ImageSection>
          <AboutImg />
        </ImageSection>
      </Container>
    </div>
  );
};

export default AboutUs;
