import React, {useEffect, useRef} from "react";
import {RouteComponentProps} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as LandingPageSky} from "../../assets/LandingPageSky.svg";
import Storefront from "../../assets/Storefront.png";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ThankYou from "./ThankYou";
import {LocationState} from "../../types";
import {SearchForm} from "./SearchForm";
import Typography from "@material-ui/core/Typography";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const ImageSection = styled.div`
  flex: 1 1 0;
`;

const StyledLandingPageSky = styled(LandingPageSky)`
  position: absolute;
  left: 0px;
`;

const StyledStoreFront = styled.img`
  position: absolute;
  width: 800px;
  height: 800px;
  left: 0px;
  top: 150px;
`;

const SearchSection = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

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
      <SectionContainer id="about" ref={aboutRef} style={{scrollMarginTop: "-98px"}}>
        <AboutUs />
      </SectionContainer>
      <SectionContainer>
        <ThankYou />
      </SectionContainer>
    </PageContainer>
  );
};

export default Home;
