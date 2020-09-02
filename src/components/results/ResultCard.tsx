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
  top: 0;

  /* Overline / Source Sans Pro */

  font-family: Source Sans Pro, sans-serif;
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
  margin: 4px 0;
`;

const StyledAwardAmount = styled.h5`
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  text-align: left;

  /* Headline 5 */

  position: absolute;
  height: 31px;
  left: 16px;
  right: 112px;
  top: 38px;

  /* H5 / Source Sans Pro */

  font-family: Source Sans Pro, sans-serif;
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

  font-family: Source Sans Pro, sans-serif;
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

  font-family: Source Sans Pro, sans-serif;
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

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 12px;
  width: 95%;
  left: 12px;
`;

const StyledButton = styled.div`
  /* Button / Source Sans Pro */
  font-family: Source Sans Pro, sans-serif;
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

const Tags = styled.div`
  display: flex;
`;
const Tag = styled.div`
  margin-right: 4px;
  background: linear-gradient(0deg, #fece4b, #fece4b);
  border-radius: 16px;
  height: 20px;
  padding-left: 12px;
  padding-right: 12px;
  /* Body 2 / Source Sans Pro */

  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-align: center;
  letter-spacing: 0.25px;
`;

const ResultCard: React.FC<Result> = ({
  supportType,
  interestRate,
  dateAdded,
  maxAwardAmount,
  name,
  reliefType,
  blackOwned,
  lgbtq,
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
        <StyledButton>Apply</StyledButton>
        <Tags>
          {blackOwned && <Tag>Black-owned</Tag>}
          {lgbtq && <Tag>LGBTQ</Tag>}
        </Tags>
      </CardBottom>
    </StyledCard>
  );
};

export default ResultCard;
