import React from "react";
import styled from "styled-components";
import { ReactComponent as About } from "../../assets/About.svg";
import "./Donate.css";
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
 justify-content: center;
  flex-direction: column;
  height: 1024px;
  border: 1px solid #333;
`;



const General = styled.div`
 

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
`;

const GeneralHeader = styled.div`


position: static;
left: 0%;
right: 67.74%;
top: 0%;
bottom: 83.9%;


font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 34px;
line-height: 43px;


letter-spacing: 0.25px;

color: #000000;



flex: none;
order: 0;
align-self: flex-start;

`;

const GeneralLinks = styled.div`
 
  justify-content: center;
  align-items: center;
  width: 480px;
  border: 1px solid blue;
`;



const Header = styled.h1`
 
  font-family: Bree Serif,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  padding: 0 0 23px;
  margin: 0;
`;


const Donate: React.FC = () => {
  return (
    <div className="AboutUsContainer">
      <Container>
        
            <Header>Donate</Header>
            <p>Not a small business, but want to help? We’ve collected a list of funds you can donate to. </p>
            <General>
              <GeneralHeader>General</GeneralHeader>
              <GeneralLinks>
                <ul>
                  <li><a href ="">GoFundMe's in the Bay area</a></li>
                  <li><a href ="">Redwood City Small Business Relief Fund </a></li>
                  <li><a href ="">UC Berkeley Law Pro Bono</a></li>
                  <li><a href ="">COVID-19 Regional Response Fund</a></li>
                  <li><a href =""> Norcal Small Business Relief Fund</a></li>
                  <li><a href ="">One Fair Wage </a></li>
                  <li><a href ="">Berkeley Relief Fund</a></li>
                  <li><a href =""> Berkeley Mutual Aid</a></li>
                  <li><a href ="">Save Our China Towns MEDA (Mission Economic Development Agency)</a></li>

                </ul>

                  </GeneralLinks>
            </General>

      </Container>
    </div>
  );
};

export default Donate;
