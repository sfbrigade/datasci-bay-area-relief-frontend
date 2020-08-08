import React, {useEffect, useState} from "react";
import {ReactComponent as NoResults} from "../../assets/NoResults.svg";
import {getResults} from "../../api/axiosApi";
import {Result} from "../../types";
import styled from "styled-components";
import ResultCard from "./ResultCard";

const ResultsPage = styled.div`
  background: #fafafa;
`;

const ResultsList = styled.div`
  margin-top: 115px;
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
      <ul>
        {results.map((result: Result) => (
          <ListItem key={result.name}>
            <ResultCard {...result} />
          </ListItem>
        ))}
      </ul>
    );
  };

  return (
    <ResultsPage>
      <ResultsList>{!loading && renderResults()}</ResultsList>
    </ResultsPage>
  );
};

export default Results;
