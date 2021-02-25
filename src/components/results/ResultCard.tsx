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
  background: #ffffff;
  border-radius: 4px;
  width: 500px;
  height: 172px;
  margin: 1.5em;
`;

const SupportTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 196px;
  height: 16px;
  left: 16px;
  top: 15px;
  margin: 0;
  padding: 0;
`;

const SupportTypeItem = styled(Typography).attrs({variant: 'overline' })`
  position: static;
  height: 16px;
  right: 162px;
  top: 0;
  flex: none;
  align-self: center;
  margin: 4px 0;
`;

const StyledAwardAmount = styled(Typography).attrs({variant: 'h5' })`
  margin: 0;
  padding: 0;
  text-align: left;
  position: absolute;
  height: 31px;
  left: 16px;
  right: 112px;
  top: 38px;
`;

const StyledName = styled(Typography).attrs({variant: 'body2' })`
  text-align: left;
  position: absolute;
  height: 20px;
  left: 16px;
  right: 112px;
  top: 68px;
  color: rgba(0, 0, 0, 0.6);

`;

const StyledReliefType = styled(Typography).attrs({variant: 'body2' })`
  text-align: left;
  position: absolute;
  height: 20px;
  left: 16px;
  right: 112px;
  top: 100.16px;
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
  
`;

const Tag = styled(Typography).attrs({variant: 'body2' })`
  margin-right: 10px;

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
