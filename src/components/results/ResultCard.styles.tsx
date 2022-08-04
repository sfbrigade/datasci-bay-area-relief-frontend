import styled from "styled-components";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { colors } from "../../theme";

export const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  background: #ffffff;
  border-radius: 4px;
  width: 300px;
  height: 172px;
  margin: 1.5em;

  @media (min-width: 752px) {
    width: 500px;
  }
`;

export const SupportTypeContainer = styled.div`
  display: flex;
  position: absolute;
  width: 80%;
  left: 16px;
  top: 15px;
`;

export const SupportTypeItem = styled(Typography).attrs({variant: 'overline' })`
  position: static;
`;

export const StyledAwardAmount = styled(Typography).attrs({variant: 'h5' })`
  margin: 0;
  padding: 0;
  text-align: left;
  position: absolute;
  width: 90%;
  left: 16px;
  top: 38px;
`;

export const StyledName = styled(Typography).attrs({variant: 'body2' })`
  text-align: left;
  position: absolute;
  width: 80%;
  left: 16px;
  top: 68px;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledReliefType = styled(Typography).attrs({variant: 'body2' })`
  text-align: left;
  position: absolute;
  left: 16px;
  top: 62%;
  color: rgba(0, 0, 0, 0.38);
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 12px;
  width: 95%;
  left: 12px;
`;

export const Tags = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  flex-wrap: wrap;
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  @media (min-width: 752px) {
    width: 70%;
  }
`;

export const Tag = styled(Typography).attrs({variant: 'body2' })`
  background: linear-gradient(0deg, #fece4b, #fece4b);
  border-radius: 16px;
  padding-left: 12px;
  padding-right: 12px;
  color: ${colors.text};
`;

export const ExpiredTag = styled(Typography).attrs({variant: 'body2' })`
  background: ${colors.primaryRed};
  border-radius: 16px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 2px;
  white-space: nowrap; 
  color: ${colors.white};
`;
