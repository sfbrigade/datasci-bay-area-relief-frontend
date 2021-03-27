import React, {ReactElement, useState} from "react";
import styled from "styled-components";
import {Typography} from "@material-ui/core";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  border: 0;
`;

const FormDescription = styled.div`
  width: 400px;
  z-index: 10;
  margin-bottom: 27px;
`;

export const AddResourceForm: React.FC = (): ReactElement => {
  return (
    <FormContainer>
      <FormDescription>
        <Typography variant="body1">
          Tip us off with a resource to save in the SF Bay Relief database.
        </Typography>
      </FormDescription>
    </FormContainer>
  );
};
