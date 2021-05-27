import styled from "styled-components";
import Select from "@material-ui/core/Select";
import {County, OrgType} from "../../types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import {getFilterNameFromGroupAndLabel} from "../results/filterHelpers";
import {useHistory} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {colors} from "../../theme";

const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  border: 0;
`;

const SearchDescription = styled.div`
  width: 400px;
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
  const [orgType, setOrgType] = useState<OrgType>();
  const [county, setCounty] = useState<County>();
  const history = useHistory();

  const goToResults = () => {
    let path = '/results';
    if (orgType) {
      path += `?orgType=${orgType}`;
    }
    if (county && county !== 'any') {
      if (path.indexOf('?') === -1) {
        path += `?county=${county}`;
      } else {
        path += `&county=${county}`;
      }
    }
    history.push(path)
    // history.push({
    //   pathname: path
      // state: {
      //   currentFilters: {
      //     orgType: [getFilterNameFromGroupAndLabel("orgType", orgType)],
      //     county: [getFilterNameFromGroupAndLabel("county", county)],
      //   },
      // },
    // });

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
