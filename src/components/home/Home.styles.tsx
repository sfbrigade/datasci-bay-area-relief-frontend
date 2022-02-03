import styled from "styled-components";
import {ReactComponent as LandingPageSky} from "../../assets/LandingPageSky.svg";

export const PageContainer = styled.div`
`;

export const SectionContainer = styled.div`
  width: 100%;  
  display: flex;  
  flex-direction: column;

  @media(min-width: 30rem){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  height: 70vw;

  @media(min-width: 30rem){
    flex: 0.5;
    height: 55vw;
  }
`;

export const StyledLandingPageSky = styled(LandingPageSky)`
  position: absolute;
  left: 0px;
  width: 80vw;
  height: 80vw;

  @media(min-width: 30rem){
    width: 46vw;
    max-width: 530px;
    height: 46vw;
    max-height: 530px;
  }
`;

export const StyledStoreFront = styled.img`
  position: absolute;
  width: 72vw;
  height: 72vw;
  left: 0px;
  top: 13vw;

  @media(min-width: 30rem){
    width: 43vw;
    max-width: 500px;
    height: 43vw;
    max-height: 500px;
    top: 8vw;
  }
`;

export const SearchSection = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-top: 10vw;

  @media(min-width: 30rem){
    margin-top: 10vw;
  }
`;