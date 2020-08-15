import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as CoolIllustration} from "../../assets/CoolIllustration.svg";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import search from "../../api";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ThankYou from "./ThankYou";
import {BusinessType, County} from "../../types";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImageSection = styled.div`
  flex: 1 1 0;
`;

const SearchSection = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
`;

const PlaceholderIllustration = styled(CoolIllustration)`
  position: absolute;
  width: 823px;
  height: 823px;
  left: -201px;
  top: 128px;
`;

const Home: React.FC = () => {
  const [businessType, setBusinessType] = useState<BusinessType | "">("");
  const [county, setCounty] = useState<County | "">("");
  const history = useHistory();

  const goToResults = () => {
    if (businessType !== "" && county !== "") {
      search({businessType, county});
      history.push("/results");
    }
  };

  return (
    <div>
      <Container>
        <ImageSection>
          <PlaceholderIllustration />
        </ImageSection>
        <SearchSection>
          <h1>Find Loans & Grants</h1>
          <p>Search our database for Bay Area loans</p>

          <SearchFormFields>
            <FormControl variant="outlined">
              <InputLabel htmlFor="business-type-select">I am a...</InputLabel>
              <Select
                native
                value={businessType}
                onChange={(event) =>
                  setBusinessType(event.target.value as BusinessType)
                }
                inputProps={{
                  name: "business-type",
                  id: "business-type-select",
                }}
              >
                <option aria-label="None" value="" />
                <option value={BusinessType.SmallBusiness}>
                  Small business
                </option>
                <option value={BusinessType.NonProfit}>Non-profit</option>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="county-select">County</InputLabel>
              <Select
                native
                value={county}
                onChange={(event) => setCounty(event.target.value as County)}
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
              </Select>
            </FormControl>
          </SearchFormFields>

          <Button variant="contained" onClick={goToResults}>
            Search
          </Button>
        </SearchSection>
      </Container>
      <Container>
        <HowItWorks />
      </Container>
      <Container>
        <AboutUs />
      </Container>
      <Container>
        <ThankYou />
      </Container>
    </div>
  );
};

export default Home;
