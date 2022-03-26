import React, { Dispatch } from "react";
import { SortOptionType } from "../../../types";
import Typography from "@mui/material/Typography";
import { SortContainer, StyledFormControl, StyledSelect } from "./Sort.styles";

type SortDropdownProps = {
  setSortOption: Dispatch<SortOptionType>;
};

const SortDropdown: React.FC<SortDropdownProps> = ({setSortOption}) => {
  return (
    <SortContainer>
      <Typography>Sort by:</Typography>
      <StyledFormControl>
        <StyledSelect
          defaultValue={SortOptionType.DueDateNewToOld}
          onChange={(event) => {
            setSortOption(event.target.value as SortOptionType);
          }}
          native
          variant="standard"
          inputProps={{"aria.-label": "sort by"}}
        >
          <option value={SortOptionType.InterestHighToLow}>
            Interest: High-Low
          </option>
          <option value={SortOptionType.InterestLowToHigh}>
            Interest: Low-High
          </option>
          <option value={SortOptionType.DueDateNewToOld}>
            Due date: New-Old
          </option>
          <option value={SortOptionType.DueDateOldToNew}>
            Due date: Old-New
          </option>
          <option value={SortOptionType.AwardAmountHighToLow}>
            Amount: High-Low
          </option>
          <option value={SortOptionType.AwardAmountLowToHigh}>
            Amount: Low-High
          </option>
        </StyledSelect>
      </StyledFormControl>
    </SortContainer>
  );
};

export default SortDropdown;