import React from "react";
import styled from "styled-components";
import {Result} from "../../types";
import Card from "@material-ui/core/Card";
import {
  formatInterestRate,
  formatDate,
  formatAwardAmount,
  formatReliefType,
} from "./formatHelpers";

const StyledCard = styled(Card)`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  width: 500px;
  height: 172px;
  margin: 1.5em;
`;

const SupportTypeContainer = styled.div`
  /* Auto Layout */

  display: flex;
  flex-direction: row;
  padding: 0px;

  position: absolute;
  width: 196px;
  height: 16px;
  left: 16px;
  top: 15px;
  margin: 0;
  padding: 0;
`;

const SupportTypeItem = styled.p`
  /* Overline */

  position: static;
  height: 16px;
  right: 162px;
  top: 0px;

  /* Overline / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  letter-spacing: 1.5px;
  text-transform: uppercase;

  /* Black — High Emphasis */

  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;

  /* Inside Auto Layout */

  flex: none;
  align-self: center;
  margin: 4px 0px;
`;

const StyledAwardAmount = styled.h5`
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: left;

  /* Headline 5 */

  position: absolute;
  height: 31px;
  left: 16px;
  right: 112px;
  top: 38px;

  /* H5 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  /* Black — High Emphasis */

  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;

const StyledName = styled.div`
  text-align: left;

  /* Body 2 */

  position: absolute;
  height: 20px;
  left: 16px;
  right: 112px;
  top: 68px;

  /* Body 2 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  letter-spacing: 0.25px;

  /* Black — Medium Emphasis */

  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
`;

const StyledReliefType = styled.div`
  text-align: left;

  /* Body 3 */

  position: absolute;
  height: 20px;
  left: 16px;
  right: 112px;
  top: 100.16px;

  /* Body 2 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  letter-spacing: 0.25px;

  /* Black — Disabled */

  color: rgba(0, 0, 0, 0.38);
  mix-blend-mode: normal;
`;

const StyledButton = styled.div`
  /* Label */

  position: absolute;
  width: 36px;
  height: 16px;
  left: 16px;
  bottom: 12px;

  /* Button / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  letter-spacing: 0.75px;
  text-transform: uppercase;

  /* Primary — 500* */

  color: #ef5350;
`;

const ResultCard: React.FC<Result> = ({
  supportType,
  interestRate,
  dateAdded,
  maxAwardAmount,
  name,
  reliefType,
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
      <StyledButton>Apply</StyledButton>
    </StyledCard>
  );
};

export default ResultCard;
