import styled from "styled-components";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { colors } from "../../theme";

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

export const SortContainer = styled.div`
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

export const StyledFormControl = styled(FormControl)`
  flex: auto;
  display: flex;
  flex-direction: row;
  width: 128px;
  height: 24px;
  order: 1;
  align-self: flex-end;
`;

export const StyledSelect = styled(Select)`
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

export const ResultsList = styled.div``;

export const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;
