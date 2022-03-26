import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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