import styled from 'styled-components/macro';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';


export const NavBar = styled(Navbar)`
  padding: .8rem 4%;
`;

export const Brand = styled(ReactRouterLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #216DE0!important;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    text-decoration: none;
  }
`;

export const Toggle = styled(Navbar.Toggle)``;

export const Collapse = styled(Navbar.Collapse)``;

export const Group = styled(Nav)`
  margin-left: auto;
  display: flex;
  align-items: center;7
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: .36rem .53rem;
  margin: 0 1rem; 
  ${({ active }) => active === 'true' ? 'color:#216DE0;' : 'color:#020202'};

  @media(max-width: 768px) {
    padding: .76rem .53rem;
    border: none;
  }

  &:hover {
    color: #216DE0!important;
    text-decoration: none;
`;

{ /* 
export const activeStyle = {
  color: '#216DE0',
  borderBottom: '2px solid #216DE0'
}; */}

export const NavButton = styled(Button)`
  margin: 0 1rem;
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: #216DE0;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  border-radius: 6px;
  color: #fff;
`;
