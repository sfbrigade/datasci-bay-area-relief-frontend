import styled from "styled-components";
import {ReactComponent as LandingPageSky} from "../../assets/LandingPageSky.svg";

export const PageContainer = styled.div`

`;

export const SectionContainer = styled.div`

@media(min-width: 40rem){
    display: flex;
  }
`;

export const ImageSection = styled.div`
  width: 100%;

  @media(min-width: 40rem){
    flex: 0.5;
  }
`;

export const ImageContainer = styled.div`
  width: 50vh;
  height: 50vh;
  position: relative;
 
  @media(min-width: 40rem){
    width: 100%;
    height: 100%;
  }
`;

export const StyledLandingPageSky = styled(LandingPageSky)`
  width: 100%;
  height: 100%;

  @media(min-width: 40rem){
    width: 98%;
  }
`;

export const ImageStoreContainer = styled.div`
  width: 100%;
`;

export const StyledStoreFront = styled.img`
  position: absolute;
  top: 1.5rem;
  left:0;
  width: 100%;
  height: 100%;

  @media(min-width: 40rem){
    width: 100%;
    top: 4rem;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;

  @media(min-width: 40rem){
    flex: 0.5;
    justify-content:center;
  }
`;