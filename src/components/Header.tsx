import React, {useState, useEffect} from "react";
import styled, {StyledComponent} from "styled-components";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/Logo.svg";

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

const MenuItem = styled(Link)`
  display: block;
  color: black;
  text-align: center;
  margin-left: 32px;
  text-decoration: none;
  /* Body 1 / Source Sans Pro */

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  letter-spacing: 0.5px;

  /* Black — High Emphasis */

  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;

const Header: React.FC = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  let Container: StyledComponent<"header", any, {}, never>;
  if (location.pathname === "/results" || location.pathname === "/donate") {
    Container = WhiteContainer;
  } else {
    if (prevScrollPos > 0)
      Container = visible ? WhiteContainer : HiddenContainer;
    else Container = visible ? TransparentContainer : HiddenContainer;
  }

  return (
    <Container>
      <LogoWrapper>
        <Logo role="logo" />
      </LogoWrapper>
      <Menu role="menu">
        <MenuItem
          to={{
            pathname: "/",
            search: "",
            hash: "",
            state: {toHome: true},
          }}
        >
          Home
        </MenuItem>
        <MenuItem to="/results">Bay Area Relief Portal</MenuItem>
        <MenuItem
          to={{
            pathname: "/",
            search: "",
            hash: "#about",
            state: {toAbout: true},
          }}
        >
          About
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
