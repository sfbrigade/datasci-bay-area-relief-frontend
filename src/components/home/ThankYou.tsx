import React from "react";
import styled from "styled-components";
import ThankImg from "../../assets/ThankYou.jpg";
import {ReactComponent as RedTriangle} from "../../assets/RedTriangle.svg";
import {ReactComponent as TealSquare} from "../../assets/TealSquare.svg";
import CodeForSFLogo from "../../assets/CodeForSFLogo.png";
import GitHubLogo from "../../assets/GitHubLogo.png";
import ReactLogo from "../../assets/ReactLogo.png";
import Typography from "@material-ui/core/Typography";


/* 
  Note: "justify-content: space-around" causes html elements to overflow on left
        when screen view is mobile size
*/  
const Container = styled.div`
  width: 100%;

  @media(min-width: 30rem){
    display: flex;
    width: 100%;
    position: relative;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  position: relative;

  @media(min-width: 30rem){
    width: 50%;
  }
`;

const ThankYouImg = styled.img`
  border-radius: 50%;
  width: 80%;
  margin-top: 15vw;

  @media(min-width: 30rem){
    margin-top:0;
  }
`;

const StyledRedTriangle = styled(RedTriangle)`
  position: absolute;
  top: -5vw;
  right: 1vw;
  width: 30vw;

  @media(min-width: 30rem){
    top: -4vw;
    right: 2vw;
    width: 12vw;
  }
`;

const StyledTealSquare = styled(TealSquare)`
  position: absolute;
  bottom: 20vw;
  left: 5vw;
  width: 15vw;
  
  @media(min-width: 30rem){
    bottom: 8vw;
    left: 0;
  }
`;

const TextAndLogos = styled.div`
  margin:6vw 4vw;

  @media(min-width: 30rem){
    width: 50%;
    margin-left: 5vw;
    text-align: left; 
    width: 40vw;
  }
`;


const Logos = styled.div`
  width: 100%;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 justify-content: center;

  @media(min-width: 30rem){
    margin-top:2vw;
    flex-direction: row;
  }
`
const CodeForSFLogoImg = styled.img`
  width: 70vw;
  padding: 2vw;
 
  @media(min-width: 30rem){
    width: 24vw;
  }
`;

const GitHubLogoImg = styled.img`
  width: 30vw;
  padding: 2vw;

  @media(min-width: 30rem){
    width: 5vw;
  }
`;

const ReactLogoImg = styled.img`
  width: 40vw;
  padding: 2vw;

  @media(min-width:30rem){
    width:13vw;
    padding:1vw;
  }
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
        <Typography variant="body1">
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
