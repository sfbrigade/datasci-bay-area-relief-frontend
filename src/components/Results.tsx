import React, { useEffect, useState } from "react";
import { ReactComponent as NoResults } from "../assets/NoResults.svg";
import { getResults } from "../api/axiosApi";
import { Result } from "../types";

const Results: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getResults().then(response => {
      setResults(response);
      setLoading(false);
    });
  }, []);

  const renderResults = () => {
    if (results.length === 0) {
      return <>
        <NoResults />
        <p>Try clearing some filters! There are still {results.length} loans out there.</p>
      </>;
    }
    return (
      <ul>
        {results.map((result: Result) => (
          <li key={result.name}>{result.name}</li>
        ))}
      </ul>
    );
  };

  return <>{!loading && renderResults()}</>;
};

export default Results;
