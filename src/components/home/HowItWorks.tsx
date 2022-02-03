import React from "react";
import styled from "styled-components";
import ScrapeWeb from "../../assets/ScrapeWeb.png";
import Searching from "../../assets/Searching.png";
import PaperAirplanes from "../../assets/PaperAirplanes.png";

import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  width: 100%;
  // padding: 1vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 6vw;

  @media(min-width: 30rem){
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7vw;
  padding: 1vw;

  @media(min-width: 30rem){
    width: 23.9vw;
    height: 40vw;
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.div`
  margin-bottom: 2.2vw;
`;

const LeftImg = styled.img`
  width: 60%;
  margin-bottom: 6vw;

  @media(min-width: 30rem){
    width: 25vw;
    height: 23.2vw;
    margin-bottom: 2.2vw;
  }
`;

const MiddleImg = styled.img`
  width: 60%;
  margin-bottom: 6vw;

  @media(min-width: 30rem){
    width: 23.8vw;
    height: 22vw;
    padding: 0px;
    margin-bottom: 2.2vw;
  }
`;

const RightImg = styled.img`
  width: 60%;
  margin-bottom: 6vw;

  @media(min-width: 30rem){
    width: 21vw;
    height: 21.9vw;
    padding: 0px;
    margin-bottom: 2.2vw;
} 
`;

const HowItWorks: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3">How it works</Typography>
      <SectionContainer>
        <Section>
          <LeftImg alt="We scrape the internet" src={ScrapeWeb} />
          <SectionHeading>
            <Typography variant="h5">We scrape the internet</Typography>
          </SectionHeading>
          <Typography variant="body1">
            We search across government websites, social media, and fundraising
            platforms to look for financial aid. We then help categorize them so
            it’s easy for you to find.
          </Typography>
        </Section>

        <Section>
          <MiddleImg alt="Search our database" src={Searching} />
          <SectionHeading>
            <Typography variant="h5">Search our database</Typography>
          </SectionHeading>
          <Typography variant="body1">
            Here you can filter by grant qualifications. Once you find a loan or
            grant, you can apply through the original website.
          </Typography>
        </Section>

        <Section>
          <RightImg alt="Help us look" src={PaperAirplanes} />
          <SectionHeading>
            <Typography variant="h5">Help us look</Typography>
          </SectionHeading>
          <Typography variant="body1">
            Found a fund that isn’t on our website? Help the community by
            letting us know, so we can add it to our database.
          </Typography>
        </Section>
      </SectionContainer>
    </Container>
  );
};

export default HowItWorks;
