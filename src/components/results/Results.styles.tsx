import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { colors } from "../../theme";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const ResultsPage = styled.div`
  display: flex;
  background: #fafafa;
  padding-top: 130px;
  min-width: 100vw;
  min-height: 100vh;
`;

export const RightSide = styled.div`
  flex: auto;
`;

export const MatchSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10em;
  margin-left: 4em;
`;

export const ResultsMatched = styled(Typography).attrs({variant: "h4"})`
  margin: 0;
  color: ${colors.text};
`;

export const ResultsList = styled.div``;

export const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const SearchBar = styled(TextField)`
  min-width: 300px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchButton = styled(Button)`
  margin-left: 1rem;
  width: 85px;
  height: 60px;
`;

export const SearchGroup = styled.div`
  margin-bottom: -100px;
`;

