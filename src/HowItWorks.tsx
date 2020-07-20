import React, { useState } from "react";
import styled from 'styled-components';
import  ImgLeft from "./assets/ImgLeft.svg";
import ImgMiddle from "./assets/ImgMiddle.svg";
import ImgRight from "./assets/ImgRight.svg";



const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 85px;
`;

const LeftSection = styled.div`
  width:272.26px;
  margin-right: 133.74px;
`;

const MiddleSection = styled.div`
width:259.5px;
margin-right: 146.5px;
`;

const RightSection = styled.div`
 width:236.94px;
`;

const HowItWorksHeader = styled.h1`
    font-family: Bree Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 65px;
    color: rgba(0, 0, 0, 0.87);
    mix-blend-mode: normal;
    margin-top: 200px;
`;

const HowItWorksH5 = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #000000;

    align-self: center;
    margin: 10px 10px;
    padding: 10px 0px;
    text-align: left;
`;

const HowItWorksP = styled.p`
    align-self: center;
    margin: 0px 10px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #000000;
    text-align: left;
`;

const LeftImg = styled.img`
    width: 272.26px;
    height: 253px;
    padding: 0px;
`;

const MiddleImg = styled.img`
    width: 272.26px;
    height: 253px;
    padding: 0px;
`;

const RightImg = styled.img`
    width: 252px;
    height: 253px;
    padding: 0px;
`;


const HowItWorks: React.FC = () => {
  
  return (

    <div className="HowItWorksContainer">
    

       
        
    <HowItWorksHeader>How it works</HowItWorksHeader>
        <Container>
       

        <LeftSection><LeftImg  alt="ImgLeft" className="ImgLeft" src={ImgLeft}  />
        <HowItWorksH5>We scrape the internet</HowItWorksH5>
        <HowItWorksP>We search across government websites, social media, and fundraising platforms to look for financial aid. We then help categorize them so it’s easy for you to find.</HowItWorksP>
        </LeftSection>

       <MiddleSection><MiddleImg alt="ImgMiddle" className="ImgMiddle" src={ImgMiddle} />
       <HowItWorksH5>Search our database</HowItWorksH5>
       <HowItWorksP>Here you can filter by grant qualifications. Once you find a loan or grant, you can apply through the original website.</HowItWorksP>
       </MiddleSection>
     


       <RightSection><RightImg alt="ImgRight" className="ImgRight" src={ImgRight} />
       <HowItWorksH5>Help us look</HowItWorksH5>
       <HowItWorksP>Found a fund that isn’t on our website? Help the community by letting us know, so we can add it to our database.</HowItWorksP>
       </RightSection>

   </Container>



    </div>

    
  );
};

export default HowItWorks;
