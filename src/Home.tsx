import React, { useState } from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { ReactComponent as CoolIllustration } from "./assets/CoolIllustration.svg"
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Section = styled.div`
  flex: 1 1 auto;
`;

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const PlaceholderIllustration = styled(CoolIllustration)`
  position: absolute;
  width: 823px;
  height: 823px;
  left: -201px;
  top: 128px;
`;

const Home: React.FC = () => {
  const [ businessType, setBusinessType ] = useState('')

  const handleBusinessTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBusinessType(event.target.value as string);
  }

  return (
    <Container>
      <Section><PlaceholderIllustration/></Section>
      <Section>
        <h1>Find Loans & Grants</h1>
        <p>Search our database for Bay Area loans</p>
        
        <StyledFormControl variant="outlined">
          <InputLabel htmlFor='business-type-select'>I am a...</InputLabel>
          <Select
            native
            value={businessType}
            onChange={handleBusinessTypeChange}
            name='business-type'
            inputProps={{
              name: 'business-type',
              id: 'business-type-select', 
              'data-testid': 'business-type-select'
            }}
          >
            <option aria-label="None" value='' />
            <option value='small-business'>Small business</option>
            <option value='non-profit'>Non-profit</option>
          </Select>

          <Button variant="contained" component={Link} to='/results'>Go</Button>
        </StyledFormControl>

      </Section>
    </Container>
  );
}

export default Home;