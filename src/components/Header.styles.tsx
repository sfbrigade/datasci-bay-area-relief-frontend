import styled from "styled-components";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {colors} from "../theme";

export const WhiteContainer = styled.header`
  top: 0;
  width: 100%;
  height: 98px;
  z-index: 100;
  display: flex;
  position: fixed;
  overflow: hidden;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.14);
`;
export const TransparentContainer = styled.header`
  top: 0;
  width: 100%;
  height: 98px;
  z-index: 100;
  display: flex;
  position: fixed;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`;

export const FilterContainer = styled.div`
  @media (min-width: 752px) {
    display: none;
  }
`;

export const HiddenContainer = styled.header`
  visibility: hidden;
`;

export const LogoWrapper = styled.div`
  margin-left: 56px;
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  padding-right: 88px;
  align-items: center;
  justify-content: flex-end;
`;

export const SmallMenuContainer = styled.div`
  display: block;
  color: black;
  text-align: center;
  margin-left: 32px;
  text-decoration: none;

  @media (min-width: 752px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  display: none;

  @media (min-width: 752px) {
    display: block;
    color: black;
    text-align: center;
    margin-left: 32px;
    text-decoration: none;
  }
`;

export const MenuItemTypography = styled(Typography)`
  &:hover {
    color: ${colors.primaryRed};
    font-weight: 500;
  }
`;
