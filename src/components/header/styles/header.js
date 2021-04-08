import styled from "styled-components/macro";
import { Link as ReactRouterLink, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = styled(Navbar)`
  padding: 0.6rem 4%;
  ${({ bg }) => bg === "blue" && "background: #216DE0"};
`;

export const Collapse = styled(Navbar.Collapse)`
  &.show {
    ${NavBar} {
      background: #f8f9fa;
    }
  }
`;

export const Brand = styled(ReactRouterLink)`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: ${({ type }) => (type === "dashboard" ? "#fff" : "#216DE0")};
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: none;
    color: ${({ type }) => (type === "dashboard" ? "#fff" : "#216DE0")};
  }
`;

export const Toggle = styled(Navbar.Toggle)`
  border: none;

  :focus {
    outline: none;
  }
`;

export const Group = styled(Nav)`
  margin-left: ${({ type }) => (type === "user" ? "0" : "auto")};
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: inline;
  color: #fff;
  background: #216de0;
  margin: 0.4rem;
  font-size: 1.45rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.36rem 0.53rem;
  margin: 0 1rem;
  ${({ active }) => (active === "true" ? "color:#216DE0" : "color:#020202")};

  @media (max-width: 768px) {
    padding: 0.76rem 0.53rem;
    border: none;
  }

  &:hover {
    color: #216de0 !important;
    text-decoration: none;
  }
`;

export const TextLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: ${({ type }) => (type === "header" ? "#fff" : "#020202")};
  display: block;

  ${({ type }) => {
    return (
      type === "header" &&
      `
      font-style:normal;
      font-weight: normal;
      font-size: 16.5px;
      line-height: 24px; 
      @media(min-width:768px){
        margin-left: 3rem; 
      }`
    );
  }};

  &:hover {
    color: ${({ type }) => (type === "header" ? "#fff" : null)};
    text-decoration: none;
  }
  @media (max-width: 768px) {
    ${({ type }) => type === "header" && "margin: .5rem"};
  }
`;

export const Item = styled.div`
  background-color: inherit;
  width: 100%;
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;

  ${TextLink} {
    opacity: 0.8;
  }

  &:hover {
    background-color: rgba(33, 109, 224, 0.4);
    ${TextLink} {
      color: #0056b3;
    }
  }
`;

export const NavButton = styled(Button)`
  margin: 0 1rem;
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: #216de0;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 29px;
  border-radius: 6px;
  color: #fff;
  box-shadow: 0px 1px 20px -10px #216de0;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

export const UserNav = styled.nav`
  width: 250px;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #f2f6fb;
  position: absolute;
  right: 4%;
  top: 65px;
  height: ${({ active }) => (active ? "125px" : "0")};
  transition: all 0.3s ${({ active }) => (!active ? ".15s" : null)} ease;
  z-index: 10;
  padding-top: 0rem;

  > ${Item} {
    opacity: ${({ active }) => (active ? "1" : "0")};
    transition: opacity 0.07s ${({ active }) => (!active ? null : ".3s")};
  }

  @media (max-width: 992px) {
    right: 4%;
    top: 65px;
  }
  @media (max-width: 768px) {
    position: relative;
    right: 0;
    top: -5px;
  }
`;

export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  background: #216de0;
  padding: 0.8rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  min-width: 250px;
  font-size: 16.5px;

  @media (min-width: 768px) {
    margin-left: 5rem;
  }
`;

export const Avatar = styled(FontAwesomeIcon)`
  background: #216de0;
  color: #fff;
  font-size: 2rem;
`;

export const UserName = styled.p`
  margin-left: 0.4rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.07rem;
  line-height: normal;
  color: #ffffff;
  margin-bottom: 0;
  text-overflow: ellipsis;
`;
