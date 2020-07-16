import React, { useState } from "react";
import styled from 'styled-components';
import { ReactComponent as About } from "./assets/About.svg";

import "./Aboutus.css";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
 
  height: 1024px;
`;

const AboutSection = styled.div`
  flex: 1 1 0;
  order:1;
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
  order:2;
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



const Aboutus: React.FC = () => {
 
  return (
      <div className="AboutUsContainer">
          
          <Container>

   
           <AboutSection>
           <AboutDescription>
           <h1 className="AboutHeader">About</h1>
           <p className="AboutP">We are a group of volunteers invested in working together to improve the City and County of San Francisco, often using technology to support our efforts. By connecting people, organizations, resources, tools, and networks to build for San Francisco, we will all thrive.
           </p>
           <p className="AboutP">The Data Science Working Group’s primary purpose is to efficiently assess, inspire, and tackle Code for San Francisco’s data science needs, as well as to help the City and other brigades with their data science needs whenever appropriate.</p>
  
           </AboutDescription>

       
           </AboutSection>

           <ImageSection><AboutImg /></ImageSection>
           </Container>

      </div>

    
  );
};

export default Aboutus;
