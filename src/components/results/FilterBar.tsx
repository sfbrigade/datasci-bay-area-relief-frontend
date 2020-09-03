import {CurrentFilters} from "../../types";
import React, {ChangeEvent} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {filterGroups} from "./filterHelpers";
import Button from "@material-ui/core/Button";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 361px;
  padding-left: 50px;
  text-align: left;

  & .MuiTypography-root {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
  }

  & .MuiFormLabel-root {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
  }
`;

type FilterBarProps = {
  currentFilters: CurrentFilters;
  matchCounts: {[k: string]: number};
  onChange: (
    group: keyof CurrentFilters
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

export const FilterBar: React.FC<FilterBarProps> = ({
  currentFilters,
  matchCounts,
  onChange,
  onClear,
}) => (
  <Sidebar>
    {filterGroups.map(({groupName, groupLabel, filters}) => (
      <FormControl key={groupName} component="fieldset">
        <FormLabel component="legend">{groupLabel}</FormLabel>
        <FormGroup>
          {filters.map(({label, name}) => (
            <FormControlLabel
              key={name}
              label={`${label} (${matchCounts[name]})`}
              control={
                <Checkbox
                  name={name}
                  checked={
                    !!currentFilters[
                      groupName as keyof CurrentFilters
                    ]?.includes(name)
                  }
                  onChange={onChange(groupName as keyof CurrentFilters)}
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    ))}
    <Button color="secondary" onClick={onClear}>
      clear
    </Button>
  </Sidebar>
);
