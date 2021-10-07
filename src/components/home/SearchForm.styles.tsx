import styled from "styled-components";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  padding-left: 14px;
  padding-right: 14px;
  border: 0;

  @media (max-width: 915px) {
    text-shadow: 0.5px 0.5px #ffffff;
    backdrop-filter: blur(10px) brightness(1.2);
    border-radius: 25px;
    border: 2px solid transparent;
  }
`;

export const SearchDescription = styled.div`
  width: 400px;
  z-index: 10;
  margin-bottom: 27px;
`;

export const SearchFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
`;

export const StyledSelect = styled(Select)`
  margin-bottom: 1em;
`;

export const SearchButton = styled(Button)`
  && {
    width: 97px;
    height: 36px;
    border-radius: 200px;

    :disabled {
      background-color: ${colors.primaryRed};
      color: black;
      opacity: 0.5;
    }
  }
`;
export const DonateButton = styled(Button)`
  && {
    margin-top: 13px;
    padding: 13px;
    border-radius: 4px;
  }
`;
