import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../assets/Logo.svg";

const Container = styled.header`
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
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.14);
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

const MenuItem = styled(Link)`
  display: block;
  color: black;
  text-align: center;
  margin-left: 32px;
  text-decoration: none;
  font-size: 18px;
  line-height: 28px;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo role="logo" />
      </LogoWrapper>
      <Menu role="menu">
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="#portal">Bay Area Relief Portal</MenuItem>
        <MenuItem to="/Aboutus">About</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
