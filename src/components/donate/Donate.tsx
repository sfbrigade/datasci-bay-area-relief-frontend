import React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  min-height: 100vh;
`;

const HeaderSection = styled.div`
  text-align: center;
  width: 708px;
  padding-top: 120px;
`;

const P = styled(Typography).attrs({variant: 'body1' })`
  color: rgba(0, 0, 0, 0.8);
  margin: 0px;
  padding: 0px;
`;

const Section = styled.div`
  width: 714px;
  display: flex;
  text-align: center;
  margin-top: 44px;
`;

const SectionHeader = styled(Typography).attrs({variant: 'h4'})`
  display: flex;
  flex: 1 1 0;
  margin: 0px;
  width: 38%;
  text-align: left;
`;

const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  width: 62%;
`;

const DonateList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
`;

const Link = styled.li`
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.15px;
  color: #ef5350;
`;

const A = styled.a`
  text-decoration: none;
  color: #ef5350;
`;

const Donate: React.FC = () => {
  return (
    <Container>
      <HeaderSection>
        <Typography variant='h3'>Donate</Typography>
        <br />
        <P> 
          Not a small business, but want to help? We’ve collected a list of
          funds you can donate to.
        </P>
      </HeaderSection>

      <Section>
        <SectionHeader>General</SectionHeader>
        <SectionLinks>
          <DonateList>
            <Link>
              <A href="https://www.gofundme.com/">
                GoFundMe&apos;s in the Bay area
              </A>
            </Link>
            <Link>
              <A href="https://www.redwoodcity.org/home">
                Redwood City Small Business Relief Fund{" "}
              </A>
            </Link>
            <Link>
              <A href="#">UC Berkeley Law Pro Bono</A>
            </Link>
            <Link>
              <A href="#">COVID-19 Regional Response Fund</A>
            </Link>
            <Link>
              <A href="#">Norcal Small Business Relief Fund</A>
            </Link>
            <Link>
              <A href="#">One Fair Wage </A>
            </Link>
            <Link>
              <A href="#">Berkeley Relief Fund</A>
            </Link>
            <Link>
              <A href="#">Berkeley Mutual Aid</A>
            </Link>
            <Link>
              <A href="#">Save Our China Towns </A>
            </Link>
            <Link>
              <A href="#">MEDA (Mission Economic Development Agency)</A>
            </Link>
          </DonateList>
        </SectionLinks>
      </Section>

      <Section>
        <SectionHeader>
          Black Lives
          <br /> Matter
        </SectionHeader>
        <SectionLinks>
          <DonateList>
            <Link>
              <A href="#">YouTube Ad Proceeds to #BLM</A>
            </Link>
            <Link>
              <A href="#">
                Bay Area Organization of Black Owned Businesses (BAOBOB)
              </A>
            </Link>
            <Link>
              <A href="#">Black Owned Restaurants</A>
            </Link>
            <Link>
              <A href="#">Black Owned Business ReliefFund</A>
            </Link>
          </DonateList>
        </SectionLinks>
      </Section>

      <Section>
        <SectionHeader>LGBT</SectionHeader>
        <SectionLinks>
          <DonateList>
            <Link>
              <A href="#">Silicon Valley Central Chamber of Commerce</A>
            </Link>
            <Link>
              <A href="#">SF Gov</A>
            </Link>
            <Link>
              <A href="#">Queer: Way Out</A>
            </Link>
            <Link>
              <A href="#">James Beard Foundation</A>
            </Link>
            <Link>
              <A href="#">James Beard Webinars</A>
            </Link>
          </DonateList>
        </SectionLinks>
      </Section>
    </Container>
  );
};

export default Donate;
