import React, {useContext, useEffect, useState} from "react";
import {Result, SortOptionType} from "../../types";
import ResultCard from "./ResultCard";
import {FilterBar} from "./FilterBar";
import {useLocation} from "react-router-dom";
import Searching from "../../assets/Searching.png";
import {GlobalStateContext} from "../../context/globalStates";
import {grabCurrentFiltersFromURLParams} from "../../util/historyHelper";
import {
  ListItem,
  MatchSortContainer,
  ResultsList,
  ResultsMatched,
  ResultsPage,
  RightSide,
  StyledUL,
} from "./Results.styles";
import sortListBy from "./sort/sortListBy";
import SortDropdown from "./sort/SortDropdown";

const Results: React.FC = () => {
  const {
    filteredResults,
    setCurrentFilters,
    setFilteredResults,
    setIsFilterOpen,
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
    setFilteredResults((filteredResults) =>
      sortListBy(filteredResults, sortOption)
    );
  }, [sortOption, setFilteredResults]);

  const renderResults = () => {
    if (filteredResults.length === 0) {
      return (
        <>
          <img src={Searching} alt="No Results" />
          <p>Try clearing some filters!</p>
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
              {process.env.REACT_APP_SHOW_SORT &&
                process.env.REACT_APP_SHOW_SORT === "true" && (
                  <SortDropdown setSortOption={setSortOption} />
                )}
            </MatchSortContainer>
            <ResultsList>{renderResults()}</ResultsList>
          </RightSide>
        </>
      )}
    </ResultsPage>
  );
};

export default Results;
