import React, { useState } from "react";
import styled from 'styled-components';
import ImgLeft from "./assets/ImgLeft.svg";
import ImgMiddle from "./assets/ImgMiddle.svg";
import ImgRight from "./assets/ImgRight.svg";

import "./HowItWorks.css";


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


const HowItWorks: React.FC = () => {
  
  return (

    <div className="HowItWorksContainer">
    

       
        <h1 className="HowitWorksHeader">How it works</h1>
        
        <Container>

        <LeftSection><img className="ImgLeft" src={ImgLeft}  />
        <h5 className="HowitWorksH5">We scrape the internet</h5>
        <p className="HowitWorksP">We search across government websites, social media, and fundraising platforms to look for financial aid. We then help categorize them so it’s easy for you to find.</p>
        </LeftSection>

       <MiddleSection><img className="ImgMiddle" src={ImgMiddle} />
       <h5 className="HowitWorksH5">Search our database</h5>
       <p className="HowitWorksP">Here you can filter by grant qualifications. Once you find a loan or grant, you can apply through the original website.</p>
       </MiddleSection>
     


       <RightSection><img className="ImgRight" src={ImgRight} />
       <h5 className="HowitWorksH5">Help us look</h5>
       <p className="HowitWorksP">Found a fund that isn’t on our website? Help the community by letting us know, so we can add it to our database.</p>
       </RightSection>

   </Container>



    </div>

    
  );
};

export default HowItWorks;
