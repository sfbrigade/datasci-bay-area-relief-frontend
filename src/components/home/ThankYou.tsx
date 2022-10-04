import React from "react";
import styled from "styled-components";
import ThankImg from "../../assets/ThankYou.jpg";
import CodeForSFLogo from "../../assets/CodeForSFLogo.png";
import GitHubLogo from "../../assets/GitHubLogo.png";
import ReactLogo from "../../assets/ReactLogo.png";
import Typography from "@mui/material/Typography";

import RedTriangle from "../../assets/RedTriangle.svg";
import TealSquare from "../../assets/TealSquare.svg";

/*
  Note: "justify-content: space-around" causes html elements to overflow on left
        when screen view is mobile size
*/
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: row;
  @media (max-width: 752px) {
    flex-wrap: wrap;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  position: relative;
  margin-left: 2%;
  @media (max-width: 752px) {
    width: 90%;
  }
`;

const NewStyledRedTriangle = styled.img`
  position: absolute;
  top: 5%;
  left: 72%;
`;

const NewStyledTealSquare = styled.img`
  position: absolute;
  bottom: 35%;
  left: -2%;
`;

const TextAndLogos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%; 
  height: auto;
  margin: 0 5% 0 5%;
  @media screen and (min-width: 720px) {
    margin: 0 10% 0 10%;
  }
`;

const ThankYouImg = styled.img`
  border-radius: 50%;
  max-width: 100%;
`;

const Logos = styled.div`
  width: auto;
  margin-top: 6%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CodeForSFLogoImg = styled.img`
  width: 279px;
  height: 49px;
`;

const GitHubLogoImg = styled.img`
  width: 75px;
  height: 67px;
  margin-left: 24px;
`;

const ReactLogoImg = styled.img`
  width: 162px;
  height: 65px;
`;

const ThankYou: React.FC = () => {
  return (
      <Container>
        <ImageSection>
          <ThankYouImg alt="Thank you image" src={ThankImg} />
          <NewStyledRedTriangle alt="red triangle" src={RedTriangle} />
          <NewStyledTealSquare alt="teal square" src={TealSquare} />
        </ImageSection>
        <TextAndLogos>
          <Typography variant="h3">Thank you</Typography>
          <br />
          <Typography>
            This project couldn’t have happened without the generosity of the
            friends and family of Sanat Moningi. Thank you also to our sponsors,
            who provided us the tools to make this portal possible.
          </Typography>
          <br />
          <Logos>
            <a href="https://www.codeforsanfrancisco.org/">
              <CodeForSFLogoImg alt="Code for SF Logo" src={CodeForSFLogo} />
            </a>
            <a href="https://github.com/sfbrigade/datasci-bay-area-relief-frontend">
              <GitHubLogoImg alt="GitHub Logo" src={GitHubLogo} />
            </a>
            <a href="https://reactjs.org/">
              <ReactLogoImg alt="React Logo" src={ReactLogo} />
            </a>
          </Logos>
        </TextAndLogos>
      </Container>
  );
};

export default ThankYou;
