import styled from 'styled-components/macro';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

export const NavBar = styled(Navbar)`
  padding: .8rem 4%;
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


export const Group = styled(Nav)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: .36rem .53rem;
  margin: 0 1rem; 
  ${({ active }) => active === 'true' ? 'color:#216DE0;' : 'color:#020202;'};

  @media(max-width: 768px) {
    padding: .76rem .53rem;
    border: none;
  }

  &:hover {
    color: #216DE0!important;
    text-decoration: none;
  }
`;


export const NavButton = styled(Button)`
  margin: 0 1rem;
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: #216DE0;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 29px;
  border-radius: 6px;
  color: #fff;
  box-shadow: 0px 1px 20px -10px #216DE0;
  border: none;

  @media(max-width: 768px) {
    box-shadow: none;
  }
`;
