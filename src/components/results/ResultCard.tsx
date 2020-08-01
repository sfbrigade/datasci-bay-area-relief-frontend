import React from "react";
import styled from "styled-components";
import {Result} from "../../types";
import Card from "@material-ui/core/Card";

const SupportTypeContainer = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

const StyledCard = styled(Card)`
  background: #ffffff;
  border-radius: 4px;
  width: 500px;
  height: 172px;
`;

export const formatInterestRate = (
  interestRate: number | null,
  supportType: string
): string => {
  if (supportType === "Grant") return "No Interest";
  if (interestRate === null) return "Unknown";
  return interestRate === 0 ? "No Interest" : `${interestRate * 100}% Interest`;
};

const ResultCard: React.FC<Result> = ({name, supportType, interestRate}) => {
  return (
    <StyledCard>
      <SupportTypeContainer>
        <p>{supportType}</p>
        <p>{formatInterestRate(interestRate, supportType)}</p>
      </SupportTypeContainer>
      <p>{name}</p>
    </StyledCard>
  );
};

export default ResultCard;
