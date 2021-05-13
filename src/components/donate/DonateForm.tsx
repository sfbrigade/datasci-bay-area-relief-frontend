import React, {useState} from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import {County, OrgList, PaymentMethods} from "../../types";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {colors} from "../../theme";

const DonateFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  border: 0;
`;

const DonateDescription = styled.div`
  width: 400px;
  z-index: 10;
  margin-bottom: 27px;
`;

const DonateFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
`;

const StyledSelect = styled(Select)`
  margin-bottom: 1em;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1em;
`;

const DonateButton = styled(Button)`
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

export const DonateForm = () => {
  const [orgList, setOrgList] = useState<OrgList>();
  const [county, setCounty] = useState<County>();

  return (
    <DonateFormContainer>
      <DonateDescription>
        <Typography variant="body1">
          Donate to a non-profit dedicated to helping small
          businesses.
        </Typography>
      </DonateDescription>

      <DonateFormFields>
        <FormControl variant="outlined">
          <StyledTextField
            id="FirstName"
            label="First Name"
          />
          <StyledTextField
            id="LastName"
            label="Last Name"
          />
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextField
            id="Email"
            label="Email"
          />
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextField
            id="PhoneNumber"
            label="Phone Number"
          />
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextField
            id="Amount"
            label="$0.00"
          />
        </FormControl>
        <FormControl>
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup aria-label="paymentMethod" name="paymentMethod" value={""}>
            <FormControlLabel value={PaymentMethods.Bitcoin} control={<Radio />} label={PaymentMethods.Bitcoin} />
            <FormControlLabel value={PaymentMethods.CashApp} control={<Radio />} label={PaymentMethods.CashApp} />
            <FormControlLabel value={PaymentMethods.Venmo} control={<Radio />} label={PaymentMethods.Venmo} />
            <FormControlLabel value={PaymentMethods.PayPal} control={<Radio />} label={PaymentMethods.PayPal} />
            <FormControlLabel value={PaymentMethods.Check} control={<Radio />} label={PaymentMethods.Check} />
            <FormControlLabel value={PaymentMethods.Other} control={<Radio />} label={PaymentMethods.Other} />
          </RadioGroup>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="org-select">I want to donate to..</InputLabel>
          <StyledSelect
            native
            value={orgList}
            onChange={(event) => setOrgList(event.target.value as OrgList)}
            label="orgList"
            inputProps={{
              name: "org",
              id: "org-select",
            }}
          >
            <option value="" />
            <option value={OrgList.BAOBOB}>{OrgList.BAOBOB}</option>
            <option value={OrgList.BLM}>{OrgList.BLM}</option>
            <option value={OrgList.BerkleyAid}>{OrgList.BerkleyAid}</option>
            <option value={OrgList.BerkleyFund}>{OrgList.BerkleyFund}</option>
            <option value={OrgList.BlackOwnedFund}>{OrgList.BlackOwnedFund}</option>
            <option value={OrgList.BlackRestaurants}>{OrgList.BlackRestaurants}</option>
            <option value={OrgList.COVIDFund}>{OrgList.COVIDFund}</option>
            <option value={OrgList.ChamberOfCommerce}>{OrgList.ChamberOfCommerce}</option>
            <option value={OrgList.ChinaTowns}>{OrgList.ChinaTowns}</option>
            <option value={OrgList.JamesBeard}>{OrgList.JamesBeard}</option>
            <option value={OrgList.JamesBeardWeb}>{OrgList.JamesBeardWeb}</option>
            <option value={OrgList.LocalGoFundMe}>{OrgList.LocalGoFundMe}</option>
            <option value={OrgList.MEDA}>{OrgList.MEDA}</option>
            <option value={OrgList.NorCalFund}>{OrgList.NorCalFund}</option>
            <option value={OrgList.OneFairWage}>{OrgList.OneFairWage}</option>
            <option value={OrgList.QueerWay}>{OrgList.QueerWay}</option>
            <option value={OrgList.RedWoodCity}>{OrgList.RedWoodCity}</option>
            <option value={OrgList.SFGov}>{OrgList.SFGov}</option>
            <option value={OrgList.UCBerkleyLaw}>{OrgList.UCBerkleyLaw}</option>
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
      </DonateFormFields>
      <DonateButton
        variant="contained"
        color="primary"
        // onClick={goToResults}
        // disabled={!orgType || !county}
      >
        Donate
      </DonateButton>
    </DonateFormContainer>
  );
};

export default DonateForm;
