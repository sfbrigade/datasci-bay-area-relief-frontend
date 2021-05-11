import React, {useState} from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import {County, OrgType, ReliefType} from "../../types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {colors} from "../../theme";

const AddResourceFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  border: 0;
`;

const AddResourceDescription = styled.div`
  width: 400px;
  z-index: 10;
  margin-bottom: 27px;
`;

const AddResourceFormFields = styled.div`
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

const StyledTextArea = styled(TextareaAutosize)`
  margin-bottom: 1em;
`;

const AddResourceButton = styled(Button)`
  && {
    width: auto;
    height: 36px;
    border-radius: 200px;

    :disabled {
      background-color: ${colors.primaryRed};
      color: black;
      opacity: 0.5;
    }
  }
`;

const SpacerDiv = styled.div`
  height: 1em;
  width: auto;
`

// const history = useHistory();
//
// const onButtonPress = () => {
//   history.push({
//     pathname: "",
//     state: {
//     },
//   });
// };

export const AddResourceForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [county, setCounty] = useState<County>(County.Any);
  const [orgType, setOrgType] = useState<OrgType>();
  const [reliefType, setReliefType] = useState<ReliefType>();
  const [comments, setComments] = useState();

  // @ts-ignore
  // @ts-ignore
  return (
    <AddResourceFormContainer>
      <AddResourceDescription>
        <Typography variant="body1">
          Add Organization with resources for <small></small> businesses.
        </Typography>
      </AddResourceDescription>

      <AddResourceFormFields>
        <FormControl variant="outlined">
          <StyledTextField
            id="FirstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            label="First Name"
            inputProps={{
              name: "firstName",
              id: "firstName-select",
            }}
          />
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextField
            id="LastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            label="Last Name"
            inputProps={{
              name: "lastName",
              id: "lastname-select",
            }}
          />
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextField
            id="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            inputProps={{
              name: "email",
              id: "email-select",
            }}
          />
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextField
            id="PhoneNumber"
            label="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            inputProps={{
              name: "phoneNumber",
              id: "phoneNumber-select",
            }}
          />
        </FormControl>
        <SpacerDiv />
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
            <option value={County.ContraCosta}>Contra Costa</option>
            <option value={County.SantaClara}>Santa Clara</option>
            <option value={County.Any}>Any</option>
          </StyledSelect>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="OrgType">Org Type</InputLabel>
          <StyledSelect
            native
            value={orgType}
            onChange={(event) => setOrgType(event.target.value as OrgType)}
            label="orgType"
            inputProps={{
              name: "orgType",
              id: "orgType-select",
            }}
          >
            <option aria-label="None" value="" />
            <option value={OrgType.SmallBusiness}>Small Business</option>
            <option value={OrgType.NonProfit}>Non-Profit</option>
          </StyledSelect>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="ReliefType">Relief Type</InputLabel>
          <StyledSelect
            native
            value={reliefType}
            onChange={(event) => setReliefType(event.target.value as ReliefType)}
            label="reliefType"
            inputProps={{
              name: "reliefType",
              id: "reliefType-select",
            }}
          >
            <option aria-label="None" value="" />
            <option value={ReliefType.COVID}>Small Business</option>
            <option value={ReliefType.ProtestDamage}>Protest Damage</option>
          </StyledSelect>
        </FormControl>
        <FormControl variant="outlined">
          <StyledTextArea
            id="Comments"
            placeholder="Comments"
            value={comments}
            onChange={(event: any) => setComments(event.target.value)}
            // inputProps={{
            //   name: "comments",
            //   id: "comments-select",
            // }}
            />
        </FormControl>
      </AddResourceFormFields>
      <AddResourceButton
        variant="contained"
        color="primary"
        onClick={() => console.log('hello')}
      >
        Add Resource
      </AddResourceButton>
    </AddResourceFormContainer>
  );
};

export default AddResourceForm;
