import React from "react";
import {ReactComponent as YellowHalfCircle} from "../../assets/YellowHalfCircle.svg";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import ImageAvatars from "./ImageAvatars";

const Container = styled.div`
  position: relative;

  @media(min-width: 30rem){
    display: flex;
    padding: 10vw 0;
  }
`;

const StyledYellowHalfCircle = styled(YellowHalfCircle)`
 display: none;

  @media(min-width: 30rem){
    position: absolute;
    left: 0px;
    top: 15vw;
    width: 10vw;
    z-index: 0;

  }
`;

const AboutDescription = styled.div`
  z-index: 1;
  padding: 0 4vw;

  @media(min-width: 30rem){ 
    width: 40%;
    text-align: left;
    margin-left: 12%;
  }
}
`;

const Team = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7vw;
  
  @media(min-width: 30rem){
    width: 40%;   
    margin-top: 0;  
  }
`


const AboutUs: React.FC = () => {
  return (
    <Container>
      <StyledYellowHalfCircle title="Yellow half circle"/>  
      <AboutDescription>
        <Typography variant="h3">About</Typography>
        <br />
        <Typography variant="body1">
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
        
      </AboutDescription>
        <Team>
          <ImageAvatars />
        </Team>
      

    </Container>
  );
};

export default AboutUs;
