import React from "react";
import styled from "styled-components";
import {Result} from "../../types";
import Card from "@material-ui/core/Card";
import {
  formatAwardAmount,
  formatDate,
  formatInterestRate,
  formatReliefType,
} from "./formatHelpers";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const StyledCard = styled(Card)`
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

const SupportTypeContainer = styled.div`
  display: flex;
  position: absolute;
  width: 80%;
  left: 16px;
  top: 15px;
`;

const SupportTypeItem = styled(Typography).attrs({variant: 'overline' })`
  position: static;
`;

const StyledAwardAmount = styled(Typography).attrs({variant: 'h5' })`
  margin: 0;
  padding: 0;
  text-align: left;
  position: absolute;
  width: 90%;
  left: 16px;
  top: 38px;
`;

const StyledName = styled(Typography).attrs({variant: 'body2' })`
  text-align: left;
  position: absolute;
  width: 80%;
  left: 16px;
  top: 68px;
  color: rgba(0, 0, 0, 0.6);
`;

const StyledReliefType = styled(Typography).attrs({variant: 'body2' })`
  text-align: left;
  position: absolute;
  left: 16px;
  top: 100px;
  color: rgba(0, 0, 0, 0.38);
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 12px;
  width: 95%;
  left: 12px;
`;

const Tags = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px
`;

const Tag = styled(Typography).attrs({variant: 'body2' })`
  background: linear-gradient(0deg, #fece4b, #fece4b);
  border-radius: 16px;
  padding-left: 12px;
  padding-right: 12px;
  color: rgba(0, 0, 0, 0.87);
`;

const onApply = (url: string) => {
  window.open(url, "_blank");
};

const ResultCard: React.FC<Result> = ({
  supportType,
  interestRate,
  dateAdded,
  maxAwardAmount,
  name,
  reliefType,
  blackOwned,
  lgbtq,
  websiteUrl,
}) => {
  return (
    <StyledCard>
      <SupportTypeContainer>
        <SupportTypeItem>
          {`${supportType} • ${formatInterestRate(
            interestRate,
            supportType
          )} • ${formatDate(dateAdded)}`}
        </SupportTypeItem>
      </SupportTypeContainer>
      <StyledAwardAmount>{formatAwardAmount(maxAwardAmount)}</StyledAwardAmount>
      <StyledName>{name}</StyledName>
      <StyledReliefType>{formatReliefType(reliefType)}</StyledReliefType>
      <CardBottom>
        {websiteUrl !== "None" && (
          <Button color="secondary" onClick={() => onApply(websiteUrl)}>
            Apply
          </Button>
        )}

        <Tags>
          {blackOwned && <Tag>Black-owned</Tag>}
          {lgbtq && <Tag>LGBTQ</Tag>}
        </Tags>
      </CardBottom>
    </StyledCard>
  );
};

export default ResultCard;
