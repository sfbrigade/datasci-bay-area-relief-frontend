import React from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import {AddResourceForm} from "./AddResourceForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  min-height: 100vh;
`;

const TopSection = styled.div`
  text-align: center;
  width: 708px;
  padding-top: 120px;
`;

export const AddPage: React.FC = () => {
 return (
   <Container>
     <TopSection>
       <Typography variant="h3">Tell Us About A Resource</Typography>
       <br />
     </TopSection>
     <AddResourceForm />
   </Container>
 );
};
