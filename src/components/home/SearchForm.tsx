
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import {County, OrgType} from "../../types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {getFilterNameFromGroupAndTargetName} from "../results/filterHelpers";
import {useHistory} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {colors} from "../../theme";

const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.4vw;
`;

const SearchDescription = styled.div`
  z-index: 10;
  margin-bottom: 7vw;
  width: 90%;

  @media(min-width: 30rem){
    width: 33vw;
    margin-bottom: 1.5vw;
  }
`;

const SearchFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
 
  @media(min-width: 30rem){
    width: 28vw;
  }
`;

const StyledSelect = styled(Select)`
  margin-bottom: 1em;
`;

const SearchButton = styled(Button)`
  && {
    width: 20vw;
    height: 10.6vw;
    border-radius: 200px;
    font-size: 5vw;

    @media(min-width: 30rem){
      width: 8.9vw;
      height: 3.6vw;
      font-size: 1.3vw;
    }

    :disabled {
      background-color: ${colors.primaryRed};
      color: black;
      opacity: 0.5;
    }
  }
`;
const DonateButton = styled(Button)`
  && {
    margin-top: 2vw;
    padding: 2vw;
    border-radius: 0.4vw;
    font-size: 6vw;

    @media(min-width: 30rem){
      margin-top: 1.2vw;
      padding: 1.2vw;
      font-size: 1.3vw;
    }
  }
`;

export const SearchForm = () => {
  const [orgType, setOrgType] = useState<OrgType>(OrgType.Any);
  const [county, setCounty] = useState<County>(County.Any);

  const history = useHistory();

  const goToResults = () => {
    let path = "/results";
    if (orgType !== 'any') {
      const orgTypeParam = getFilterNameFromGroupAndTargetName("orgType", orgType);
      //append orgType=blah
      path = `${path}?orgType=${orgTypeParam}&`;
    }
    //check if county is NOT any, append county
    const countyParam = getFilterNameFromGroupAndTargetName("county", county);

    if(countyParam && countyParam !== 'any') {
      if(orgType === 'any') {
        path = `${path}?`;
      }
      path = `${path}county=${countyParam}`;
    }
    //if (path[path.length -1] === ? or === &, slice it out
    if(path[path.length-1] === "?" || path[path.length-1] ==="&") {
      path = path.slice(0, path.length-1);
    }
    history.push(path);
  };

  const goToDonate = () => {
    history.push("/donate");
  };

  return (
    <SearchFormContainer>
      <SearchDescription>
        <Typography variant="body1">
          Search our database for Bay Area loans for your non-profit or small
          business.
        </Typography>
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
              "data-testid": "org-type-select"
            }}
          >
            <option value={OrgType.Any}>Any</option>
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
            <option value={County.Any}>Any</option>
            <option value={County.SanFrancisco}>San Francisco</option>
            <option value={County.Alameda}>Alameda</option>
            <option value={County.SanMateo}>San Mateo</option>
            <option value={County.ContraCosta}>Conta Costa</option>
            <option value={County.SantaClara}>Santa Clara</option>
          </StyledSelect>
        </FormControl>
      </SearchFormFields>
      <SearchButton
        variant="contained"
        color="primary"
        onClick={goToResults}
        disabled={!orgType || !county}
      >
        Search
      </SearchButton>
      <DonateButton color="primary" onClick={goToDonate}>
        I want to donate
      </DonateButton>
    </SearchFormContainer>
  );
};
