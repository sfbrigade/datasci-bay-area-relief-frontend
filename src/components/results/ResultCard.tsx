import React from "react";
import styled from "styled-components";
import {Result} from "../../types";
import Card from "@material-ui/core/Card";
import {
  formatInterestRate,
  formatDate,
  formatAwardAmount,
} from "./formatHelpers";

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

const ResultCard: React.FC<Result> = ({
  name,
  supportType,
  interestRate,
  dateAdded,
  maxAwardAmount,
}) => {
  return (
    <StyledCard>
      <SupportTypeContainer>
        <p>
          <span>{supportType}</span> •{" "}
          <span>{formatInterestRate(interestRate, supportType)}</span> •{" "}
          <span>{formatDate(dateAdded)}</span>
        </p>
      </SupportTypeContainer>
      <p>{formatAwardAmount(maxAwardAmount)}</p>
      <p>{name}</p>
    </StyledCard>
  );
};

export default ResultCard;
