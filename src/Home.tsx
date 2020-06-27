import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { ReactComponent as CoolIllustration } from "./assets/CoolIllustration.svg"

const Container = styled.div`
  display: flex;
`;

const Section = styled.div`
  flex: 1 1 auto;
`;

const PlaceholderIllustration = styled(CoolIllustration)`
  position: absolute;
  width: 823px;
  height: 823px;
  left: -201px;
  top: 128px;
`;

const Home: React.FC = () => <Container>
  <Section><PlaceholderIllustration/></Section>
  <Section>
    <h1>Find Loans & Grants</h1>
    <Link to="/results">Go</Link>
  </Section>
</Container>;

export default Home;
