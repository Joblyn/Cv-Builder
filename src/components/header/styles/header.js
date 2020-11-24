import styled from 'styled-components/macro';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

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
  margin-left: ${({ type }) => type === 'user' ? '0' : 'auto'};
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

export const TextLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: #020202;
  display: block;
  
  &:hover {
    color:#216DE0; 
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
  cursor: pointer;

  @media(max-width: 768px) {
    box-shadow: none;
  }
`;

export const UserNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  border: 1px solid #216DE0;
  width: 249.27px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #F2F6FB;
  position: absolute;
  right: 4%;
  top: 65px;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  height: ${({ active }) => active ? '50px' : '0'};
  transition: height .3s ease;
  z-index: 10;

  & > ${TextLink} {
    opacity: ${({ active }) => active ? '1' : '0'};
    transition: opacity .1s .3s;
  }

  @media(max-width: 768px) {
    position: relative;
    right: 0;
    top: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #216DE0;
  padding: .8rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

export const Avatar = styled(FontAwesomeIcon)`
  background: #216DE0;
  color: #fff;
  font-size: 2rem;
`; 
export const UserName = styled.p`
  margin-left: .6rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: normal;
  color: #FFFFFF;
  margin-bottom: 0;
`;
