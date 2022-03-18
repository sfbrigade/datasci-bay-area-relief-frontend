import React, {useContext, useEffect, useState} from "react";
import {Result, SortOptionType} from "../../types";
import ResultCard from "./ResultCard";
import sortListBy from "./sortListBy";
import {FilterBar} from "./FilterBar";
import Typography from "@mui/material/Typography";
import {useLocation} from "react-router-dom";
import Searching from "../../assets/Searching.png";
import {GlobalStateContext} from "../../context/globalStates";
import {grabCurrentFiltersFromURLParams} from "../../util/historyHelper";
import {
  ListItem,
  MatchSortContainer, ResultsList,
  ResultsMatched,
  ResultsPage,
  RightSide,
  SortContainer, StyledFormControl, StyledSelect,
  StyledUL
} from "./Results.styles";

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
  }, [location, setCurrentFilters]);

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

  return (
    <ResultsPage>
      {!loading && (
        <>
          <FilterBar />
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
                    variant="standard"
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
