import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import DonateForm from "./DonateForm";
import {AddResourceForm} from "../addResources/AddResourceForm";


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

const TopSectionBody = styled(Typography).attrs({variant: 'body1' })`
  color: rgba(0, 0, 0, 0.8);
  margin: 0px;
  padding: 0px;
`;

const Section = styled.div`
  width: 714px;
  display: flex;
  text-align: center;
  margin-top: 44px;
`;

const SectionHeader = styled(Typography).attrs({variant: 'h4'})`
  display: flex;
  flex: 1 1 0;
  margin: 0px;
  width: 38%;
  text-align: left;
`;

const DonationList = styled.ul`
  width: 62%;
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
`;

const ListItem = styled.li`
  padding: 0px;
  margin: 0px;
  color: #ef5350;
`;


const Donate: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Typography variant="h3">Donate</Typography>
        <br />
      </TopSection>
      <DonateForm />
    </Container>
  );
};

export default Donate;
