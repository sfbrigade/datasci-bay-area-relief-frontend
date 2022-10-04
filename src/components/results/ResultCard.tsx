import React from "react";
import Moment from "moment";

import {Result} from "../../types";
import {
  formatAwardAmount,
  formatDate,
  formatInterestRate,
  formatReliefType,
} from "./formatHelpers";
import Button from "@mui/material/Button";
import {
  CardBottom,
  StyledAwardAmount,
  StyledCard,
  StyledName,
  StyledReliefType,
  SupportTypeContainer,
  SupportTypeItem, Tag, Tags, ExpiredTag
} from "./ResultCard.styles";

const onApply = (url: string) => {
  window.open(url, "_blank");
};

const ResultCard: React.FC<Result> = ({
  supportType,
  interestRate,
  deadline,
  deadlineApplicable,
  maxAwardAmount,
  name,
  reliefType,
  blackOwned,
  lgbtq,
  websiteUrl,
}) => {
  let isExpired = false;
  let deadlineLabelText = "";
  if (deadlineApplicable === "Yes" || deadlineApplicable === "Unknown") {
    if (!deadline) {
      deadlineLabelText = "Unknown";
    } else {
      deadlineLabelText = formatDate(deadline);
      isExpired = Moment().isAfter(Moment(deadline));
    }
  } else if (deadlineApplicable === "No") {
    deadlineLabelText = "Ongoing";
  }

  return (
    <StyledCard>
      <SupportTypeContainer>
        <SupportTypeItem>
          <span data-testid='support-type-header'>{`${supportType} • ${formatInterestRate(
            interestRate,
            supportType
          )} • ${deadlineLabelText}`}</span>
        </SupportTypeItem>
      </SupportTypeContainer>
      <StyledAwardAmount>{formatAwardAmount(maxAwardAmount)}</StyledAwardAmount>
      <StyledName>{name}</StyledName>
      <CardBottom>
        {websiteUrl !== "None" && (
          <Button color="secondary" onClick={() => onApply(websiteUrl)}>
            Apply
          </Button>
        )}

        <Tags>
          {blackOwned && <Tag>Black-owned</Tag>}
          {lgbtq && <Tag>LGBTQ</Tag>}
          {isExpired && <ExpiredTag>Possibly Closed</ExpiredTag>}
        </Tags>
      </CardBottom>
    </StyledCard>
  );
};

export default ResultCard;
