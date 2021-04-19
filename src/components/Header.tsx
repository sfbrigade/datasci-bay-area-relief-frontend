import React, {ChangeEvent, useState, useEffect, useMemo} from "react";
import styled, {StyledComponent} from "styled-components";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/Logo.svg";

import {FilterBar} from "./results/FilterBar";
import {applyFilters, getMatchCounts} from "./results/filterHelpers";
import sortListBy from "./results/sortListBy";
import {getResults} from "../api/axiosApi";

import Typography from "@material-ui/core/Typography";
import MatMenu from '@material-ui/core/Menu';
import MatMenuItem from '@material-ui/core/MenuItem';
import MatButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";

import {HeaderProps, CurrentFilters, SortOptionType, Result} from '../types';


const WhiteContainer = styled.header`
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
const TransparentContainer = styled.header`
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

const FilterContainer = styled.div`
  @media (min-width: 752px) {
    display: none
  }
`;

const HiddenContainer = styled.header`
  visibility: hidden;
`;

const LogoWrapper = styled.div`
  margin-left: 56px;
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  padding-right: 88px;
  align-items: center;
  justify-content: flex-end;
`;

const SmallMenuContainer = styled.div`
  display: block;
  color: black;
  text-align: center;
  margin-left: 32px;
  text-decoration: none;

  @media (min-width: 752px) {
    display: none
  }
`;

const MenuItem = styled(Link)`
  display: none;

  @media (min-width: 752px) {
    display: block;
    color: black;
    text-align: center;
    margin-left: 32px;
    text-decoration: none;
  }
`;

const Header: React.FC<HeaderProps> = ({setIsFilterOpen, isFilterOpen, currentFilters, setCurrentFilters}) => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isResultsPage, setIsResultsPage] = useState(false);
  const [filterToggle, setFilterToggle] = React.useState(false);
  const [results, setResults] = useState<Result[]>([]);

  const filteredResults = useMemo(() => applyFilters(results, currentFilters), [
    currentFilters,
    results,
  ]);

  const matchCounts = useMemo(() => getMatchCounts(filteredResults), [
    filteredResults,
  ]);
  
  const [sortOption, setSortOption] = useState<SortOptionType>(
    SortOptionType.None
  );

  useEffect(() => {
    getResults()
      .then(setResults)
      .then(() => {
        setSortOption(SortOptionType.DueDateNewToOld);
      });
  }, []);

  useEffect(() => {
    setResults((curResults) => sortListBy(curResults, sortOption));
  }, [sortOption]);

  // Update isResultsPage when location pathname changes;
  useEffect(() => {
    setIsResultsPage(location.pathname === '/results');
  }, [location.pathname]);

  // Handle navbar layout when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Track window width to toggle FilterBarOpen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 752) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let Container: StyledComponent<"header", any, {}, never>;

  // Change navbar layout when in home page and results page. Home page is clear and results page navbar is white 
  if (location.pathname === "/results" || location.pathname === "/donate") {
    Container = WhiteContainer;
  } else {
    if (prevScrollPos > 0)
      Container = visible ? WhiteContainer : HiddenContainer;
    else Container = visible ? TransparentContainer : HiddenContainer;
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (group: keyof CurrentFilters) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newFilters = {...currentFilters};
    if (event.target.checked) {
      if (group in newFilters) {
        if (!newFilters[group]?.includes(event.target.name)) {
          newFilters[group]?.push(event.target.name);
        }
      } else {
        newFilters[group] = [event.target.name];
      }
    } else {
      const index = newFilters[group]?.indexOf(event.target.name);
      if (index >= 0) newFilters[group]?.splice(index, 1);
      if (newFilters[group]?.length === 0) delete newFilters[group];
    }
    setCurrentFilters(newFilters);
  };

  const handleClearFilters = () => setCurrentFilters({});

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown') {
      return;
    }
    setIsFilterOpen(open);
    setFilterToggle(open);
  };


  const SmallMenu = () => (
    <SmallMenuContainer
      id="small-menu-container">
      <MatButton id="mat-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon/>
      </MatButton>
      
      <MatMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MatMenuItem component={Link} to="/" onClick={handleClose}>Home</MatMenuItem>
        <MatMenuItem component={Link} to="/results" onClick={handleClose}>Bay Area Relief Portal</MatMenuItem>
        <MatMenuItem component={Link} to={{
          pathname: "/",
          search: "",
          hash: "#about",
          state: {toAbout: true},
          }} onClick={handleClose}>
          About
        </MatMenuItem>
      </MatMenu>
    </SmallMenuContainer>
  );
  
  return (
    <Container>
      <LogoWrapper>
        <Logo role="logo" />
      </LogoWrapper>
      {isResultsPage && 
        <FilterContainer>
          <Button onClick={toggleDrawer(true)}>{'filter'}</Button>
          <Drawer anchor={'left'} open={filterToggle} onClose={toggleDrawer(false)}>
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              style={{ width: "400 px" }}
            >
              <FilterBar
                currentFilters={currentFilters}
                onChange={handleFilterChange}
                matchCounts={matchCounts}
                onClear={handleClearFilters}
                isFilterOpen={isFilterOpen}
              />
            </div>
          </Drawer>
        </FilterContainer>
      }
      <Menu role="menu">
        {SmallMenu()}
        <MenuItem
          to={{
            pathname: "/",
            search: "",
            hash: "",
            state: {toHome: true},
          }}
        >
          <Typography variant="body1">Home</Typography>
        </MenuItem>
        <MenuItem to="/results">
          <Typography variant="body1">Bay Area Relief Portal</Typography>
        </MenuItem>
        <MenuItem
          to={{
            pathname: "/",
            search: "",
            hash: "#about",
            state: {toAbout: true},
          }}
        >
          <Typography variant="body1">About</Typography>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
