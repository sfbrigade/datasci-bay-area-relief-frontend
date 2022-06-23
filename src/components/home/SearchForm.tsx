import styled from "styled-components";
import Select from "@mui/material/Select";
import {County, OrgType} from "../../types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import {getFilterNameFromGroupAndTargetName} from "../results/filterHelpers";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {colors} from "../../theme";

const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  border: 0;
`;

const SearchDescription = styled.div`
  max-width: 65%;
  z-index: 10;
  margin-bottom: 27px;
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
    border-radius: 200px;

    :disabled {
      background-color: ${colors.primaryRed};
      color: black;
      opacity: 0.5;
    }
  }
`;
const DonateButton = styled(Button)`
  && {
    margin-top: 13px;
    padding: 13px;
    border-radius: 4px;
  }
`;

export const SearchForm = () => {
  const [orgType, setOrgType] = useState<OrgType>(OrgType.Any);
  const [county, setCounty] = useState<County>(County.Any);

  const navigate = useNavigate();

  const goToResults = () => {
    let path = "/results";
    if (orgType !== "any") {
      const orgTypeParam = getFilterNameFromGroupAndTargetName(
        "orgType",
        orgType
      );
      //append orgType=blah
      path = `${path}?orgType=${orgTypeParam}&`;
    }
    //check if county is NOT any, append county
    const countyParam = getFilterNameFromGroupAndTargetName("county", county);

    if (countyParam && countyParam !== "any") {
      if (orgType === "any") {
        path = `${path}?`;
      }
      path = `${path}county=${countyParam}`;
    }
    //if (path[path.length -1] === ? or === &, slice it out
    if (path[path.length - 1] === "?" || path[path.length - 1] === "&") {
      path = path.slice(0, path.length - 1);
    }
    navigate(path);
  };

  const goToDonate = () => {
    navigate("/donate");
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
        <FormControl>
          <InputLabel htmlFor="org-type-select">I am a...</InputLabel>
          <StyledSelect
            native
            value={orgType}
            onChange={(event) => setOrgType(event.target.value as OrgType)}
            label="I am a..."
            inputProps={{
              name: "org-type",
              id: "org-type-select",
              "data-testid": "org-type-select",
            }}
          >
            <option value={OrgType.Any}>Any</option>
            <option value={OrgType.SmallBusiness}>Small business</option>
            <option value={OrgType.NonProfit}>Non-profit</option>
          </StyledSelect>
        </FormControl>
        <FormControl>
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
