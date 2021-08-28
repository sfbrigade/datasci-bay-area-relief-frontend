import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {CurrentFilters, HomeSearchFormTypes, Result, SortOptionType} from "../../types";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import sortListBy from "./sortListBy";
import {FilterBar} from "./FilterBar";
import Typography from "@material-ui/core/Typography";
import {useLocation} from "react-router-dom";
import Searching from "../../assets/Searching.png";
import {GlobalStateContext} from "../../context/globalStates";
import {grabCurrentFiltersFromURLParams} from "../../util/historyHelper";

const ResultsPage = styled.div`
  display: flex;
  background: #fafafa;
  padding-top: 130px;
  min-width: 100vw;
  min-height: 100vh;
`;

const RightSide = styled.div`
  flex: auto;
`;

const MatchSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10em;
  margin-left: 4em;
`;

const ResultsMatched = styled(Typography).attrs({variant: "h4"})`
  margin: 0;
  color: rgba(0, 0, 0, 0.87);
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 12px;
  min-width: 207px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 23px;

  && .MuiTypography-root {
    /* Body 2 / Source Sans Pro */
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

const StyledFormControl = styled(FormControl)`
  flex: auto;
  display: flex;
  flex-direction: row;
  width: 128px;
  height: 24px;
  order: 1;
  align-self: flex-end;
`;

const StyledSelect = styled(Select)`
  && select {
    padding-top: 3px;
    margin-left: 8px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.25px;
  }
`;

const ResultsList = styled.div``;

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const Results: React.FC = () => {
  const {
    filteredResults,
    setCurrentFilters,
    setFilteredResults,
    setIsFilterOpen
  } = useContext(GlobalStateContext);

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      setCurrentFilters(grabCurrentFiltersFromURLParams(location));
    }
  }, [location.search, setCurrentFilters]);

  const [sortOption, setSortOption] = useState<SortOptionType>(
    SortOptionType.DueDateNewToOld
  );

  useEffect(() => {
    setSortOption(SortOptionType.DueDateNewToOld);
    setLoading(false);
  }, [filteredResults]);

  useEffect(() => {
    setFilteredResults((filteredResults) => sortListBy(filteredResults, sortOption));
  }, [sortOption, setFilteredResults]);

  const renderResults = () => {
    if (filteredResults.length === 0) {
      return (
        <>
          <img src={Searching} alt="No Results"/>
          <p>
            Try clearing some filters!
          </p>
        </>
      );
    }
    return (
      <StyledUL>
        {filteredResults.map((result: Result) => (
          <ListItem key={result.name + result.id}>
            <ResultCard {...result} />
          </ListItem>
        ))}
      </StyledUL>
    );
  };

  const handleClearFilters = () => setCurrentFilters({});

  return (
    <ResultsPage>
      {!loading && (
        <>
          <FilterBar
            onClear={handleClearFilters}
          />
          <RightSide onClick={() => setIsFilterOpen(false)}>
            <MatchSortContainer>
              <ResultsMatched>{`${filteredResults.length} matches:`}</ResultsMatched>
              <SortContainer>
                <Typography>Sort by:</Typography>
                <StyledFormControl>
                  <StyledSelect
                    defaultValue={SortOptionType.DueDateNewToOld}
                    onChange={(event) =>
                      setSortOption(event.target.value as SortOptionType)
                    }
                    native
                    disableUnderline
                    inputProps={{"aria-label": "sort by"}}
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
            </MatchSortContainer>
            <ResultsList>{renderResults()}</ResultsList>
          </RightSide>
        </>
      )}
    </ResultsPage>
  );
};

export default Results;
