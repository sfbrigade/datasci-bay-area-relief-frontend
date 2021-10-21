import React from "react";
import {Result} from "../../types";
import {
  formatAwardAmount,
  formatDate,
  formatInterestRate,
  formatReliefType,
} from "./formatHelpers";
import Button from "@material-ui/core/Button";
import {
  CardBottom,
  StyledAwardAmount,
  StyledCard,
  StyledName,
  StyledReliefType,
  SupportTypeContainer,
  SupportTypeItem, Tag, Tags
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
  const deadlineString = (): string => {
    let deadlineLabelText = "";
    if (deadlineApplicable === "Yes" || deadlineApplicable === "Unknown") {
      if (!deadline) {
        deadlineLabelText = "Unknown";
      } else {
        deadlineLabelText = formatDate(deadline);
      }
    } else if (deadlineApplicable === "No") {
      deadlineLabelText = "Ongoing";
    }
    return deadlineLabelText;
  }

  return (
    <StyledCard>
      <SupportTypeContainer>
        <SupportTypeItem>
          <span data-testid='support-type-header'>{`${supportType} • ${formatInterestRate(
            interestRate,
            supportType
          )} • ${deadlineString()}`}</span>
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
