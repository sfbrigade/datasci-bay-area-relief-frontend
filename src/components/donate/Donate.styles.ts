import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import {Box, Button} from "@material-ui/core";
import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  min-height: 100vh;
`;

export const TopSection = styled.div`
  text-align: center;
  width: 708px;
  padding-top: 120px;
`;

export const TopSectionBody = styled(Typography).attrs({variant: "body1"})`
  color: ${colors.text};
  margin: 0px;
  padding: 0px;
`;

export const Section = styled.div`
  width: 714px;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 44px;
`;

export const SectionHeader = styled(Typography).attrs({variant: "h4"})`
  display: flex;
  flex: 1 1 0;
  margin: 0px;
  width: 38%;
  text-align: left;
`;

export const DonationList = styled.ul`
  width: 62%;
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  padding: 0px;
  margin: 0px;
  color: #ef5350;
`;

export const DonateToUsButton = styled(Button).attrs({color: "primary"})`
  color: #ef5350;
  height: 4rem;
  width: 400px;
  &.MuiButton-root {
    font-size: 1.1rem;
  }
`;

export const DonateChunk = styled(Box).attrs({
  bgcolor: "lightgrey",
  borderColor: "#282c34",
  border: 1,
  borderRadius: 5
})`
  display: flex;
  width: fit-content;
  padding: 16px;
  margin-inline: auto;
  justify-content: center;
`;
