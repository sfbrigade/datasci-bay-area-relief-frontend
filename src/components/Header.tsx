import React, {useContext, useEffect, useState} from "react";
import {StyledComponent} from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/Logo.svg";

import {FilterBar} from "./results/FilterBar";

import Typography from "@material-ui/core/Typography";
import MatMenu from "@material-ui/core/Menu";
import MatMenuItem from "@material-ui/core/MenuItem";
import MatButton from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import {GlobalStateContext} from "../context/globalStates";
import {grabCurrentFiltersFromURLParams} from "../util/historyHelper";
import {
  FilterContainer,
  HiddenContainer,
  LogoWrapper, Menu, MenuItem,
  SmallMenuContainer,
  TransparentContainer,
  WhiteContainer
} from "./Header.styles";

const Header: React.FC = () => {
  const {
    setIsFilterOpen,
    setCurrentFilters,
  } = useContext(GlobalStateContext);

  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isResultsPage, setIsResultsPage] = useState(false);
  const [filterToggle, setFilterToggle] = React.useState(false);

  useEffect(() => {
    if (location.search) {
      setCurrentFilters(grabCurrentFiltersFromURLParams(location));
    }
  }, [setCurrentFilters, location]);

  // Update isResultsPage when location pathname changes;
  useEffect(() => {
    setIsResultsPage(location.pathname === "/results");
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
        // setIsFilterOpen(false);
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

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown") {
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
          state: {toAbout: true}
        }} onClick={handleClose}>
          About
        </MatMenuItem>
      </MatMenu>
    </SmallMenuContainer>
  );

  return (
    <Container>
      <LogoWrapper>
        <Logo role="logo"/>
      </LogoWrapper>
      {isResultsPage &&
      <FilterContainer>
        <Button onClick={toggleDrawer(true)}>{"filter"}</Button>
        <Drawer anchor={"left"} open={filterToggle} onClose={toggleDrawer(false)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{width: "400 px"}}
          >
            <FilterBar />
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
            state: {toHome: true}
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
            state: {toAbout: true}
          }}
        >
          <Typography variant="body1">About</Typography>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
