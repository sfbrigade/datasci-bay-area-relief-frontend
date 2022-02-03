import styled from "styled-components";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {colors} from "../theme";
import {ReactComponent as Logo} from "../assets/Logo.svg";

export const WhiteContainer = styled.header`
  top: 0;
  right:0;
  width: 100%;
  height: 15vw;
  z-index: 100;
  display: flex;
  position: fixed;
  overflow: hidden;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.14);
  
  @media(min-width: 30rem){
    height: 8.5vw;
  }
  
`;
export const TransparentContainer = styled.header`
  top: 0;
  right:0;
  width: 100%;
  height: 15vw;
  z-index: 100;
  display: flex;
  position: fixed;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;

  @media(min-width: 30rem){
    height: 8.5vw;
  }
`;

export const FilterContainer = styled.div`
  @media (min-width: 30rem) {
    display: none;
  }
`;

export const HiddenContainer = styled.header`
  visibility: hidden;
`;

export const LogoWrapper = styled.div`
  margin-left: 5.1vw;
`;

export const StyledLogo = styled(Logo)`
  width: 40vw;
  height: 25vw;

  @media(min-width: 30rem){
   width: 20vw;
   height: 10vh;

 }

`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  padding-right: 8.1vw;
  align-items: center;
  justify-content: flex-end;
`;

export const SmallMenuContainer = styled.div`
  display: block;
  color: black;
  text-align: center;
  margin-left: 3vw;
  text-decoration: none;
  margin:0;

  @media (min-width: 30rem) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  display: none;

  @media (min-width: 30rem) {
    display: block;
    color: black;
    text-align: center;
    margin-left: 2.3vw;
    text-decoration: none;
  }
`;

export const MenuItemTypography = styled(Typography)`
  &:hover {
    color: ${colors.primaryRed};
    font-weight: 500;
  }
`;
