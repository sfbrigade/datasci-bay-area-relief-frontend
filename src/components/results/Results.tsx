import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {getResults} from "../../api/axiosApi";
import {CurrentFilters, Result, SortOptionType} from "../../types";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import sortListBy from "./sortListBy";
import {applyFilters, getMatchCounts} from "./filterHelpers";
import {FilterBar} from "./FilterBar";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import Searching from "../../assets/Searching.png";

const ResultsPage = styled.div`
  display: flex;
  background: #fafafa;
  padding-top: 130px;
  min-width: 100vh;
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

const ResultsMatched = styled(Typography).attrs({variant: 'h4' })`
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
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory<{currentFilters: CurrentFilters}>();
  const currentFiltersFromHistory =
    history.location.state && history.location.state.currentFilters
      ? history.location.state.currentFilters
      : {};
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>(
    currentFiltersFromHistory
  );

  const filteredResults = useMemo(() => applyFilters(results, currentFilters), [
    currentFilters,
    results,
  ]);

  const matchCounts = useMemo(() => getMatchCounts(filteredResults), [
    filteredResults,
  ]);

  const [sortOption, setSortOption] = useState<SortOptionType>(
    SortOptionType.None
  );

  useEffect(() => {
    getResults()
      .then(setResults)
      .then(() => {
        setSortOption(SortOptionType.DueDateNewToOld);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setResults((curResults) => sortListBy(curResults, sortOption));
  }, [sortOption]);

  const renderResults = () => {
    if (filteredResults.length === 0) {
      return (
        <>
          <img src={Searching} alt="No Results" />
          <p>
            Try clearing some filters! There are still {results.length} loans
            out there.
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

  const handleFilterChange = (group: keyof CurrentFilters) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newFilters = {...currentFilters};
    if (event.target.checked) {
      if (group in newFilters) {
        if (!newFilters[group]?.includes(event.target.name)) {
          newFilters[group]?.push(event.target.name);
        }
      } else {
        newFilters[group] = [event.target.name];
      }
    } else {
      const index = newFilters[group]?.indexOf(event.target.name);
      if (index >= 0) newFilters[group]?.splice(index, 1);
      if (newFilters[group]?.length === 0) delete newFilters[group];
    }
    setCurrentFilters(newFilters);
  };

  const handleClearFilters = () => setCurrentFilters({});

  return (
    <ResultsPage>
      {!loading && (
        <>
          <FilterBar
            currentFilters={currentFilters}
            onChange={handleFilterChange}
            matchCounts={matchCounts}
            onClear={handleClearFilters}
          />
          <RightSide>
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
