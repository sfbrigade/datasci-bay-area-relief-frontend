import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CoolIllustration } from "./assets/CoolIllustration.svg"
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import search from "./api";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImageSection = styled.div`
  flex: 1 1 0;
`;

const SearchSection = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
`;

const PlaceholderIllustration = styled(CoolIllustration)`
  position: absolute;
  width: 823px;
  height: 823px;
  left: -201px;
  top: 128px;
`;

const Home: React.FC = () => {
  const [ businessType, setBusinessType ] = useState<string>('');
  const history = useHistory();

  const handleBusinessTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBusinessType(event.target.value as string);
  };

  const goToResults = () => {
    search(businessType);
    history.push('/results');
  };

  return (
    <Container>
      <ImageSection><PlaceholderIllustration/></ImageSection>
      <SearchSection>
        <h1>Find Loans & Grants</h1>
        <p>Search our database for Bay Area loans</p>

        <SearchFormFields>
          <FormControl variant="outlined">
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
            fullWidth
          >
            <option aria-label="None" value='' />
            <option value='small-business'>Small business</option>
            <option value='non-profit'>Non-profit</option>
          </Select>
        </FormControl>
        </SearchFormFields>

        <Button variant="contained" onClick={goToResults}>Search</Button>
      </SearchSection>
    </Container>
  );
}

export default Home;
