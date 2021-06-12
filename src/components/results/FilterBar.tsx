import {CurrentFilters} from "../../types";
import React, {useContext} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {filterGroups} from "./filterHelpers";
import Button from "@material-ui/core/Button";
import FilterContext from "../../context/filter";

const Sidebar = styled.div<{isFilterOpen: boolean}>`
  display: flex;
  flex-direction: column;
  min-width: 361px;
  padding-left: 40px;
  text-align: left;

  & .MuiTypography-root {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
  }

  & .MuiFormLabel-root {
    font-size: 13px;
    // line-height: 16px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    font-weight: 600;
  }

  & .MuiFormControl-root {
    &:not(:first-child) {
      margin-top: 15px;
    }

  }

  @media (max-width: 752px) {
    display: ${props => (props.isFilterOpen ? "flex" : "none")};
    width: 75%;
    height: auto;
    background-color: white;
    position: relative;
    top: 100px;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
    padding: 30px;
  }
`;

export const FilterBar: React.FC = () => {
  const {
    currentFilters,
    handleFilterChange,
    handleClearFilters,
    isFilterOpen,
    contextID
  } = useContext(FilterContext);

  console.log(`contextID: ${contextID}`);
  return (
    <Sidebar isFilterOpen={isFilterOpen}>
      {filterGroups.map(({groupName, groupLabel, filters}) => {
        console.log(`groupName: ${groupName}`)
        return (
          <FormControl key={groupName} component="fieldset">
            <FormLabel component="legend">{groupLabel}</FormLabel>
            <FormGroup>
              {filters.map(({label, name}) => {
                console.log(`label: ${label}, name: ${name}`);
                return (
                  <FormControlLabel
                    key={name}
                    label={`${label}`}
                    control={
                      <Checkbox
                        name={name}
                        checked={
                          !!currentFilters[
                            groupName as keyof CurrentFilters
                            ]?.includes(name) ||
                          !!currentFilters[
                            groupName as keyof CurrentFilters
                            ]?.includes(label)
                        }
                        onChange={handleFilterChange(groupName as keyof CurrentFilters)}
                      />
                    }
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        );
      })}
      <Button color="secondary" onClick={handleClearFilters}>
        clear
      </Button>
    </Sidebar>
  );
};
