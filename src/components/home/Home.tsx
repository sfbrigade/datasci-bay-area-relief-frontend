import React, {useEffect, useRef} from "react";
import {
  PageContainer,
  SectionContainer,
  ImageSection,
  StyledLandingPageSky,
  StyledStoreFront,
  SearchSection
 } from './Home.styles';
import {RouteComponentProps} from "react-router-dom";
import Storefront from "../../assets/Storefront.png";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ThankYou from "./ThankYou";
import {LocationState} from "../../types";
import {SearchForm} from "./SearchForm";
import Typography from "@material-ui/core/Typography";

const Home: React.FC<RouteComponentProps<{}, {}, LocationState>> = ({
  location,
}) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state && location.state.toAbout && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (location.state && location.state.toHome) {
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
