import React from "react";
import styled from "styled-components";
import ScrapeWeb from "../../assets/ScrapeWeb.png";
import Searching from "../../assets/Searching.png";
import PaperAirplanes from "../../assets/PaperAirplanes.png";

import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  width: 100%;
  padding: 10% 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 85px;
`;

const Section = styled.div`
  width: 260px;
  height: 523px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-bottom: 24px;
`;

const LeftImg = styled.img`
  width: 272px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const MiddleImg = styled.img`
  width: 259.5px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const RightImg = styled.img`
  width: 237px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const HowItWorks: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3">How it works</Typography>
      <SectionContainer>
        <Section>
          <LeftImg alt="We scrape the internet" src={ScrapeWeb} />
          <Heading>
            <Typography variant="h5">We scrape the internet</Typography>
          </Heading>
          <Typography>
            We search across government websites, social media, and fundraising
            platforms to look for financial aid. We then help categorize them so
            it’s easy for you to find.
          </Typography>
        </Section>

        <Section>
          <MiddleImg alt="Search our database" src={Searching} />
          <Heading>
            <Typography variant="h5">Search our database</Typography>
          </Heading>
          <Typography>
            Here you can filter by grant qualifications. Once you find a loan or
            grant, you can apply through the original website.
          </Typography>
        </Section>

        <Section>
          <RightImg alt="Help us look" src={PaperAirplanes} />
          <Heading>
            <Typography variant="h5">Help us look</Typography>
          </Heading>
          <Typography>
            Found a fund that isn’t on our website? Help the community by
            letting us know, so we can add it to our database.
          </Typography>
        </Section>
      </SectionContainer>
    </Container>
  );
};

export default HowItWorks;
