import React from "react";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import {
  Container,
  DonationList,
  ListItem,
  Section,
  SectionHeader,
  TopSection,
  TopSectionBody,
} from "./Donate.styles";

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
        <br />
        <Typography
          variant="body2"
          style={{
            marginBottom: "8px",
          }}
        >
          <span>Please navigate through the donation instructions, </span>
          <span>select Code For San Francisco, </span>
          <br />
          <span>and under what inspired you include: &ldquo;SF Bay Relief&rdquo;.</span>
        </Typography>
        <iframe
          title="Donate"
          frameBorder="0"
          name="donorbox"
          scrolling="yes"
          seamless
          src="https://donorbox.org/embed/codeforamerica-brigades"
          style={{
            display: "inline-block",
            maxWidth: "426px",
            minWidth: "426px",
            maxHeight: "none !important",
            height: "660px",
            overflowY: "auto",
            width: "100%",
          }}
          data-donorbox-id="DonorBox-f1"
        />
      </TopSection>

      <Section>
        <SectionHeader>General</SectionHeader>
        <DonationList>
          <ListItem>
            <Link variant="h6" href="https://www.gofundme.com/" underline="hover">
              GoFundMe&apos;s in the Bay area
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="https://www.redwoodcity.org/home" underline="hover">
              Redwood City Small Business Relief Fund{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              UC Berkeley Law Pro Bono
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              COVID-19 Regional Response Fund
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Norcal Small Business Relief Fund
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              One Fair Wage{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Berkeley Relief Fund
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Berkeley Mutual Aid
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Save Our China Towns{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              MEDA (Mission Economic Development Agency)
            </Link>
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
            <Link variant="h6" href="#" underline="hover">
              YouTube Ad Proceeds to #BLM
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Bay Area Organization of Black Owned Businesses (BAOBOB)
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Black Owned Restaurants
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Black Owned Business ReliefFund
            </Link>
          </ListItem>
        </DonationList>
      </Section>

      <Section>
        <SectionHeader>LGBT</SectionHeader>
        <DonationList>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Silicon Valley Central Chamber of Commerce
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              SF Gov
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              Queer: Way Out
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              James Beard Foundation
            </Link>
          </ListItem>
          <ListItem>
            <Link variant="h6" href="#" underline="hover">
              James Beard Webinars
            </Link>
          </ListItem>
        </DonationList>
      </Section>
    </Container>
  );
};

export default Donate;
