import React from "react";
import styled from "styled-components";
import { ReactComponent as ThankImg } from "../../assets/ThankYou.svg";
import CodeForSFLogo  from "../../assets/CodeForSFLogo.svg";
import GitHubLogo from "../../assets/GitHubLogo.svg";
import ReactLogo from "../../assets/ReactLogo.svg";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;  
  height: 1024px;
`;

const ThankYouSection = styled.div`
  flex: 1 1 0;
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThankYouDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 433px;
  text-align: left;
`;

const ImageSection = styled.div`
  flex: 1 1 0;
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThankYouImg = styled(ThankImg)`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 560px;
  left: 67px;
  top: 320px;
`;

const LogoSection = styled.div`
  display:flex;  
  width: 433px;
  margin-top: 24px;
`;

const CodeForSFLogoImg = styled.img`
  display:flex;  
  width: 279px;
  height: 49px;
`;

const GitHubLogoImg = styled.img`
  display:flex;  
  width: 75px;
  height: 67px;
  margin-left: 24px;
  
`;

const ReactLogoImg = styled.img`
  display:flex;  
  width: 162px;
  height: 65px;
`;

const Header = styled.h1`
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

const P = styled.p`
  position: static;
  width: 433px;
  height: 161px;
  left: 0;
  top: 0;
  font-family: Source Sans Pro;
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

const ThankYou: React.FC = () => {
  return (
    <Container>
      <ImageSection>
        <ThankYouImg data-testid="ThankYouImg"></ThankYouImg>
      </ImageSection>

      <ThankYouSection>
        <ThankYouDescription>
          <Header>Thank you</Header>
          <P>This project couldn’t have happened without the generosity of the friends and family of Sanat Moningi. Thank you also to our sponsors, who provided us the tools to make this portal possible.</P>
        </ThankYouDescription>

        <LogoSection>
          <a href="https://www.codeforsanfrancisco.org/" data-testid="CodeForSFLink"><CodeForSFLogoImg data-testid="CodeForSFLogo" alt="Code for SF Logo" src={CodeForSFLogo} /></a>
          <a href="https://github.com/" data-testid="GitHubLink"><GitHubLogoImg data-testid="GitHubLogo" alt="Git Hub Logo" src={GitHubLogo} /></a>
        </LogoSection>

        <LogoSection>
          <a href="https://reactjs.org/" data-testid="ReactLink"><ReactLogoImg data-testid="ReactLogo" alt="React Logo" src={ReactLogo} /></a>
        </LogoSection>

      </ThankYouSection>
    </Container>

  );
};

export default ThankYou;
