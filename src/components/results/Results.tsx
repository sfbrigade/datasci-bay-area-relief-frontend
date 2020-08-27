import React, {useEffect, useState} from "react";
import {getResults} from "../../api/axiosApi";
import {Result} from "../../types";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import Drawer from "@material-ui/core/Drawer";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ResultsPage = styled.div`
  display: flex;
  background: #fafafa;
  float: left;
  clear: both;
  padding-top: 115px;
`;

const StyledDrawer = styled(Drawer)`
  & > div {
    position: static;
    z-index: 0;
    background-color: transparent;
    border-right: medium none black;
    width: 361px;
  }
`;

const ResultsList = styled.div`
`;

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

interface CategorizedResults {
  sfCounty: Result[];
  alamedaCounty: Result[];
}

const defaultCategorizedResults: CategorizedResults = {
  sfCounty: [],
  alamedaCounty: [],
};

const Results: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [categorizedResults, setCategorizedResults] = useState<CategorizedResults>(defaultCategorizedResults);
  // const [currentFilters, setCurrentFilters] = useState(new Set()) ['nonprofit', 'sfCounty']
  // const [filteredResults, setFilteredResults]

  useEffect(() => {
    getResults().then((response) => {
      setResults(response);
      setLoading(false);
    });
  }, []);

  const renderResults = () => {
    if (results.length === 0) {
      return (
        <>
          <img src="../../assets/NoResults.svg" alt="No Results" />
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
      <StyledDrawer variant="permanent" anchor="left">

        <FormControlLabel
          control={
            <Checkbox/>
          }
          label={`San Francisco (${categorizedResults.sfCounty.length})`}
        />
        <FormControlLabel
          control={
            <Checkbox/>
          }
          label={`Alameda (${categorizedResults.alamedaCounty.length})`}
        />
      </StyledDrawer>
      <ResultsList>{!loading && renderResults()}</ResultsList>
    </ResultsPage>
  );
};

export default Results;
