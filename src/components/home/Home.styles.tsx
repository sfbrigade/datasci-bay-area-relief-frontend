import styled from "styled-components";
import Sky from "../../assets/LandingPageSky.svg";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export const ImageSection = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  flex: 1 1 0;
`;

export const LPImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: url(${Sky}) no-repeat;
`;

export const StyledStoreFront = styled.img`
  position: absolute;
  width: 800px;
  height: 800px;
  left: 0px;
  top: 150px;
`;

export const SearchSection = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
