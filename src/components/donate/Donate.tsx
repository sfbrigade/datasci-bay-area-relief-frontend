import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FAFAFA;
  height: 100vh;
`;

const HeaderSection = styled.div`
  text-align: center;
  width: 708px;
  padding-top: 120px;
`;

const Header = styled.h1`
  text-align: center;
  font-family: Bree Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
  margin: 0px;
  margin-bottom: 19px;
  padding: 0px;
`;

const P = styled.p`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  height: 58px;
  margin: 0px;
  padding: 0px;
`;

const GeneralSection = styled.div`
  width: 714px;
  display: flex;
  text-align: center;
  margin-top: 44px; 
`;

const GeneralHeader = styled.div`
  display: flex;
  flex: 1 1 0;
  margin: 0px;
  width: 38%;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 43px;
  letter-spacing: 0.25px;
  color: #000000;
`;

const GeneralLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  width: 62%;
`;

const DonateList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
`;

const Link = styled.li`
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.15px;
  color: #EF5350; 
`;

const A = styled.a`
  text-decoration: none;
  color: #EF5350;
`;

const BLMSection = styled.div`
  display: flex;
  width: 714px;
  text-align: center;
  margin-top: 67px;
  padding-bottom: 50px;
`;

const BLMHeader = styled.div`
  display: flex;
  flex: 1 1 0;
  margin: 0px;
  width: 38%;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 43px;
  text-align: left;
  letter-spacing: 0.25px;
  color: #000000;
`;

const BLMLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  width: 62%;
`;

const LGBTSection = styled.div`
  display: flex;
  text-align: center;
  width: 714px;
  margin-top:82px;
`;

const LGBTHeader = styled.div`
  display: flex;
  flex: 1 1 0;
  margin: 0px;
  width: 38%;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 43px;
  letter-spacing: 0.25px;
  color: #000000;
`;

const LGBTLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  width: 62%;
`;



const Donate: React.FC = () => {
  return (
    <div className="AboutUsContainer">
      <Container>
        
            <HeaderSection>
              <Header>Donate</Header>
              <P>Not a small business, but want to help? We’ve collected a list of funds you can donate to.</P>
            </HeaderSection>
            <GeneralSection>
              <GeneralHeader>General</GeneralHeader>
              <GeneralLinks>
              <DonateList>
                  <Link><A href ="https://www.gofundme.com/">GoFundMe's in the Bay area</A></Link>
                  <Link><A href ="https://www.redwoodcity.org/home">Redwood City Small Business Relief Fund </A></Link>
                  <Link><A href ="">UC Berkeley Law Pro Bono</A></Link>
                  <Link><A href ="">COVID-19 Regional Response Fund</A></Link>
                  <Link><A href ="">Norcal Small Business Relief Fund</A></Link>
                  <Link><A href ="">One Fair Wage </A></Link>
                  <Link><A href ="">Berkeley Relief Fund</A></Link>
                  <Link><A href ="">Berkeley Mutual Aid</A></Link>
                  <Link><A href ="">Save Our China Towns </A></Link>
                  <Link><A href="">MEDA (Mission Economic Development Agency)</A></Link>

                </DonateList>
                

              </GeneralLinks>
            </GeneralSection>
            <BLMSection>
              <BLMHeader>Black Lives<br /> Matter</BLMHeader>
              <BLMLinks>
              <DonateList>
                 
                  <Link><A href ="">YouTube Ad Proceeds to #BLM</A></Link>
                  <Link><A href ="">Bay Area Organization of Black Owned Businesses (BAOBOB)</A></Link>
                  <Link><A href ="">Black Owned Restaurants</A></Link>
                  <Link><A href ="">Black Owned Business ReliefFund</A></Link>
                  
                </DonateList>
              </BLMLinks>
            </BLMSection>
            <LGBTSection>
              <LGBTHeader>LGBT</LGBTHeader>
              <LGBTLinks>
              <DonateList>
                  
                  <Link><A href ="">Silicon Valley Central Chamber of Commerce</A></Link>
                  <Link><A href ="">SF Gov</A></Link>
                  <Link><A href ="">Queer: Way Out</A></Link>
                  <Link><A href ="">James Beard Foundation</A></Link>
                  <Link><A href ="">James Beard Webinars</A></Link>
                
                </DonateList>
              </LGBTLinks>
            </LGBTSection>
            
      </Container>
    </div>
  );
};

export default Donate;

