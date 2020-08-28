import React, {useEffect, useState} from "react";
import {ReactComponent as NoResults} from "../../assets/NoResults.svg";
import {getResults} from "../../api/axiosApi";
import {Result, SortOptionType} from "../../types";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import sortListBy from "./sortListBy";

const ResultsPage = styled.div`
  display: flex;
  background: #fafafa;
  float: left;
  clear: both;
`;

const Sidebar = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  overflow-y: auto;
  height: auto;
  width: 361px;
  z-index: 0;
`;

const RightSide = styled.div`
  margin-top: 130px;
`;

const MatchSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10em;
  margin-left: 4em;
`;

const ResultsMatched = styled.h5`
  margin: 0;
  /* H4 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 43px;
  /* identical to box height */

  letter-spacing: 0.25px;

  /* Black — High Emphasis */

  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;

const SortContainer = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  padding: 6px 12px;

  width: 207px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 23px;

  /* Body 2 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  letter-spacing: 0.25px;
`;

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  width: 128px;
  height: 24px;
  order: 1;
  align-self: flex-end;
`;

const StyledSelect = styled(Select)`
  && select {
    padding: 3px 0 7px;
    margin-left: 4px;
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
  const [sortOption, setSortOption] = useState<SortOptionType>(
    SortOptionType.None
  );

  useEffect(() => {
    getResults().then((response) => {
      setResults(response);
      setSortOption(SortOptionType.DueDateNewToOld);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setResults((curResults) => sortListBy(curResults, sortOption));
  }, [sortOption]);

  const renderResults = () => {
    if (results.length === 0) {
      return (
        <>
          <NoResults title="No results" />
          <p>
            Try clearing some filters! There are still {results.length} loans
            out there.
          </p>
        </>
      );
    }
    return (
      <StyledUL>
        {results.map((result: Result) => (
          <ListItem key={result.name + result.id}>
            <ResultCard {...result} />
          </ListItem>
        ))}
      </StyledUL>
    );
  };

  return (
    <ResultsPage>
      <Sidebar></Sidebar>
      <RightSide>
        <MatchSortContainer>
          <ResultsMatched>{`matches:`}</ResultsMatched>
          <SortContainer>
            Sort by:
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
        <ResultsList>{!loading && renderResults()}</ResultsList>
      </RightSide>
    </ResultsPage>
  );
};

export default Results;
