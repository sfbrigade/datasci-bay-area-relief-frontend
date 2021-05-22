import React, {useState} from "react";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import {AddReliefBody, County, OrgType, ReliefType} from "../../types";
import Button from "@material-ui/core/Button";
import {Paper, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {colors} from "../../theme";
import {useFormik} from "formik";
import * as yup from "yup";
import {addResult} from "../../api/axiosApi";
import {AxiosResponse} from "axios";

const StyledPaper = styled(Paper)`
  elevation: higher;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 14px;
  padding-left: 30px;
  padding-right: 30px;
  border: 0;
`;

const Description = styled.div`
  width: 400px;
  z-index: 10;
  margin-bottom: 27px;
`;

const Grouping = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const StyledSelect = styled(Select)`
  margin-bottom: 1em;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
`;

const StyledTextArea = styled(TextareaAutosize)`
  margin-bottom: 1em;
`;

const AddResourceButton = styled(Button)`
  && {
    width: auto;
    height: 36px;
    border-radius: 200px;
    margin-top: 1em;
    margin-bottom: 2em;
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
`;

// const history = useHistory();
//
// const onButtonPress = () => {
//   history.push({
//     pathname: "",
//     state: {
//     },
//   });
// };
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup.string().matches(phoneRegExp, "Enter a valid phone number"),
  url: yup.string()
    .url("Enter a valid url")
    .required("Url is required"),
  comments: yup.string(),
});

const sleep = (callback: ()=>void, ms: number) => {
  return setTimeout(callback, ms);
}

export const AddResourceForm = () => {
  const [addResourceButtonText, setAddResourceButtonText] = useState("Add Resource");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      county: "",
      comments: "",
      url: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log({values});
      const resource: AddReliefBody = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        url: values.url,
        county: values.county,
        comments: values.comments
      };
      console.log({resource});
      const response: AxiosResponse = await addResult(resource);
      console.log({response});
      if (response.status === 202) {
        setAddResourceButtonText("Submitted!");

        sleep(()=>{
          formik.resetForm();
          setAddResourceButtonText("Add Resource");
        }, 2000);

      } else if (response.status === 400) {
        setAddResourceButtonText("Correct and Try Again");
      } else {
        setAddResourceButtonText("Try Again Later");
      }
    }
  });

  const validateFirstName = (value: string) => {
    let error: string;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <StyledPaper>
      <Description>
        <Typography variant="body1">
          Add Organization with resources for small businesses.
        </Typography>
      </Description>

      <Grouping>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledTextField
              id="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <StyledTextField
              id="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <StyledTextField
              id="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <StyledTextField
              id="phoneNumber"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
            <StyledTextField
              id="url"
              label="Url"
              value={formik.values.url}
              onChange={formik.handleChange}
              error={formik.touched.url && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
            <AddResourceButton
              variant="contained"
              color="primary"
              disabled={(addResourceButtonText === "Submitted!" || addResourceButtonText === "Try Again Later")}
              type="submit"
            >
              {addResourceButtonText}
            </AddResourceButton>
          </StyledForm>
      </Grouping>
    </StyledPaper>
  );
};

export default AddResourceForm;
