import React from "react";
import styled from "styled-components";
import ThankImg from "../../assets/ThankYou.jpg";
import {ReactComponent as RedTriangle} from "../../assets/RedTriangle.svg";
import {ReactComponent as TealSquare} from "../../assets/TealSquare.svg";
import CodeForSFLogo from "../../assets/CodeForSFLogo.png";
import GitHubLogo from "../../assets/GitHubLogo.png";
import ReactLogo from "../../assets/ReactLogo.png";
import Typography from "@mui/material/Typography";


/* 
  Note: "justify-content: space-around" causes html elements to overflow on left
        when screen view is mobile size
*/  
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
`;

const ImageSection = styled.div`
  width: 560px;
  position: relative;
`;

const StyledRedTriangle = styled(RedTriangle)`
  position: absolute;
  top: 24px;
  right: -85px;
`;

const StyledTealSquare = styled(TealSquare)`
  position: absolute;
  bottom: 137px;
  left: -10px;
`;

const TextAndLogos = styled.div`
  display: flex;
  flex-direction: column;;
  text-align: left; 
  width: 433px;
  height: 430px;
  @media screen and (max-width: 480px){
      margin-left: 30%;
  }
`;

const ThankYouImg = styled.img`
  border-radius: 50%;
`;

const Logos = styled.div`
  width: 433px;
  margin-top: 24px;
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
        <StyledRedTriangle title="Red triangle"/>
        <StyledTealSquare title="Teal square"/>
      </ImageSection>

      <TextAndLogos>
        <Typography variant="h3">Thank you</Typography>
        <br/>
        <Typography>
          This project couldn’t have happened without the generosity of the
          friends and family of Sanat Moningi. Thank you also to our sponsors,
          who provided us the tools to make this portal possible.
        </Typography>
        <br/>
        <Logos>
          <a href="https://www.codeforsanfrancisco.org/">
            <CodeForSFLogoImg alt="Code for SF Logo" src={CodeForSFLogo} />
          </a>
          <a href="https://github.com/">
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
