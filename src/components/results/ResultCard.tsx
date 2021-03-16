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
  background: #ffffff;
  border-radius: 4px;
  width: 310px;
  margin: 24px;
  padding: 12px 14px 10px 14px;
  text-align: left;
  @media(max-width: 500px) {
    margin: 24px 0px;
  }
`;

const SupportTypeContainer = styled.div`
  display: flex;
`;

const StyledAwardAmount = styled.h5`
  margin-top: 2px;
  margin-bottom: 0px;
  margin-left: -2px;
  font-family: 'Source Sans Pro';
  font-size: 28px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
`;

const StyledName = styled(Typography).attrs({variant: 'body2' })`
  color: rgba(0, 0, 0, 0.6);
`;


const BottomWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;


const Tag = styled(Typography).attrs({variant: 'body2' })`
  background: linear-gradient(0deg, #fece4b, #fece4b);
  border-radius: 16px;
  padding: 2px 18px;
  align-self: flex-end;
  color: #715711;
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
        <Typography variant="overline">
          {`${supportType} • ${formatInterestRate(
            interestRate,
            supportType
          )} • ${formatDate(dateAdded)}`}
        </Typography>
      </SupportTypeContainer>
      <StyledAwardAmount>
          {formatAwardAmount(maxAwardAmount)}
      </StyledAwardAmount>
      <StyledName>{name}</StyledName>
      <BottomWrapper>
        {websiteUrl !== "None" && (
            <Button color="secondary" variant="outlined" onClick={() => onApply(websiteUrl)}>
              Apply
            </Button>
        )}
          <Tag>{formatReliefType(reliefType)}</Tag>
          {/* {blackOwned && <Tag>Black-owned</Tag>}
          {lgbtq && <Tag>LGBTQ</Tag>} */}
      </BottomWrapper>
    </StyledCard>
  );
};

export default ResultCard;
