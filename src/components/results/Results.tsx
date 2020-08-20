import React, {useEffect, useState} from "react";
import {ReactComponent as NoResults} from "../../assets/NoResults.svg";
import {getResults} from "../../api/axiosApi";
import {Result} from "../../types";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import Drawer from "@material-ui/core/Drawer";

const ResultsPage = styled.div`
  display: flex;
  background: #fafafa;
  float: left;
  clear: both;
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
  margin-top: 115px;
`;

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
          <NoResults />
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
      <StyledDrawer variant="permanent" anchor="left"></StyledDrawer>
      <ResultsList>{!loading && renderResults()}</ResultsList>
    </ResultsPage>
  );
};

export default Results;
