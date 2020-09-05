import React, {useEffect, useRef, useState} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as LandingPageSky} from "../../assets/LandingPageSky.svg";
import Storefront from "../../assets/Storefront.png";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import search from "../../api";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ThankYou from "./ThankYou";
import {County, LocationState, OrgType} from "../../types";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
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
  width: 800;
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
`;

const SearchHeading = styled.h1`
  margin-bottom: 0;
  z-index: 10;
  /* H3 / Source Sans Pro */

  font-family: Bree Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  /* identical to box height */

  /* Black — High Emphasis */

  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;

const SearchDescription = styled.p`
  width: 400px;
  z-index: 10;
  /* Body 1 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  text-align: center;
  letter-spacing: 0.5px;

  color: rgba(0, 0, 0, 0.8);
`;

const SearchFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
`;

const StyledSelect = styled(Select)`
  margin-bottom: 1em;
`;

const SearchButton = styled(Button)`
  && {
    width: 97px;
    height: 36px;
    background-color: #ef5350;
    opacity: 0.5;
    border-radius: 200px;
    margin-bottom: 1em;

    /* Button / Source Sans Pro */

    font-family: Source Sans Pro;
    font-style: normal;
    letter-spacing: 0.75px;
  }
`;

const Home: React.FC<RouteComponentProps<{}, {}, LocationState>> = ({
  location,
}) => {
  const [orgType, setOrgType] = useState<OrgType | "">("");
  const [county, setCounty] = useState<County | "">("");
  const history = useHistory();
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

  const goToResults = () => {
    if (orgType !== "" && county !== "") {
      search({businessType: orgType, county});
      history.push("/results");
    }
  };
  const goToDonate = () => {
    history.push("/donate");
  };

  return (
    <PageContainer>
      <SectionContainer>
        <ImageSection>
          <StyledLandingPageSky title="Landing page sky" />
          <StyledStoreFront src={Storefront} alt="Storefront" />
        </ImageSection>
        <SearchSection>
          <SearchHeading>Find Loans & Grants</SearchHeading>
          <SearchDescription>
            Search our database for Bay Area loans for your non-profit or small
            business.
          </SearchDescription>

          <SearchFormFields>
            <FormControl variant="outlined">
              <InputLabel htmlFor="org-type-select">I am a...</InputLabel>
              <StyledSelect
                native
                value={orgType}
                onChange={(event) => setOrgType(event.target.value as OrgType)}
                label="I am a..."
                inputProps={{
                  name: "org-type",
                  id: "org-type-select",
                }}
              >
                <option aria-label="None" value="" />
                <option value={OrgType.SmallBusiness}>Small business</option>
                <option value={OrgType.NonProfit}>Non-profit</option>
              </StyledSelect>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="county-select">County</InputLabel>
              <StyledSelect
                native
                value={county}
                onChange={(event) => setCounty(event.target.value as County)}
                label="County"
                inputProps={{
                  name: "county",
                  id: "county-select",
                }}
              >
                <option aria-label="None" value="" />
                <option value={County.SanFrancisco}>San Francisco</option>
                <option value={County.Alameda}>Alameda</option>
                <option value={County.SanMateo}>San Mateo</option>
                <option value={County.ContraCosta}>Conta Costa</option>
                <option value={County.SantaClara}>Santa Clara</option>
                <option value={County.Any}>Any</option>
              </StyledSelect>
            </FormControl>
          </SearchFormFields>
          <SearchButton onClick={goToResults}>Search</SearchButton>
          <Button color="secondary" onClick={goToDonate}>
            I want to donate
          </Button>
        </SearchSection>
      </SectionContainer>
      <SectionContainer>
        <HowItWorks />
      </SectionContainer>
      <SectionContainer id="about" ref={aboutRef}>
        <AboutUs />
      </SectionContainer>
      <SectionContainer>
        <ThankYou />
      </SectionContainer>
    </PageContainer>
  );
};

export default Home;
