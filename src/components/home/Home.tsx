import React, {useEffect, useRef} from "react";
import {
  PageContainer,
  SectionContainer,
  ImageSection,
  StyledLandingPageSky,
  StyledStoreFront,
  SearchSection,
} from "./Home.styles";
import {RouteComponentProps} from "react-router-dom";
import Storefront from "../../assets/Storefront.png";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ThankYou from "./ThankYou";
import {SearchForm} from "./SearchForm";
import Typography from "@mui/material/Typography";
import { LocationState } from "../../types";

const Home: React.FC<RouteComponentProps> = ({location}) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const customLocationState = location.state as LocationState;
  useEffect(() => {
    if (customLocationState?.toAbout === true){
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (customLocationState?.toHome === true) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <PageContainer>
      <SectionContainer>
        <ImageSection>
          <StyledLandingPageSky title="Landing page sky" />
          <StyledStoreFront src={Storefront} alt="Storefront" />
        </ImageSection>
        <SearchSection>
          <Typography variant="h3">Find Loans & Grants</Typography>
          <SearchForm />
        </SearchSection>
      </SectionContainer>
      <SectionContainer>
        <HowItWorks />
      </SectionContainer>
      <SectionContainer ref={aboutRef} style={{scrollMarginTop: "-98px"}}>
        <AboutUs />
      </SectionContainer>
      <SectionContainer>
        <ThankYou />
      </SectionContainer>
    </PageContainer>
  );
};

export default Home;
