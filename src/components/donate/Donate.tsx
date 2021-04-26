import React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  min-height: 100vh;
`;

const TopSection = styled.div`
  text-align: center;
  width: 708px;
  padding-top: 120px;
`;

const TopSectionBody = styled(Typography).attrs({variant: 'body1' })`
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

const DonationList = styled.ul`
  width: 62%;
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
`;

const ListItem = styled.li`
  padding: 0px;
  margin: 0px;
  color: #ef5350;
`;


const Donate: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Typography variant="h3">Donate</Typography>
        <br />
        <TopSectionBody> 
          Not a small business, but want to help? We’ve collected a list of
          funds you can donate to.
        </TopSectionBody>
      </TopSection>

      <Section>
        <SectionHeader>General</SectionHeader>
        <DonationList>
          <ListItem>
            <Link variant="h6" href="https://www.gofundme.com/">
              GoFundMe&apos;s in the Bay area
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="https://www.redwoodcity.org/home">
              Redwood City Small Business Relief Fund{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">UC Berkeley Law Pro Bono</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">COVID-19 Regional Response Fund</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Norcal Small Business Relief Fund</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">One Fair Wage </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Berkeley Relief Fund</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Berkeley Mutual Aid</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Save Our China Towns </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">MEDA (Mission Economic Development Agency)</Link>
          </ListItem>
        </DonationList>
      </Section>

      <Section>
        <SectionHeader>
          Black Lives
          <br /> Matter
        </SectionHeader>
        <DonationList>
          <ListItem>
            <Link variant="h6" href="#">YouTube Ad Proceeds to #BLM</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">
              Bay Area Organization of Black Owned Businesses (BAOBOB)
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Black Owned Restaurants</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Black Owned Business ReliefFund</Link>
          </ListItem>
        </DonationList>
      </Section>

      <Section>
        <SectionHeader>LGBT</SectionHeader>
        <DonationList>
          <ListItem>
            <Link variant="h6" href="#">Silicon Valley Central Chamber of Commerce</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">SF Gov</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">Queer: Way Out</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">James Beard Foundation</Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#">James Beard Webinars</Link>
          </ListItem>
        </DonationList>
      </Section>
    </Container>
  );
};

export default Donate;