import React from "react";
import Typography from "@mui/material/Typography";
import algoliasearch from "algoliasearch/lite";
import {
  Highlight,
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from "react-instantsearch-hooks-web";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {Container, TopSection} from "./Search.styles";

const searchClient = algoliasearch(
  "LI2F5EP7NE",
  "26ab6944e75f2cdbca51e0dbf46a133b"
);
function Hit({hit}: {hit: any}): JSX.Element {
  return (
    <article>
      <h2>
        <Highlight attribute="Name" hit={hit} />
      </h2>
    </article>
  );
}

const Search: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <Typography component="h1" variant="h3">
          Algolia Search
        </Typography>
      </TopSection>
      <InstantSearch searchClient={searchClient} indexName="bay-area-relief">
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div>
                {" "}
                <h3>100 or fewer employees</h3>
                <RefinementList attribute="100 or fewer employees" />
                <h3>500 or fewer employees</h3>
                <RefinementList attribute="500 or fewer employees" />
                <h3>Black Owned</h3>
                <RefinementList attribute="Black Owned" />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                <SearchBox />

                <Hits hitComponent={Hit} />
              </div>
            </Grid>
          </Grid>
        </Box>
      </InstantSearch>
    </Container>
  );
};
export default Search;
